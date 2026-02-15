/**
 * encriptar-scripts.js - Encrypt R scripts and CSV coordinate files
 *
 * Usage: node tools/encriptar-scripts.js
 *
 * Reads llave_maestra.key from project root, encrypts all .R and .csv files
 * in r-scripts/ (including coordenadas/), generates .enc files alongside originals.
 * Run this BEFORE npm run electron:build.
 */

const fs = require('fs');
const path = require('path');

const { encryptFile, deriveKey } = require('../electron/security/encryption.cjs');

const PROJECT_ROOT = path.join(__dirname, '..');
const LLAVE_MAESTRA_PATH = path.join(PROJECT_ROOT, 'llave_maestra.key');
const USB_KEY_PATH = path.join(PROJECT_ROOT, 'usb_key.bin');
const GITHUB_KEY_PATH = path.join(PROJECT_ROOT, 'github_key.bin');
const R_SCRIPTS_DIR = path.join(PROJECT_ROOT, 'r-scripts');

/**
 * Recursively find all files matching extensions in a directory
 * @param {string} dir
 * @param {string[]} extensions - e.g. ['.R', '.csv']
 * @returns {string[]} absolute paths
 */
function findFiles(dir, extensions) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, extensions));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function main() {
  console.log('=== ENCRIPTAR SCRIPTS R Y COORDENADAS ===\n');

  // Read key: prefer double-key fragments, fallback to legacy llave_maestra.key
  let key;
  if (fs.existsSync(USB_KEY_PATH) && fs.existsSync(GITHUB_KEY_PATH)) {
    const usbKey = fs.readFileSync(USB_KEY_PATH);
    const githubKey = fs.readFileSync(GITHUB_KEY_PATH);
    if (usbKey.length !== 16 || githubKey.length !== 16) {
      console.error('Fragmentos de llave tienen tamano incorrecto (esperado 16 bytes cada uno).');
      process.exit(1);
    }
    key = Buffer.from(deriveKey(usbKey, githubKey));
    console.log('Clave derivada de doble llave (HKDF: usb_key + github_key).\n');
  } else if (fs.existsSync(LLAVE_MAESTRA_PATH)) {
    key = fs.readFileSync(LLAVE_MAESTRA_PATH);
    if (key.length !== 32) {
      console.error(`llave_maestra.key tiene tamano incorrecto (${key.length} bytes, esperado 32).`);
      process.exit(1);
    }
    console.log('ADVERTENCIA: Usando llave_maestra.key directa (modo legacy).');
    console.log('Ejecute "node tools/generar-llaves.cjs" para migrar a doble llave.\n');
  } else {
    console.error('No se encontraron fragmentos de llave (usb_key.bin + github_key.bin)');
    console.error('ni llave_maestra.key en la raiz del proyecto.');
    console.error('Ejecute primero: node tools/generar-llaves.cjs');
    process.exit(1);
  }

  // Find all .R and .csv files
  if (!fs.existsSync(R_SCRIPTS_DIR)) {
    console.error(`Directorio r-scripts/ no encontrado: ${R_SCRIPTS_DIR}`);
    process.exit(1);
  }

  const files = findFiles(R_SCRIPTS_DIR, ['.r', '.csv']);

  if (files.length === 0) {
    console.error('No se encontraron archivos .R o .csv en r-scripts/');
    process.exit(1);
  }

  console.log(`Archivos a encriptar: ${files.length}\n`);

  let ok = 0;
  let errors = 0;

  for (const filePath of files) {
    const relativePath = path.relative(PROJECT_ROOT, filePath);
    const encPath = filePath + '.enc';

    try {
      encryptFile(filePath, encPath, key);
      const originalSize = fs.statSync(filePath).size;
      const encSize = fs.statSync(encPath).size;
      console.log(`  OK: ${relativePath} (${originalSize} -> ${encSize} bytes)`);
      ok++;
    } catch (err) {
      console.error(`  ERROR: ${relativePath} - ${err.message}`);
      errors++;
    }
  }

  console.log(`\n=== RESULTADO ===`);
  console.log(`Encriptados: ${ok}`);
  console.log(`Errores: ${errors}`);

  if (ok > 0) {
    console.log('\nArchivos .enc generados junto a los originales.');
    console.log('El build (electron-builder) solo empaquetara los .enc.');
    console.log('\nSiguiente paso: npm run electron:build');
  }

  if (errors > 0) {
    process.exit(1);
  }
}

main();
