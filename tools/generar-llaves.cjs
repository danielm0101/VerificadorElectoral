/**
 * generar-llaves.cjs - Split llave_maestra.key into USB + GitHub key fragments
 *
 * Usage: node tools/generar-llaves.cjs
 *
 * Takes llave_maestra.key (32 bytes) and splits it:
 *   - usb_key.bin (16 bytes) → goes to USB in VerificadorKey/llave.key
 *   - github_key.bin (16 bytes) → goes to verificador-registro repo
 *
 * The actual encryption key is derived via HKDF-SHA256(usb_key + github_key).
 * Neither fragment alone can decrypt anything.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const LLAVE_MAESTRA_PATH = path.join(PROJECT_ROOT, 'llave_maestra.key');
const USB_KEY_PATH = path.join(PROJECT_ROOT, 'usb_key.bin');
const GITHUB_KEY_PATH = path.join(PROJECT_ROOT, 'github_key.bin');

function main() {
  console.log('=== GENERAR PAR DE LLAVES (DOBLE LLAVE) ===\n');

  // Check if fragments already exist
  if (fs.existsSync(USB_KEY_PATH) && fs.existsSync(GITHUB_KEY_PATH)) {
    console.log('Los fragmentos usb_key.bin y github_key.bin ya existen.');
    console.log('Si desea regenerarlos, elimine ambos archivos primero.');
    process.exit(0);
  }

  // Read or generate master key
  let masterKey;
  if (fs.existsSync(LLAVE_MAESTRA_PATH)) {
    masterKey = fs.readFileSync(LLAVE_MAESTRA_PATH);
    if (masterKey.length !== 32) {
      console.error(`llave_maestra.key tiene tamano incorrecto (${masterKey.length} bytes, esperado 32).`);
      process.exit(1);
    }
    console.log('Llave maestra existente cargada (32 bytes).');
  } else {
    masterKey = crypto.randomBytes(32);
    fs.writeFileSync(LLAVE_MAESTRA_PATH, masterKey);
    console.log('Nueva llave_maestra.key generada (32 bytes random).');
  }

  // Split: first 16 bytes → USB, last 16 bytes → GitHub
  const usbKey = masterKey.subarray(0, 16);
  const githubKey = masterKey.subarray(16, 32);

  fs.writeFileSync(USB_KEY_PATH, usbKey);
  fs.writeFileSync(GITHUB_KEY_PATH, githubKey);

  console.log(`\nFragmentos generados:`);
  console.log(`  usb_key.bin    (${usbKey.length} bytes) → Copiar a USB con registrar-usb.cjs`);
  console.log(`  github_key.bin (${githubKey.length} bytes) → Copiar al repo verificador-registro\n`);

  // Derive and display the combined key for verification
  const { deriveKey } = require('../electron/security/encryption.cjs');
  const derivedKey = deriveKey(usbKey, githubKey);
  console.log(`Clave derivada (HKDF): ${derivedKey.toString('hex').substring(0, 16)}...`);

  console.log('\n=== SIGUIENTES PASOS ===');
  console.log('1. npm run security:register  → Registrar USB (copia usb_key.bin a la USB)');
  console.log('2. npm run security:encrypt   → Re-encriptar scripts con clave derivada');
  console.log('3. npm run security:publish   → Publicar github_key.bin y registry al repo');
}

main();
