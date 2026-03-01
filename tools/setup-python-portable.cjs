#!/usr/bin/env node
/**
 * setup-python-portable.cjs
 *
 * Descarga Python embeddable para Windows (amd64), instala pip,
 * y luego instala opencv-python + numpy.
 *
 * Resultado: carpeta python-portable/ lista para incluir en el build.
 *
 * Uso:
 *   node tools/setup-python-portable.cjs
 *   node tools/setup-python-portable.cjs --version 3.12.9
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { createWriteStream } = require('fs');

const ROOT = path.join(__dirname, '..');
const DEST = path.join(ROOT, 'python-portable');

// Versión por defecto (LTS estable)
const args = process.argv.slice(2);
const versionFlag = args.indexOf('--version');
const PYTHON_VERSION = versionFlag !== -1 ? args[versionFlag + 1] : '3.12.9';

const [major, minor] = PYTHON_VERSION.split('.');
const ZIP_NAME = `python-${PYTHON_VERSION}-embed-amd64.zip`;
const PYTHON_URL = `https://www.python.org/ftp/python/${PYTHON_VERSION}/${ZIP_NAME}`;
const GET_PIP_URL = 'https://bootstrap.pypa.io/get-pip.py';
const ZIP_PATH = path.join(ROOT, ZIP_NAME);
const GET_PIP_PATH = path.join(DEST, 'get-pip.py');
const PTH_FILE = path.join(DEST, `python${major}${minor}._pth`);
const PYTHON_EXE = path.join(DEST, 'python.exe');

// ─── helpers ─────────────────────────────────────────────────────────────────

function log(msg) { console.log(`[setup-python] ${msg}`); }

function download(url, dest) {
  return new Promise((resolve, reject) => {
    log(`Descargando ${url} ...`);
    const file = createWriteStream(dest);
    const get = (u) => https.get(u, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return get(res.headers.location);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} para ${u}`));
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
    get(url);
  });
}

function unzip(zipPath, destDir) {
  // Usa PowerShell en Windows, unzip en Linux/Mac (solo para desarrollo)
  if (process.platform === 'win32') {
    execSync(
      `powershell -NoProfile -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${destDir}' -Force"`,
      { stdio: 'inherit' }
    );
  } else {
    execSync(`unzip -o "${zipPath}" -d "${destDir}"`, { stdio: 'inherit' });
  }
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  // 1. Verificar si ya existe
  if (fs.existsSync(PYTHON_EXE)) {
    log(`python-portable ya existe (${PYTHON_EXE}). Borralo si quieres reinstalar.`);
    process.exit(0);
  }

  // 2. Crear carpeta destino
  fs.mkdirSync(DEST, { recursive: true });

  // 3. Descargar zip embeddable
  await download(PYTHON_URL, ZIP_PATH);

  // 4. Extraer
  log('Extrayendo...');
  unzip(ZIP_PATH, DEST);
  fs.unlinkSync(ZIP_PATH);

  // 5. Habilitar import site en el archivo ._pth (necesario para que pip funcione)
  if (fs.existsSync(PTH_FILE)) {
    let pth = fs.readFileSync(PTH_FILE, 'utf8');
    pth = pth.replace('#import site', 'import site');
    fs.writeFileSync(PTH_FILE, pth, 'utf8');
    log(`Habilitado import site en ${path.basename(PTH_FILE)}`);
  } else {
    log(`ADVERTENCIA: no se encontro ${path.basename(PTH_FILE)}. Busca manualmente el archivo ._pth y descomenta "import site".`);
  }

  // 6. Descargar get-pip.py
  await download(GET_PIP_URL, GET_PIP_PATH);

  // 7. Instalar pip
  log('Instalando pip...');
  execSync(`"${PYTHON_EXE}" "${GET_PIP_PATH}" --no-warn-script-location`, { stdio: 'inherit' });
  fs.unlinkSync(GET_PIP_PATH);

  // 8. Instalar dependencias de visión computacional
  log('Instalando opencv-python y numpy...');
  execSync(
    `"${PYTHON_EXE}" -m pip install opencv-python numpy --no-warn-script-location`,
    { stdio: 'inherit' }
  );

  log('✓ python-portable listo en: ' + DEST);
  log('  Ejecuta `npm run electron:build` para incluirlo en el instalador.');
}

main().catch((err) => {
  console.error('[setup-python] ERROR:', err.message);
  process.exit(1);
});