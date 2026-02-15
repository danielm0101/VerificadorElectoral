/**
 * encryption.cjs - AES-256-GCM encryption/decryption
 * Formato .enc: [12 bytes IV][ciphertext][16 bytes authTag]
 */

const crypto = require('crypto');
const fs = require('fs');

const IV_LENGTH = 12;
const AUTH_TAG_LENGTH = 16;
const ALGORITHM = 'aes-256-gcm';
const HKDF_SALT = 'verificador-electoral-2026';
const HKDF_INFO = 'script-decrypt';

/**
 * Derive a 32-byte AES-256 key from two 16-byte fragments using HKDF-SHA256.
 * Neither fragment alone can produce the key.
 * @param {Buffer} usbKey - 16-byte fragment from USB
 * @param {Buffer} githubKey - 16-byte fragment from GitHub
 * @returns {Buffer} 32-byte derived key
 */
function deriveKey(usbKey, githubKey) {
  const ikm = Buffer.concat([usbKey, githubKey]);
  return crypto.hkdfSync('sha256', ikm, HKDF_SALT, HKDF_INFO, 32);
}

/**
 * Encrypt a file using AES-256-GCM
 * @param {string} inputPath - Path to plaintext file
 * @param {string} outputPath - Path for encrypted output (.enc)
 * @param {Buffer} key - 32-byte encryption key
 */
function encryptFile(inputPath, outputPath, key) {
  const plaintext = fs.readFileSync(inputPath);
  const iv = crypto.randomBytes(IV_LENGTH);

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const authTag = cipher.getAuthTag();

  // Format: [IV (12)][ciphertext][authTag (16)]
  const output = Buffer.concat([iv, encrypted, authTag]);
  fs.writeFileSync(outputPath, output);
}

/**
 * Decrypt a .enc file using AES-256-GCM
 * @param {string} inputPath - Path to encrypted .enc file
 * @param {string} outputPath - Path for decrypted output
 * @param {Buffer} key - 32-byte encryption key
 * @returns {boolean} true if decryption succeeded
 */
function decryptFile(inputPath, outputPath, key) {
  const data = fs.readFileSync(inputPath);

  if (data.length < IV_LENGTH + AUTH_TAG_LENGTH) {
    throw new Error('Archivo encriptado corrupto: muy corto');
  }

  const iv = data.subarray(0, IV_LENGTH);
  const authTag = data.subarray(data.length - AUTH_TAG_LENGTH);
  const ciphertext = data.subarray(IV_LENGTH, data.length - AUTH_TAG_LENGTH);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  fs.writeFileSync(outputPath, decrypted);
  return true;
}

module.exports = { encryptFile, decryptFile, deriveKey };
