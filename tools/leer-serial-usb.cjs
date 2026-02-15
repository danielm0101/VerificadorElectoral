/**
 * leer-serial-usb.cjs - Tool for end users to read their USB serial
 *
 * The user runs this and sends the output to the admin.
 * Works on both Linux and Windows.
 *
 * Usage: node leer-serial-usb.cjs
 */

const { getRemovableDrives, hashSerial, getAllDriveHashes } = require('../electron/security/usb-detector.cjs');

console.log('=== LEER SERIAL DE USB ===\n');
console.log('Buscando USBs conectadas...\n');

const drives = getRemovableDrives();

if (drives.length === 0) {
  console.log('No se detectaron USBs.');
  console.log('Asegurese de tener una USB conectada.');
  process.exit(1);
}

for (const drive of drives) {
  console.log('USB:', drive.deviceId);
  console.log('Serial:', drive.serial);
  if (drive.extraSerials && drive.extraSerials.length > 0) {
    console.log('UUIDs:', drive.extraSerials.join(', '));
  }

  const hashes = getAllDriveHashes(drive);
  console.log('\n--- ENVIE ESTO AL ADMINISTRADOR ---');
  console.log(JSON.stringify({
    serial: drive.serial,
    extras: drive.extraSerials || [],
    hashes
  }));
  console.log('--- FIN ---\n');
}
