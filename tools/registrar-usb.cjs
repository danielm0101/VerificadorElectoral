/**
 * registrar-usb.cjs - CLI tool to register authorized USBs (v2)
 *
 * Two modes:
 *   LOCAL:  node tools/registrar-usb.cjs
 *           → Detects USB plugged in, registers it, copies llave.key
 *
 *   REMOTO: node tools/registrar-usb.cjs --serial "4480921125221478239" --extras "0DC877CD0B4932B8" --nombre "USB Pepito" --tier full --expira 2026-12-31
 *           → Registers by serial without USB plugged in (for remote registration)
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { getRemovableDrives, hashSerial, getAllDriveHashes, KEY_FOLDER, KEY_FILE } = require('../electron/security/usb-detector.cjs');

const REGISTRY_PATH = path.join(__dirname, '..', 'electron', 'security', 'registry.json');
const USB_KEY_PATH = path.join(__dirname, '..', 'usb_key.bin');

const VALID_TIERS = ['admin', 'extractor', 'comparador', 'full'];

// Parse CLI args
function parseArgs() {
  const args = {};
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--') && i + 1 < argv.length) {
      args[argv[i].slice(2)] = argv[i + 1];
      i++;
    }
  }
  return args;
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Load or create registry
function loadRegistry() {
  try {
    const reg = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
    if (!reg.version || reg.version < 2) {
      // Migrate v1 → v2
      const old = reg.autorizados || [];
      return {
        version: 2, updated: new Date().toISOString(), max_offline_days: 0,
        autorizados: old.map(e => typeof e === 'string'
          ? { hash: e, nombre: 'Legacy', expira: null, tier: 'full' } : e)
      };
    }
    return reg;
  } catch {
    return { version: 2, updated: new Date().toISOString(), max_offline_days: 0, autorizados: [] };
  }
}

function addHashes(registry, hashes, nombre, expira, tier) {
  const existing = new Set(registry.autorizados.map(e => e.hash));
  let added = 0;
  for (const hash of hashes) {
    if (!existing.has(hash)) {
      registry.autorizados.push({ hash, nombre: nombre || 'Sin nombre', expira, tier });
      added++;
    }
  }
  return added;
}

function saveRegistry(registry) {
  delete registry.signature;
  registry.updated = new Date().toISOString();
  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + '\n');
}

// ==========================================
// MODE: REMOTE (--serial flag)
// ==========================================
async function modoRemoto(args) {
  console.log('=== REGISTRO REMOTO DE USB ===\n');

  const serial = args.serial;
  if (!serial) {
    console.error('Falta --serial');
    process.exit(1);
  }

  const nombre = args.nombre || 'USB Remota';
  const tier = args.tier || 'full';
  const expira = args.expira || null;

  if (!VALID_TIERS.includes(tier)) {
    console.error(`Tier invalido: ${tier}. Opciones: ${VALID_TIERS.join(', ')}`);
    process.exit(1);
  }

  // Generate hashes from the serial + any extras
  const serials = new Set();
  serials.add(serial.toUpperCase());

  // Parse extras (comma-separated UUIDs)
  if (args.extras) {
    for (const extra of args.extras.split(',')) {
      const trimmed = extra.trim().toUpperCase();
      if (trimmed) {
        serials.add(trimmed);
        // Also no-dash variant
        const noDash = trimmed.replace(/-/g, '');
        if (noDash !== trimmed) serials.add(noDash);
        // NTFS 16-hex-char UUID substrings
        if (/^[0-9A-F]{16}$/.test(noDash)) {
          serials.add(noDash.substring(0, 8));
          serials.add(noDash.substring(8, 16));
        }
      }
    }
  }

  const hashes = [...serials].map(s => hashSerial(s));

  console.log(`Serial: ${serial}`);
  console.log(`Extras: ${args.extras || 'ninguno'}`);
  console.log(`Nombre: ${nombre}`);
  console.log(`Tier: ${tier}`);
  console.log(`Expira: ${expira || 'Nunca'}`);
  console.log(`Hashes: ${hashes.length} variantes\n`);

  const registry = loadRegistry();
  const added = addHashes(registry, hashes, nombre, expira, tier);
  saveRegistry(registry);

  console.log(`${added} hash(es) nuevos registrados.`);
  console.log(`Total entradas: ${registry.autorizados.length}`);
  console.log('\nSiguiente: npm run security:publish');
}

// ==========================================
// MODE: LOCAL (USB plugged in)
// ==========================================
async function modoLocal() {
  console.log('=== REGISTRAR USB LOCAL ===\n');

  // Verify usb_key.bin exists
  if (!fs.existsSync(USB_KEY_PATH)) {
    console.error('No se encontro usb_key.bin. Ejecute: node tools/generar-llaves.cjs');
    process.exit(1);
  }

  const usbKey = fs.readFileSync(USB_KEY_PATH);
  if (usbKey.length !== 16) {
    console.error(`usb_key.bin tamano incorrecto (${usbKey.length}, esperado 16).`);
    process.exit(1);
  }

  console.log('Buscando USBs conectadas...\n');
  const drives = getRemovableDrives();

  if (drives.length === 0) {
    console.error('No se detectaron USBs. Conecte una e intente de nuevo.');
    process.exit(1);
  }

  console.log('USBs detectadas:');
  drives.forEach((d, i) => {
    const extras = d.extraSerials && d.extraSerials.length > 0
      ? ` | UUIDs: ${d.extraSerials.join(', ')}` : '';
    console.log(`  [${i + 1}] ${d.deviceId} - Serial: ${d.serial}${extras}`);
  });
  console.log('');

  let selectedIndex;
  if (drives.length === 1) {
    const confirm = await ask(`Registrar ${drives[0].deviceId}? (s/n): `);
    if (confirm.toLowerCase() !== 's') { process.exit(0); }
    selectedIndex = 0;
  } else {
    const input = await ask(`Seleccione (1-${drives.length}): `);
    selectedIndex = parseInt(input, 10) - 1;
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= drives.length) {
      console.error('Seleccion invalida.'); process.exit(1);
    }
  }

  const drive = drives[selectedIndex];
  console.log(`\nUSB: ${drive.deviceId} (Serial: ${drive.serial})`);

  // Metadata
  const nombre = await ask('Nombre para esta USB: ');
  let expira = await ask('Expiracion (YYYY-MM-DD o Enter para nunca): ');
  expira = expira.trim() || null;
  if (expira && !/^\d{4}-\d{2}-\d{2}$/.test(expira)) {
    console.error('Formato invalido.'); process.exit(1);
  }
  let tier = await ask(`Tier (${VALID_TIERS.join('/')}) [full]: `);
  tier = tier.trim().toLowerCase() || 'full';
  if (!VALID_TIERS.includes(tier)) {
    console.error(`Tier invalido.`); process.exit(1);
  }

  // Register hashes
  const allHashes = getAllDriveHashes(drive);
  const registry = loadRegistry();
  const added = addHashes(registry, allHashes, nombre, expira, tier);
  saveRegistry(registry);

  console.log(`\n${added} hash(es) nuevos registrados.`);

  // Copy key to USB
  const usbKeyDir = path.join(drive.deviceId, KEY_FOLDER);
  const usbKeyPath = path.join(usbKeyDir, KEY_FILE);
  try {
    if (!fs.existsSync(usbKeyDir)) fs.mkdirSync(usbKeyDir, { recursive: true });
    fs.writeFileSync(usbKeyPath, usbKey);
    console.log(`Llave copiada a: ${usbKeyPath}`);
  } catch (err) {
    console.error(`Error copiando llave: ${err.message}`);
    console.error(`Copie manualmente usb_key.bin → ${usbKeyPath}`);
  }

  console.log('\n=== REGISTRO COMPLETO ===');
  console.log(`Siguiente: npm run security:publish`);

  rl.close();
}

// ==========================================
// MAIN
// ==========================================
const args = parseArgs();

if (args.serial) {
  modoRemoto(args).then(() => { rl.close(); }).catch(err => {
    console.error('Error:', err); rl.close(); process.exit(1);
  });
} else {
  modoLocal().catch(err => {
    console.error('Error:', err); rl.close(); process.exit(1);
  });
}
