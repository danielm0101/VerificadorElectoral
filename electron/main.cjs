const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

// Determinar si estamos en desarrollo o producción
const isDev = process.env.ELECTRON_DEV === 'true';

// Auto-updater (only in production)
let autoUpdater = null;
if (!isDev) {
  try {
    autoUpdater = require('electron-updater').autoUpdater;
    autoUpdater.autoDownload = false;
    autoUpdater.autoInstallOnAppQuit = true;
  } catch (err) {
    console.warn('electron-updater no disponible:', err.message);
  }
}

// Security: USB validation
let securityTempDir = null;
let securityStatus = { status: 'pending' };

let mainWindow;
let procesoRActual = null; // Referencia al proceso R en ejecución

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    icon: path.join(__dirname, '../public/icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    },
    autoHideMenuBar: true,
    titleBarStyle: 'default',
    show: false
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Crear carpeta de trabajo al iniciar
function crearCarpetaTrabajo() {
  // Usamos userData (%APPDATA%\Verificador Electoral) en lugar de Documents/Desktop
  // para evitar el bloqueo de Windows Defender (Controlled Folder Access)
  const carpetaBase = app.getPath('userData');
  const carpetas = [
    carpetaBase,
    path.join(carpetaBase, 'E14_PDFs'),
    path.join(carpetaBase, 'E14_CSVs'),
    path.join(carpetaBase, 'E24_MMV'),
    path.join(carpetaBase, 'Resultados'),
    path.join(carpetaBase, 'Evidencias')
  ];

  carpetas.forEach(carpeta => {
    if (!fs.existsSync(carpeta)) {
      fs.mkdirSync(carpeta, { recursive: true });
    }
  });

  return carpetaBase;
}

// Eventos de la aplicación
app.whenReady().then(() => {
  const carpetaTrabajo = crearCarpetaTrabajo();
  console.log('Carpeta de trabajo:', carpetaTrabajo);

  // Security validation (async - requires internet for double key + remote registry)
  createWindow();

  // Auto-updater (after window is created)
  setupAutoUpdater();

  const { validate } = require('./security/validator.cjs');
  const encryptedDir = isDev
    ? path.join(__dirname, '..', 'r-scripts')
    : path.join(process.resourcesPath, 'r-scripts');

  // Desencriptar en %APPDATA%\Verificador Electoral\Scripts\ (ya excluido de Defender)
  // en lugar de %TEMP% que Defender analiza en tiempo real
  const scriptsBaseDir = path.join(app.getPath('userData'), 'Scripts');

  validate(encryptedDir, scriptsBaseDir).then(result => {
    securityStatus = result;
    if (result.status === 'ok') {
      securityTempDir = result.scriptsDir;
      console.log('USB validada. Scripts desencriptados en:', securityTempDir);
      console.log('Tier:', result.tier || 'extractor');
    } else {
      console.warn('Validacion USB fallida:', result.status, result.message);
    }
    // Send security status to renderer
    if (mainWindow) {
      mainWindow.webContents.send('security-status', securityStatus);
    }
  }).catch(err => {
    console.error('Error en validacion de seguridad:', err.message);
    securityStatus = { status: 'llave_invalida', message: err.message };
    if (mainWindow) {
      mainWindow.webContents.send('security-status', securityStatus);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Cleanup temp decrypted scripts on quit
app.on('will-quit', () => {
  if (securityTempDir) {
    try {
      const { cleanupTempDir } = require('./security/validator.cjs');
      cleanupTempDir(securityTempDir);
      securityTempDir = null;
    } catch (err) {
      console.error('Error limpiando carpeta temporal:', err.message);
    }
  }
});

// ============================================
// Auto-Updater Setup
// ============================================

function setupAutoUpdater() {
  if (!autoUpdater) {
    console.log('[updater] autoUpdater no disponible');
    return;
  }
  if (isDev) {
    console.log('[updater] Saltando en modo desarrollo');
    return;
  }

  console.log('[updater] Configurando auto-updater...');
  console.log('[updater] App version:', app.getVersion());

  autoUpdater.on('checking-for-update', () => {
    console.log('[updater] Buscando actualizaciones...');
  });

  autoUpdater.on('update-available', (info) => {
    console.log('[updater] Actualizacion disponible:', info.version);
    if (mainWindow) {
      mainWindow.webContents.send('update-available', {
        version: info.version,
        releaseNotes: info.releaseNotes
      });
    }
  });

  autoUpdater.on('update-not-available', (info) => {
    console.log('[updater] No hay actualizaciones. Ultima version:', info.version);
  });

  autoUpdater.on('download-progress', (progress) => {
    console.log('[updater] Descargando:', Math.round(progress.percent) + '%');
    if (mainWindow) {
      mainWindow.webContents.send('update-progress', {
        percent: Math.round(progress.percent),
        transferred: progress.transferred,
        total: progress.total
      });
    }
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log('[updater] Actualizacion descargada:', info.version);
    if (mainWindow) {
      mainWindow.webContents.send('update-downloaded', {
        version: info.version
      });
    }
  });

  autoUpdater.on('error', (err) => {
    console.error('[updater] Error:', err.message);
    console.error('[updater] Stack:', err.stack);
    if (mainWindow) {
      mainWindow.webContents.send('update-error', {
        message: err.message
      });
    }
  });

  // Check for updates after window is ready
  setTimeout(() => {
    console.log('[updater] Iniciando busqueda de actualizaciones...');
    autoUpdater.checkForUpdates().catch(err => {
      console.error('[updater] Error buscando actualizaciones:', err.message);
    });
  }, 5000);
}

// ============================================
// IPC Handlers - Security
// ============================================

ipcMain.handle('obtener-security-status', () => {
  return securityStatus;
});

// ============================================
// IPC Handlers - Auto-Update
// ============================================

ipcMain.handle('descargar-actualizacion', async () => {
  if (!autoUpdater) return { success: false, error: 'Auto-updater no disponible' };
  try {
    await autoUpdater.downloadUpdate();
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('instalar-actualizacion', () => {
  if (!autoUpdater) return;
  autoUpdater.quitAndInstall(false, true);
});

// ============================================
// IPC Handlers - Comunicación con el Frontend
// ============================================

// Obtener ruta de carpeta de trabajo
ipcMain.handle('obtener-carpeta-trabajo', () => {
  return app.getPath('userData');
});

// Seleccionar carpeta con archivos PDF
ipcMain.handle('seleccionar-pdfs', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Seleccionar carpeta con archivos E-14 (PDF)',
    properties: ['openDirectory']
  });

  if (result.canceled) return { carpeta: '', archivos: [] };

  const carpeta = result.filePaths[0];

  // Buscar todos los archivos PDF en la carpeta (incluyendo subcarpetas)
  const buscarPDFs = (dir) => {
    let pdfs = [];
    const archivos = fs.readdirSync(dir);

    for (const archivo of archivos) {
      const rutaCompleta = path.join(dir, archivo);
      const stat = fs.statSync(rutaCompleta);

      if (stat.isDirectory()) {
        pdfs = pdfs.concat(buscarPDFs(rutaCompleta));
      } else if (archivo.toLowerCase().endsWith('.pdf')) {
        pdfs.push(rutaCompleta);
      }
    }

    return pdfs;
  };

  const archivosPDF = buscarPDFs(carpeta);
  console.log(`Encontrados ${archivosPDF.length} archivos PDF en ${carpeta}`);

  return { carpeta, archivos: archivosPDF };
});

// Seleccionar archivo CSV
ipcMain.handle('seleccionar-csv', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Seleccionar archivo CSV',
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    properties: ['openFile']
  });
  return result.canceled ? null : result.filePaths[0];
});

// Seleccionar archivo MMV (CSV oficial E-24)
ipcMain.handle('seleccionar-carpeta-mmv', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Seleccionar archivo MMV de E-24 (CSV)',
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    properties: ['openFile']
  });
  return result.canceled ? null : result.filePaths[0];
});

// Abrir carpeta en explorador
ipcMain.handle('abrir-carpeta', async (event, ruta) => {
  const carpetaBase = app.getPath('userData');
  const rutaCompleta = ruta ? path.join(carpetaBase, ruta) : carpetaBase;

  if (fs.existsSync(rutaCompleta)) {
    shell.openPath(rutaCompleta);
    return true;
  }
  return false;
});

// Abrir carpeta por ruta absoluta
ipcMain.handle('abrir-ruta', async (event, rutaAbsoluta) => {
  if (rutaAbsoluta && fs.existsSync(rutaAbsoluta)) {
    shell.openPath(rutaAbsoluta);
    return true;
  }
  return false;
});

// Abrir URL externa
ipcMain.handle('abrir-url', async (event, url) => {
  shell.openExternal(url);
  return true;
});

// Guardar configuración
ipcMain.handle('guardar-configuracion', async (event, config) => {
  const carpetaBase = app.getPath('userData');
  const archivoConfig = path.join(carpetaBase, 'config.json');

  try {
    fs.writeFileSync(archivoConfig, JSON.stringify(config, null, 2));
    return true;
  } catch (error) {
    console.error('Error guardando configuración:', error);
    return false;
  }
});

// Cargar configuración
ipcMain.handle('cargar-configuracion', async () => {
  const carpetaBase = app.getPath('userData');
  const archivoConfig = path.join(carpetaBase, 'config.json');

  try {
    if (fs.existsSync(archivoConfig)) {
      const data = fs.readFileSync(archivoConfig, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error cargando configuración:', error);
  }
  return null;
});

// ============================================
// Integración con R Portable - Version 2.0
// ============================================

// Obtener ruta de R Portable
function obtenerRutaR() {
  if (isDev) {
    // Dev: en Linux ignorar .exe de Windows, usar R del sistema directamente
    if (process.platform !== 'linux') {
      const rDev = path.join(__dirname, '..', 'r-portable', 'App', 'R-Portable', 'bin', 'x64', 'Rscript.exe');
      if (fs.existsSync(rDev)) return rDev;
      const rDev32 = path.join(__dirname, '..', 'r-portable', 'App', 'R-Portable', 'bin', 'Rscript.exe');
      if (fs.existsSync(rDev32)) return rDev32;
    }
    return 'Rscript'; // Fallback: R del sistema (Linux)
  } else {
    // Produccion: R Portable empaquetado en resources
    const rProd = path.join(process.resourcesPath, 'r-portable', 'App', 'R-Portable', 'bin', 'x64', 'Rscript.exe');
    if (fs.existsSync(rProd)) return rProd;
    return path.join(process.resourcesPath, 'r-portable', 'App', 'R-Portable', 'bin', 'Rscript.exe');
  }
}

// Obtener ruta de scripts R (siempre desde carpeta temporal desencriptada)
function obtenerRutaScripts() {
  if (securityTempDir) {
    return securityTempDir;
  }
  // Fallback (no deberia llegar aqui si la USB fue validada)
  if (isDev) {
    return path.join(__dirname, '..', 'r-scripts');
  }
  return path.join(process.resourcesPath, 'r-scripts');
}

// Obtener carpeta de salida (dentro de userData para evitar bloqueo CFA de Windows)
function obtenerCarpetaSalida() {
  return path.join(app.getPath('userData'), 'Resultados');
}

// Verificar si R está disponible
ipcMain.handle('verificar-r', async () => {
  const rPath = obtenerRutaR();
  const existe = fs.existsSync(rPath) || rPath === 'Rscript';
  return {
    disponible: existe,
    ruta: rPath
  };
});

// ============================================
// NUEVO: Convertir PDF a CSV con manifiesto
// ============================================

ipcMain.handle('convertir-pdf-csv-v2', async (event, { archivos, apiKey, modo = 'normal', tipoEleccion = '', codigoDepartamento = '', circunscripcion = '' }) => {
  console.log('=== convertir-pdf-csv-v2 LLAMADO ===');
  console.log('tipoEleccion:', JSON.stringify(tipoEleccion));
  console.log('archivos:', archivos?.length);
  console.log('modo:', modo);
  return new Promise((resolve) => {
    try {
      // Construir nombre del CSV de coordenadas según tipo de elección
      // Senado: senado.csv (nacional, uno solo)
      // Cámara: camara_XX.csv (por departamento, XX = código dept)
      // Consulta: consulta.csv (uno solo)
      // CITREP: citrep_XX.csv (por circunscripción, XX = número)
      let nombreCSV;
      // Normalizar: quitar tildes para comparación segura
      const tipoNorm = tipoEleccion.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      switch (tipoNorm) {
        case 'senado':
          nombreCSV = 'senado';
          break;
        case 'camara':
          if (!codigoDepartamento) {
            resolve({ success: false, error: 'Debe seleccionar un departamento para Cámara.' });
            return;
          }
          nombreCSV = `camara_${codigoDepartamento}`;
          break;
        case 'consulta':
          nombreCSV = 'consulta';
          break;
        case 'citrep':
          if (!circunscripcion) {
            resolve({ success: false, error: 'Debe seleccionar una circunscripción para CITREP.' });
            return;
          }
          // Extraer número de "CIRCUNSCRIPCION 1" → "01"
          const numCirc = circunscripcion.replace(/\D/g, '').padStart(2, '0');
          nombreCSV = `citrep_${numCirc}`;
          break;
        default:
          resolve({
            success: false,
            error: `Tipo de elección no reconocido: "${tipoEleccion}". Seleccione Senado, Cámara, Consulta o CITREP.`
          });
          return;
      }

      // Validar que existe el CSV de coordenadas ANTES de lanzar R
      const csvCoordenadas = path.join(obtenerRutaScripts(), 'coordenadas', `${nombreCSV}.csv`);
      if (!fs.existsSync(csvCoordenadas)) {
        resolve({
          success: false,
          error: `No existe el archivo de coordenadas para "${tipoEleccion}". Coloque el CSV en r-scripts/coordenadas/${nombreCSV}.csv`
        });
        return;
      }

      const rPath = obtenerRutaR();
      const scriptPath = path.join(obtenerRutaScripts(), 'extractor_v3.R');
      const outputDir = obtenerCarpetaSalida();

      // Crear carpeta de salida si no existe
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Crear manifiesto.json
      const manifiesto = {
        archivos: archivos,
        api_key: apiKey,
        carpeta_salida: outputDir,
        modo: modo,
        tipo_eleccion: nombreCSV
      };

      const manifiestoPath = path.join(outputDir, 'manifiesto.json');
      fs.writeFileSync(manifiestoPath, JSON.stringify(manifiesto, null, 2));

      console.log('=== INICIANDO PROCESO R ===');
      console.log('R Path:', rPath);
      console.log('Script:', scriptPath);
      console.log('Manifiesto:', manifiestoPath);
      console.log('Archivos a procesar:', archivos.length);
      console.log('Modo:', modo);

      // Determinar R_LIBS_USER segun entorno
      let rLibsUser;
      if (rPath === 'Rscript') {
        // Linux dev: usar library del usuario
        rLibsUser = process.env.R_LIBS_USER || path.join(process.env.HOME || '', 'R', 'x86_64-pc-linux-gnu-library', '4.5');
      } else {
        // Windows produccion: library de R Portable
        rLibsUser = path.join(path.dirname(path.dirname(path.dirname(rPath))), 'library');
      }

      // Ejecutar script R
      const rProcess = spawn(rPath, [
        '--vanilla',
        scriptPath,
        manifiestoPath
      ], {
        env: {
          ...process.env,
          R_LIBS_USER: rLibsUser
        }
      });

      let resultadoFinal = null;
      procesoRActual = rProcess; // Guardar referencia para poder cancelar
      let stdoutBufferV2 = ''; // Buffer para manejar JSON parcial entre chunks

      rProcess.stdout.on('data', (data) => {
        stdoutBufferV2 += data.toString();
        const lineas = stdoutBufferV2.split('\n');
        // Guardar la última línea (puede estar incompleta) para el próximo chunk
        stdoutBufferV2 = lineas.pop() || '';

        for (const linea of lineas) {
          const trimmed = linea.trim();
          if (!trimmed) continue;
          try {
            const evento = JSON.parse(trimmed);

            // Enviar evento al renderer
            if (mainWindow) {
              mainWindow.webContents.send('r-evento', evento);
            }

            console.log('[R Evento]', evento.tipo, evento.archivo || '');

            // Si es el evento final, guardarlo
            if (evento.tipo === 'fin') {
              resultadoFinal = evento;
            }
          } catch (e) {
            // No es JSON, ignorar (mensajes de R normales)
            console.log('[R]', trimmed);
          }
        }
      });

      rProcess.stderr.on('data', (data) => {
        console.error('[R Error]', data.toString().trim());
      });

      rProcess.on('close', (code) => {
        procesoRActual = null; // Limpiar referencia
        console.log('=== PROCESO R FINALIZADO ===');
        console.log('Código de salida:', code);

        // Procesar buffer restante (última línea sin newline final)
        if (stdoutBufferV2.trim()) {
          try {
            const evento = JSON.parse(stdoutBufferV2.trim());
            if (mainWindow) {
              mainWindow.webContents.send('r-evento', evento);
            }
            if (evento.tipo === 'fin') {
              resultadoFinal = evento;
            }
          } catch (e) {
            console.log('[R final]', stdoutBufferV2.trim());
          }
        }

        // Leer el log de proceso
        const logPath = path.join(outputDir, 'proceso_log.json');
        let procesoLog = null;

        if (fs.existsSync(logPath)) {
          try {
            procesoLog = JSON.parse(fs.readFileSync(logPath, 'utf8'));
          } catch (e) {
            console.error('Error leyendo proceso_log.json:', e);
          }
        }

        // Eliminar manifiesto (ya no se necesita)
        try {
          fs.unlinkSync(manifiestoPath);
        } catch (e) {}

        resolve({
          success: code === 0,
          code,
          outputDir,
          procesoLog,
          resultadoFinal
        });
      });

      rProcess.on('error', (err) => {
        console.error('Error ejecutando R:', err);
        resolve({
          success: false,
          error: err.message
        });
      });

    } catch (error) {
      console.error('Error en convertir-pdf-csv-v2:', error);
      resolve({
        success: false,
        error: error.message
      });
    }
  });
});

// ============================================
// NUEVO: Cancelar proceso R en ejecución
// ============================================

ipcMain.handle('cancelar-proceso-r', async () => {
  if (procesoRActual) {
    try {
      procesoRActual.kill('SIGTERM');
      console.log('Proceso R cancelado por el usuario');
      return { success: true };
    } catch (err) {
      console.error('Error cancelando proceso R:', err);
      return { success: false, error: err.message };
    }
  }
  return { success: false, error: 'No hay proceso R en ejecución' };
});

// ============================================
// NUEVO: Fusionar CSVs en archivo final
// ============================================

ipcMain.handle('fusionar-csvs', async () => {
  try {
    const outputDir = obtenerCarpetaSalida();

    // Buscar todos los CSVs de resultados (excluyendo el FINAL para evitar duplicados)
    const archivos = fs.readdirSync(outputDir);
    const csvsResultados = archivos
      .filter(f => f.startsWith('resultados_e14') && f.endsWith('.csv') && !f.includes('FINAL'))
      .sort();
    const csvRecuperados = archivos.find(f => f === 'recuperados_e14.csv');

    if (csvsResultados.length === 0) {
      return { success: false, error: 'No hay CSVs para fusionar' };
    }

    // Leer todos los CSVs
    let contenidoFinal = '';
    let primeraVez = true;

    for (const csv of csvsResultados) {
      const contenido = fs.readFileSync(path.join(outputDir, csv), 'utf8');
      const lineas = contenido.split('\n');

      if (primeraVez) {
        // Incluir header
        contenidoFinal += lineas.join('\n');
        primeraVez = false;
      } else {
        // Saltar header (primera línea)
        contenidoFinal += '\n' + lineas.slice(1).join('\n');
      }
    }

    // Agregar recuperados al final si existe
    if (csvRecuperados) {
      const contenidoRecuperados = fs.readFileSync(path.join(outputDir, csvRecuperados), 'utf8');
      const lineasRecuperados = contenidoRecuperados.split('\n');
      // Saltar header
      contenidoFinal += '\n' + lineasRecuperados.slice(1).join('\n');
    }

    // Limpiar líneas vacías al final
    contenidoFinal = contenidoFinal.replace(/\n+$/, '\n');

    // Guardar archivo final
    const archivoFinal = path.join(outputDir, 'resultados_e14_FINAL.csv');
    fs.writeFileSync(archivoFinal, contenidoFinal, 'utf8');

    console.log('CSV Final generado:', archivoFinal);

    return {
      success: true,
      archivoFinal,
      csvsIncluidos: [...csvsResultados, csvRecuperados].filter(Boolean)
    };

  } catch (error) {
    console.error('Error fusionando CSVs:', error);
    return {
      success: false,
      error: error.message
    };
  }
});

// ============================================
// NUEVO: Abrir carpeta de coordenadas
// ============================================

ipcMain.handle('abrir-carpeta-coordenadas', async () => {
  const carpeta = path.join(obtenerRutaScripts(), 'coordenadas');
  if (!fs.existsSync(carpeta)) {
    fs.mkdirSync(carpeta, { recursive: true });
  }
  const errorMsg = await shell.openPath(carpeta);
  return { success: !errorMsg, error: errorMsg || undefined, path: carpeta };
});

// ============================================
// NUEVO: Leer log de proceso
// ============================================

ipcMain.handle('leer-log-proceso', async () => {
  try {
    const outputDir = obtenerCarpetaSalida();
    const logPath = path.join(outputDir, 'proceso_log.json');

    if (fs.existsSync(logPath)) {
      const contenido = fs.readFileSync(logPath, 'utf8');
      return JSON.parse(contenido);
    }

    return null;
  } catch (error) {
    console.error('Error leyendo log:', error);
    return null;
  }
});

// ============================================
// NUEVO: Obtener archivos fallidos del log
// ============================================

ipcMain.handle('obtener-fallidos', async () => {
  try {
    const outputDir = obtenerCarpetaSalida();
    const logPath = path.join(outputDir, 'proceso_log.json');

    if (fs.existsSync(logPath)) {
      const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
      return log.fallidos || [];
    }

    return [];
  } catch (error) {
    console.error('Error obteniendo fallidos:', error);
    return [];
  }
});

// Abrir carpeta de resultados
ipcMain.handle('abrir-resultados', async () => {
  const outputDir = obtenerCarpetaSalida();

  // Crear carpeta si no existe
  if (!fs.existsSync(outputDir)) {
    try {
      fs.mkdirSync(outputDir, { recursive: true });
    } catch (error) {
      console.error('Error creando carpeta de resultados:', error);
      return { success: false, error: 'No se pudo crear la carpeta de resultados' };
    }
  }

  try {
    const errorMsg = await shell.openPath(outputDir);
    if (errorMsg) {
      console.error('Error abriendo carpeta:', errorMsg);
      return { success: false, error: errorMsg };
    }
    return { success: true, path: outputDir };
  } catch (error) {
    console.error('Error abriendo carpeta:', error);
    return { success: false, error: error.message };
  }
});

// ============================================
// Seleccionar carpeta de salida
// ============================================
ipcMain.handle('seleccionar-carpeta-salida', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Seleccionar carpeta donde guardar los resultados',
    properties: ['openDirectory', 'createDirectory']
  });
  return result.canceled ? null : result.filePaths[0];
});

// ============================================
// Comparar E14 extraidos vs E24 oficial (MMV)
// ============================================
ipcMain.handle('comparar-e14-e24', async (event, archivoCSV, archivoMMV, carpetaSalida) => {
  return new Promise((resolve) => {
    try {
      const rPath = obtenerRutaR();
      const scriptPath = path.join(obtenerRutaScripts(), 'comparador_discrepancias.R');
      const outputDir = carpetaSalida || obtenerCarpetaSalida();

      // Validar archivos
      if (!archivoCSV || !fs.existsSync(archivoCSV)) {
        return resolve({ success: false, error: 'Archivo CSV de datos extraidos no encontrado' });
      }
      if (!archivoMMV || !fs.existsSync(archivoMMV)) {
        return resolve({ success: false, error: 'Archivo MMV oficial no encontrado' });
      }
      if (!fs.existsSync(scriptPath)) {
        return resolve({ success: false, error: 'Script comparador_discrepancias.R no encontrado' });
      }

      // Crear carpeta de salida
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Crear manifiesto
      const manifiesto = {
        archivo_extraidos: archivoCSV,
        archivo_oficiales: archivoMMV,
        carpeta_salida: outputDir
      };

      const manifiestoPath = path.join(outputDir, 'manifiesto_comparacion.json');
      fs.writeFileSync(manifiestoPath, JSON.stringify(manifiesto, null, 2));

      console.log('=== INICIANDO COMPARACION ===');
      console.log('CSV Extraido:', archivoCSV);
      console.log('MMV Oficial:', archivoMMV);

      // Determinar R_LIBS_USER segun entorno (mismo criterio que convertir-pdf-csv-v2)
      let rLibsUser;
      if (rPath === 'Rscript') {
        // Linux dev: usar library del usuario
        rLibsUser = process.env.R_LIBS_USER || path.join(process.env.HOME || '', 'R', 'x86_64-pc-linux-gnu-library', '4.5');
      } else {
        // Windows produccion: library de R Portable
        rLibsUser = path.join(path.dirname(path.dirname(path.dirname(rPath))), 'library');
      }

      const rProcess = spawn(rPath, ['--vanilla', scriptPath, manifiestoPath], {
        env: {
          ...process.env,
          R_LIBS_USER: rLibsUser
        }
      });

      let resultadoFinal = null;
      procesoRActual = rProcess; // Rastrear para poder cancelar
      let stdoutBuffer = ''; // Buffer para manejar JSON parcial entre chunks

      rProcess.stdout.on('data', (data) => {
        stdoutBuffer += data.toString();
        const lineas = stdoutBuffer.split('\n');
        // Guardar la última línea (puede estar incompleta) para el próximo chunk
        stdoutBuffer = lineas.pop() || '';

        for (const linea of lineas) {
          const trimmed = linea.trim();
          if (!trimmed) continue;
          try {
            const evento = JSON.parse(trimmed);
            if (mainWindow) {
              mainWindow.webContents.send('r-evento', evento);
            }
            console.log('[R Comparacion]', evento.tipo, evento.mensaje || '');
            if (evento.tipo === 'fin') {
              resultadoFinal = evento;
            }
          } catch (e) {
            console.log('[R]', trimmed);
          }
        }
      });

      rProcess.stderr.on('data', (data) => {
        const msg = data.toString().trim();
        console.error('[R Error]', msg);
        // Enviar errores de R al frontend para que el usuario los vea
        if (mainWindow && msg) {
          mainWindow.webContents.send('r-evento', { tipo: 'error', mensaje: msg });
        }
      });

      rProcess.on('close', (code) => {
        procesoRActual = null;
        console.log('=== COMPARACION FINALIZADA ===', 'Codigo:', code);

        // Procesar buffer restante (última línea sin newline final)
        if (stdoutBuffer.trim()) {
          try {
            const evento = JSON.parse(stdoutBuffer.trim());
            if (mainWindow) {
              mainWindow.webContents.send('r-evento', evento);
            }
            if (evento.tipo === 'fin') {
              resultadoFinal = evento;
            }
          } catch (e) {
            console.log('[R final]', stdoutBuffer.trim());
          }
        }

        // Limpiar manifiesto
        try { fs.unlinkSync(manifiestoPath); } catch (e) {}

        resolve({
          success: code === 0,
          code,
          outputDir,
          resultado: resultadoFinal
        });
      });

      rProcess.on('error', (err) => {
        console.error('Error ejecutando R:', err);
        resolve({ success: false, error: err.message });
      });

    } catch (error) {
      console.error('Error en comparar-e14-e24:', error);
      resolve({ success: false, error: error.message });
    }
  });
});

