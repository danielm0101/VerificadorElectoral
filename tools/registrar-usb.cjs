/**
 * registrar-usb.cjs - CLI tool to register authorized USBs (v2: metadata + double key)
 *
 * Usage: node tools/registrar-usb.cjs
 *
 * Flow:
 * 1. Detect all removable USB drives
 * 2. Display list, admin selects one
 * 3. Prompt for metadata: nombre, expira, tier
 * 4. Hash ALL serial variants (hardware serial + filesystem UUIDs + normalized)
 *    → add to registry.json for cross-platform compatibility
 * 5. Copy usb_key.bin (16 bytes) to USB:/VerificadorKey/llave.key
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { getRemovableDrives, getAllDriveHashes, KEY_FOLDER, KEY_FILE } = require('../electron/security/usb-detector.cjs');

const REGISTRY_PATH = path.join(__dirname, '..', 'electron', 'security', 'registry.json');
const USB_KEY_PATH = path.join(__dirname, '..', 'usb_key.bin');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

const VALID_TIERS = ['admin', 'extractor', 'comparador', 'full'];

async function main() {
  console.log('=== REGISTRAR USB AUTORIZADA (v2) ===\n');

  // Verify usb_key.bin exists
  if (!fs.existsSync(USB_KEY_PATH)) {
    console.error('No se encontro usb_key.bin en la raiz del proyecto.');
    console.error('Ejecute primero: node tools/generar-llaves.cjs');
    process.exit(1);
  }

  const usbKey = fs.readFileSync(USB_KEY_PATH);
  if (usbKey.length !== 16) {
    console.error(`usb_key.bin tiene tamano incorrecto (${usbKey.length} bytes, esperado 16).`);
    process.exit(1);
  }

  // Step 1: Detect USBs
  console.log('Buscando unidades USB conectadas...\n');
  const drives = getRemovableDrives();

  if (drives.length === 0) {
    console.error('No se detectaron unidades USB.');
    console.error('Asegurese de tener una USB conectada e intente de nuevo.');
    process.exit(1);
  }

  // Step 2: Display and select
  console.log('USBs detectadas:');
  drives.forEach((d, i) => {
    const extras = d.extraSerials && d.extraSerials.length > 0
      ? ` | UUIDs: ${d.extraSerials.join(', ')}`
      : '';
    console.log(`  [${i + 1}] ${d.deviceId} - Serial: ${d.serial}${extras}`);
  });
  console.log('');

  let selectedIndex;
  if (drives.length === 1) {
    const confirm = await ask(`Solo hay una USB (${drives[0].deviceId}). Registrar esta? (s/n): `);
    if (confirm.toLowerCase() !== 's') {
      console.log('Cancelado.');
      process.exit(0);
    }
    selectedIndex = 0;
  } else {
    const input = await ask(`Seleccione una USB (1-${drives.length}): `);
    selectedIndex = parseInt(input, 10) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= drives.length) {
      console.error('Seleccion invalida.');
      process.exit(1);
    }
  }

  const selectedDrive = drives[selectedIndex];
  console.log(`\nUSB seleccionada: ${selectedDrive.deviceId} (Serial: ${selectedDrive.serial})`);
  if (selectedDrive.extraSerials && selectedDrive.extraSerials.length > 0) {
    console.log(`UUIDs del filesystem: ${selectedDrive.extraSerials.join(', ')}`);
  }

  // Step 3: Collect metadata
  console.log('\n--- Metadata de la USB ---');
  const nombre = await ask('Nombre/etiqueta para esta USB: ');

  let expira = await ask('Fecha de expiracion (YYYY-MM-DD, o Enter para sin expiracion): ');
  if (expira.trim()) {
    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(expira.trim())) {
      console.error('Formato de fecha invalido. Use YYYY-MM-DD.');
      process.exit(1);
    }
    expira = expira.trim();
  } else {
    expira = null;
  }

  let tier = await ask(`Tier (${VALID_TIERS.join(' / ')}) [full]: `);
  tier = tier.trim().toLowerCase() || 'full';
  if (!VALID_TIERS.includes(tier)) {
    console.error(`Tier invalido. Opciones: ${VALID_TIERS.join(', ')}`);
    process.exit(1);
  }

  // Step 4: Hash ALL serial variants and add to registry
  // This registers hashes for: hardware serial, filesystem UUIDs, and normalized variants
  // Ensures the USB works on both Linux (lsblk serial) and Windows (wmic VolumeSerialNumber)
  const allHashes = getAllDriveHashes(selectedDrive);
  console.log(`\nHashes a registrar (${allHashes.length} variantes):`);
  allHashes.forEach(h => console.log(`  ${h}`));

  // Load or create registry
  let registry;
  try {
    registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  } catch (err) {
    registry = {
      version: 2,
      updated: new Date().toISOString(),
      max_offline_days: 0,
      autorizados: []
    };
  }

  // Ensure v2 format
  if (!registry.version || registry.version < 2) {
    // Migrate from v1 (flat hash array) to v2 (objects with metadata)
    const oldEntries = registry.autorizados || [];
    registry.version = 2;
    registry.max_offline_days = 0;
    registry.autorizados = oldEntries.map(entry => {
      if (typeof entry === 'string') {
        return { hash: entry, nombre: 'Legacy', expira: null, tier: 'full' };
      }
      return entry;
    });
  }

  // Add new hashes (check for duplicates by hash)
  const existingHashes = new Set(registry.autorizados.map(e => e.hash));
  let newCount = 0;
  for (const hash of allHashes) {
    if (!existingHashes.has(hash)) {
      registry.autorizados.push({
        hash,
        nombre: nombre || 'Sin nombre',
        expira,
        tier
      });
      newCount++;
    }
  }

  registry.updated = new Date().toISOString();

  // Remove signature before saving locally (will be signed by publicar-registro.cjs)
  delete registry.signature;

  if (newCount === 0) {
    console.log('\nTodos los hashes de esta USB ya estan registrados.');
  } else {
    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + '\n');
    console.log(`\n${newCount} hash(es) nuevos registrados en registry.json`);
  }

  // Step 5: Copy USB key fragment to USB
  const usbKeyDir = path.join(selectedDrive.deviceId, KEY_FOLDER);
  const usbKeyPath = path.join(usbKeyDir, KEY_FILE);

  try {
    if (!fs.existsSync(usbKeyDir)) {
      fs.mkdirSync(usbKeyDir, { recursive: true });
    }
    fs.writeFileSync(usbKeyPath, usbKey);
    console.log(`Fragmento USB (16 bytes) copiado a: ${usbKeyPath}`);
  } catch (err) {
    console.error(`Error copiando llave a USB: ${err.message}`);
    console.error(`Copie manualmente: usb_key.bin -> ${usbKeyPath}`);
    process.exit(1);
  }

  console.log('\n=== REGISTRO COMPLETO ===');
  console.log(`USB: ${nombre || 'Sin nombre'}`);
  console.log(`Tier: ${tier}`);
  console.log(`Expira: ${expira || 'Nunca'}`);
  console.log(`Total entradas en registro: ${registry.autorizados.length}`);
  console.log('\nSiguiente paso: npm run security:publish  (firmar y publicar registro)');
  console.log('NOTA: Si esta USB se usara en Windows Y Linux, ejecute este');
  console.log('comando en AMBAS plataformas para registrar todos los seriales.');

  rl.close();
}

main().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});
