const { contextBridge, ipcRenderer } = require('electron');

// Exponer APIs seguras al frontend
contextBridge.exposeInMainWorld('electronAPI', {
  // Carpetas y archivos
  obtenerCarpetaTrabajo: () => ipcRenderer.invoke('obtener-carpeta-trabajo'),
  seleccionarPDFs: () => ipcRenderer.invoke('seleccionar-pdfs'),
  seleccionarCSV: () => ipcRenderer.invoke('seleccionar-csv'),
  seleccionarCarpetaMMV: () => ipcRenderer.invoke('seleccionar-carpeta-mmv'),
  abrirCarpeta: (ruta) => ipcRenderer.invoke('abrir-carpeta', ruta),
  abrirRuta: (rutaAbsoluta) => ipcRenderer.invoke('abrir-ruta', rutaAbsoluta),
  abrirURL: (url) => ipcRenderer.invoke('abrir-url', url),

  // Configuración
  guardarConfiguracion: (config) => ipcRenderer.invoke('guardar-configuracion', config),
  cargarConfiguracion: () => ipcRenderer.invoke('cargar-configuracion'),

  // Integración con R
  verificarR: () => ipcRenderer.invoke('verificar-r'),

  // NUEVO: Conversión v2 con manifiesto
  convertirPDFaCSVv2: (params) => ipcRenderer.invoke('convertir-pdf-csv-v2', params),

  // NUEVO: Cancelar proceso R
  cancelarProcesoR: () => ipcRenderer.invoke('cancelar-proceso-r'),

  // NUEVO: Fusionar CSVs en archivo final
  fusionarCSVs: () => ipcRenderer.invoke('fusionar-csvs'),

  // NUEVO: Leer log de proceso
  leerLogProceso: () => ipcRenderer.invoke('leer-log-proceso'),

  // NUEVO: Obtener archivos fallidos
  obtenerFallidos: () => ipcRenderer.invoke('obtener-fallidos'),

  // Abrir carpeta de coordenadas
  abrirCarpetaCoordenadas: () => ipcRenderer.invoke('abrir-carpeta-coordenadas'),

  // Comparación E14-E24
  seleccionarCarpetaSalida: () => ipcRenderer.invoke('seleccionar-carpeta-salida'),
  compararE14E24: (archivoCSV, carpetaMMV, carpetaSalida) => ipcRenderer.invoke('comparar-e14-e24', archivoCSV, carpetaMMV, carpetaSalida),
  abrirResultados: () => ipcRenderer.invoke('abrir-resultados'),

  // LEGACY: Mantener compatibilidad (deprecado)
  convertirPDFaCSV: (carpetaPDFs) => ipcRenderer.invoke('convertir-pdf-csv', carpetaPDFs),

  // Escuchar progreso de R (LEGACY)
  onProgresoR: (callback) => {
    ipcRenderer.on('r-progreso', (event, data) => callback(data));
  },
  removeProgresoR: () => {
    ipcRenderer.removeAllListeners('r-progreso');
  },

  // NUEVO: Escuchar eventos JSON de R
  onEventoR: (callback) => {
    ipcRenderer.on('r-evento', (event, data) => callback(data));
  },
  removeEventoR: () => {
    ipcRenderer.removeAllListeners('r-evento');
  },

  // Security - USB validation
  obtenerSecurityStatus: () => ipcRenderer.invoke('obtener-security-status'),
  onSecurityStatus: (callback) => {
    ipcRenderer.on('security-status', (event, data) => callback(data));
  },
  removeSecurityStatus: () => {
    ipcRenderer.removeAllListeners('security-status');
  },

  // Auto-Update
  descargarActualizacion: () => ipcRenderer.invoke('descargar-actualizacion'),
  instalarActualizacion: () => ipcRenderer.invoke('instalar-actualizacion'),
  onUpdateAvailable: (callback) => {
    ipcRenderer.on('update-available', (event, data) => callback(data));
  },
  onUpdateProgress: (callback) => {
    ipcRenderer.on('update-progress', (event, data) => callback(data));
  },
  onUpdateDownloaded: (callback) => {
    ipcRenderer.on('update-downloaded', (event, data) => callback(data));
  },
  removeUpdateListeners: () => {
    ipcRenderer.removeAllListeners('update-available');
    ipcRenderer.removeAllListeners('update-progress');
    ipcRenderer.removeAllListeners('update-downloaded');
  },

  // Info del sistema
  plataforma: process.platform,
  version: process.versions.electron
});

// Notificar que la API está lista
window.addEventListener('DOMContentLoaded', () => {
  console.log('Electron API lista - v2.0');
});