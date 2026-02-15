import { useState, useEffect, useRef } from 'react';
import logoCNE from './assets/logo-cne.png';
import ejemploFormatos from './assets/ejemplo-formatos-e14-e24.png';
import guiaDriveHojas from './assets/guia-drive-hojas-calculo.png';
import {
  getDepartamentos,
  getMunicipiosByDepartamento,
  getZonasByMunicipio,
  getCircunscripcionesCITREP,
  getDepartamentosByCITREP,
  getMunicipiosByCITREP,
  getZonasCITREP,
  getCodigoDepartamento,
  Zona
} from './divipoleData';

// Tipos para archivos procesados
interface ArchivoExitoso {
  archivo: string;
  filas: number;
  validacion: string;
}

interface ArchivoFallido {
  archivo: string;
  ruta: string;
  error: string;
}

interface DiscrepanciaFila {
  mesa: string;
  puesto: string;
  nombre: string;
  votos_oficial: number;
  votos_extraido: number;
  discrepancia: number;
  tipo: string;
}

interface EventoR {
  tipo: string;
  archivo?: string;
  ruta?: string;
  indice?: number;
  total?: number;
  filas?: number;
  error?: string;
  mensaje?: string;
  lote?: number;
  total_lotes?: number;
  exitosos?: number;
  fallidos?: number;
  nombre?: string;
  validacion?: string;
  // Campos de comparacion de discrepancias
  paso?: string;
  total_registros?: number;
  total_coinciden?: number;
  total_discrepancias?: number;
  porcentaje_coinciden?: number;
  casos_registraduria_mas?: number;
  votos_registraduria_mas?: number;
  casos_registraduria_menos?: number;
  votos_registraduria_menos?: number;
  no_encontrados?: number;
  archivo_discrepancias?: string;
  archivo_completo?: string;
  detalle?: DiscrepanciaFila[];
}

// Tipo de error detectado
type TipoError = 'api_key' | 'cuota_excedida' | 'rate_limit' | 'conexion' | 'servidor' | 'pdf_corrupto' | 'pdf_no_encontrado' | 'respuesta_ia' | 'imagen_grande' | 'otro';

// Clasificación de errores mapeada a los mensajes reales del script R
function clasificarError(error: string): { tipo: TipoError; mensaje: string } {
  const e = error.toLowerCase();

  // =============================================
  // 1. API KEY INVÁLIDA
  // OpenAI: "Incorrect API key provided: sk-proj-****..."
  // Claude: "invalid x-api-key"
  // =============================================
  if (
    e.includes('incorrect api key') ||
    e.includes('invalid api key') ||
    e.includes('invalid_api_key') ||
    e.includes('invalid x-api-key') ||
    e.includes('authentication_error') ||
    e.includes('unauthorized') ||
    e.includes('invalid bearer')
  ) {
    return {
      tipo: 'api_key',
      mensaje: 'La API Key es incorrecta. Ve a Identificación y verifica que la hayas copiado completa.'
    };
  }

  // =============================================
  // 2. CUOTA / CRÉDITOS AGOTADOS
  // OpenAI: "You exceeded your current quota, please check your plan and billing details"
  // Claude: "Your credit balance is too low..."
  // OpenAI: "insufficient_quota"
  // =============================================
  if (
    e.includes('exceeded your current quota') ||
    e.includes('credit balance is too low') ||
    e.includes('insufficient_quota') ||
    e.includes('insufficient credits') ||
    e.includes('out of credits') ||
    e.includes('billing')
  ) {
    return {
      tipo: 'cuota_excedida',
      mensaje: 'La API Key no tiene créditos disponibles. Recarga tu saldo en la plataforma del proveedor (OpenAI o Anthropic).'
    };
  }

  // =============================================
  // 3. RATE LIMIT (límite de velocidad)
  // OpenAI: "Rate limit reached for gpt-4o..."
  // Claude: "Number of request tokens has exceeded your per-model limit"
  // =============================================
  if (
    e.includes('rate limit') ||
    e.includes('rate_limit') ||
    e.includes('too many requests') ||
    e.includes('exceeded your per-model limit')
  ) {
    return {
      tipo: 'rate_limit',
      mensaje: 'Se alcanzó el límite de solicitudes por minuto de la API. Espera unos minutos y reintenta.'
    };
  }

  // =============================================
  // 4. SERVIDOR DE IA NO DISPONIBLE
  // OpenAI: "The server had an error while processing your request"
  // Claude: "overloaded_error"
  // =============================================
  if (
    e.includes('server had an error') ||
    e.includes('overloaded_error') ||
    e.includes('overloaded') ||
    e.includes('internal server error') ||
    e.includes('service unavailable') ||
    e.includes('bad gateway') ||
    e.includes('502') ||
    e.includes('503')
  ) {
    return {
      tipo: 'servidor',
      mensaje: 'El servidor de IA está sobrecargado o con problemas temporales. Reintenta en unos minutos.'
    };
  }

  // =============================================
  // 5. CONEXIÓN A INTERNET
  // curl: "Could not resolve host"
  // curl: "Connection timed out"
  // curl: "Failed to connect"
  // =============================================
  if (
    e.includes('could not resolve host') ||
    e.includes('failed to connect') ||
    e.includes('connection refused') ||
    e.includes('connection timed out') ||
    e.includes('network error') ||
    e.includes('econnrefused') ||
    e.includes('enotfound') ||
    e.includes('etimedout') ||
    e.includes('econnreset') ||
    e.includes('socket hang up') ||
    e.includes('getaddrinfo') ||
    e.includes('no internet') ||
    e.includes('offline') ||
    e.includes('premature eof') ||
    e.includes('unexpected eof') ||
    e.includes('connection reset')
  ) {
    return {
      tipo: 'conexion',
      mensaje: 'No hay conexión a internet o el servidor no responde. Verifica tu conexión y reintenta.'
    };
  }

  // =============================================
  // 6. IMAGEN MUY GRANDE PARA LA API
  // OpenAI: "Request too large for gpt-4o..."
  // Claude: "request too large"
  // =============================================
  if (
    e.includes('request too large') ||
    e.includes('payload too large') ||
    e.includes('content too large')
  ) {
    return {
      tipo: 'imagen_grande',
      mensaje: 'El archivo PDF genera una imagen demasiado grande para la API. Intenta con un PDF de menor resolución.'
    };
  }

  // =============================================
  // 7. PDF DAÑADO O CORRUPTO
  // pdftools: "PDF file is damaged"
  // pdftools: "error reading page"
  // pdftools: "not a PDF file"
  // magick: "unable to read image"
  // =============================================
  if (
    e.includes('pdf file is damaged') ||
    e.includes('pdf damaged') ||
    e.includes('not a pdf file') ||
    e.includes('error reading page') ||
    e.includes('unable to read image') ||
    e.includes('corrupted') ||
    e.includes('pdf is empty') ||
    e.includes('no pages')
  ) {
    return {
      tipo: 'pdf_corrupto',
      mensaje: 'El archivo PDF está dañado o no es un PDF válido. Descárgalo nuevamente desde la fuente original.'
    };
  }

  // =============================================
  // 8. ARCHIVO NO ENCONTRADO
  // R: "cannot open file '...': No such file or directory"
  // =============================================
  if (
    e.includes('no such file or directory') ||
    e.includes('cannot open file') ||
    e.includes('file not found') ||
    e.includes('does not exist')
  ) {
    return {
      tipo: 'pdf_no_encontrado',
      mensaje: 'El archivo PDF no se encontró en la ruta indicada. Puede que se haya movido o eliminado.'
    };
  }

  // =============================================
  // 9. RESPUESTA DE IA NO INTERPRETABLE
  // R: "No se pudo parsear la respuesta JSON"
  // R: "Sin datos extraidos"
  // R: "Respuesta inesperada de OpenAI API"
  // R: "Respuesta inesperada de Claude API"
  // =============================================
  if (
    e.includes('no se pudo parsear') ||
    e.includes('sin datos extraidos') ||
    e.includes('respuesta inesperada') ||
    e.includes('parse error') ||
    e.includes('unexpected token') ||
    e.includes('unexpected end') ||
    e.includes('json parse')
  ) {
    return {
      tipo: 'respuesta_ia',
      mensaje: 'La IA no pudo leer correctamente este PDF. El formato puede ser diferente al esperado. Reintenta o revísalo manualmente.'
    };
  }

  // =============================================
  // 10. ERROR DESCONOCIDO - mostrar el mensaje original
  // =============================================
  return {
    tipo: 'otro',
    mensaje: `Error inesperado: ${error}`
  };
}


// Tipos para la API de Electron
declare global {
  interface Window {
    electronAPI?: {
      obtenerCarpetaTrabajo: () => Promise<string>;
      seleccionarPDFs: () => Promise<{ carpeta: string; archivos: string[] }>;
      seleccionarCSV: () => Promise<string | null>;
      seleccionarCarpetaMMV: () => Promise<string | null>;
      abrirCarpeta: (ruta?: string) => Promise<boolean>;
      abrirRuta: (rutaAbsoluta: string) => Promise<boolean>;
      abrirURL: (url: string) => Promise<boolean>;
      guardarConfiguracion: (config: object) => Promise<boolean>;
      cargarConfiguracion: () => Promise<object | null>;
      // Integración con R v2
      verificarR: () => Promise<{ disponible: boolean; ruta: string }>;
      cancelarProcesoR: () => Promise<{ success: boolean; error?: string }>;
      convertirPDFaCSVv2: (params: { archivos: string[]; apiKey: string; modo?: string; tipoEleccion?: string; codigoDepartamento?: string; circunscripcion?: string }) => Promise<{
        success: boolean;
        code?: number;
        outputDir?: string;
        procesoLog?: {
          exitosos: ArchivoExitoso[];
          fallidos: ArchivoFallido[];
          estadisticas: { total: number; ok: number; error: number; tasa_exito: number };
        };
        error?: string;
      }>;
      fusionarCSVs: () => Promise<{ success: boolean; archivoFinal?: string; error?: string }>;
      leerLogProceso: () => Promise<object | null>;
      obtenerFallidos: () => Promise<ArchivoFallido[]>;
      seleccionarCarpetaSalida: () => Promise<string | null>;
      compararE14E24: (archivoCSV: string, archivoMMV: string, carpetaSalida?: string) => Promise<{
        success: boolean;
        error?: string;
        outputDir?: string;
        resultado?: {
          total_registros: number;
          total_coinciden: number;
          total_discrepancias: number;
          porcentaje_coinciden: number;
          casos_registraduria_mas: number;
          votos_registraduria_mas: number;
          casos_registraduria_menos: number;
          votos_registraduria_menos: number;
          no_encontrados: number;
          archivo_discrepancias: string;
          archivo_completo: string;
        };
      }>;
      abrirResultados: () => Promise<{ success: boolean; path?: string; error?: string }>;
      abrirCarpetaCoordenadas: () => Promise<{ success: boolean; path?: string; error?: string }>;
      // Eventos de R
      onEventoR: (callback: (data: EventoR) => void) => void;
      removeEventoR: () => void;
      // Legacy
      onProgresoR: (callback: (data: string) => void) => void;
      removeProgresoR: () => void;
      // Security - USB validation (v2: includes tier)
      obtenerSecurityStatus: () => Promise<{ status: string; message?: string; tier?: string }>;
      onSecurityStatus: (callback: (data: { status: string; message?: string; tier?: string }) => void) => void;
      removeSecurityStatus: () => void;
      // Auto-Update
      descargarActualizacion: () => Promise<{ success: boolean; error?: string }>;
      instalarActualizacion: () => void;
      onUpdateAvailable: (callback: (data: { version: string }) => void) => void;
      onUpdateProgress: (callback: (data: { percent: number }) => void) => void;
      onUpdateDownloaded: (callback: (data: { version: string }) => void) => void;
      removeUpdateListeners: () => void;
    };
  }
}

type Seccion = 'informacion' | 'identificacion' | 'extraccion' | 'comparacion_automatica' | 'comparacion_archivos' | 'comparacion_manual';

// ============================================
// COMPONENTE MODAL DE ERRORES
// ============================================
interface ModalErroresProps {
  visible: boolean;
  exitosos: ArchivoExitoso[];
  fallidos: ArchivoFallido[];
  errorDetectado: { tipo: TipoError; mensaje: string } | null;
  onReintentar: () => void;
  onIgnorar: () => void;
  onVerUbicacion: () => void;
  onCerrar: () => void;
}

function ModalErrores({ visible, exitosos, fallidos, errorDetectado, onReintentar, onIgnorar, onVerUbicacion, onCerrar }: ModalErroresProps) {
  if (!visible) return null;

  const total = exitosos.length + fallidos.length;
  const hayErrores = fallidos.length > 0;
  const tipoError = errorDetectado?.tipo;

  // Errores donde no se puede continuar procesando (necesita acción del usuario primero)
  const esErrorCritico = tipoError === 'api_key' || tipoError === 'cuota_excedida' || tipoError === 'conexion';
  // Errores que se pueden reintentar directamente
  const esReintentable = tipoError === 'conexion' || tipoError === 'servidor' || tipoError === 'rate_limit';

  // Error previo al procesamiento (ej: CSV coordenadas faltante, tipo de elección inválido)
  const esErrorPrevio = tipoError === 'otro' && !hayErrores && total === 0;

  const getTituloError = () => {
    switch (tipoError) {
      case 'api_key':           return 'API KEY INCORRECTA';
      case 'cuota_excedida':    return 'SIN CRÉDITOS EN LA API';
      case 'rate_limit':        return 'LÍMITE DE SOLICITUDES';
      case 'conexion':          return 'SIN CONEXIÓN A INTERNET';
      case 'servidor':          return 'SERVIDOR NO DISPONIBLE';
      case 'imagen_grande':     return 'ARCHIVO MUY GRANDE';
      case 'pdf_corrupto':      return 'PDF DAÑADO';
      case 'pdf_no_encontrado': return 'ARCHIVO NO ENCONTRADO';
      case 'respuesta_ia':      return 'ERROR DE LECTURA DE IA';
      default:
        if (esErrorPrevio) return 'ERROR DE CONFIGURACIÓN';
        return hayErrores ? 'PROCESAMIENTO CON ERRORES' : 'PROCESAMIENTO COMPLETADO';
    }
  };

  // Icono SVG del encabezado
  const iconoPorTipo: Record<string, string> = {
    api_key:           'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    cuota_excedida:    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    rate_limit:        'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    conexion:          'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414',
    servidor:          'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    imagen_grande:     'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    pdf_corrupto:      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    pdf_no_encontrado: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    respuesta_ia:      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    warning:           'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    success:           'M5 13l4 4L19 7',
  };

  const iconoPath = tipoError && iconoPorTipo[tipoError]
    ? iconoPorTipo[tipoError]
    : (hayErrores || esErrorPrevio) ? iconoPorTipo.warning : iconoPorTipo.success;
  const iconoColor = hayErrores || esErrorCritico || esErrorPrevio ? 'text-[#ff5a5a]' : 'text-[#11d0d0]';

  // Mensaje único y claro para el usuario según el tipo de error
  const getMensajeError = () => {
    switch (tipoError) {
      case 'api_key':           return 'La API Key es incorrecta. Ve a Identificación y pégala nuevamente.';
      case 'cuota_excedida':    return 'La API Key no tiene créditos. Recarga en la plataforma del proveedor o usa otra API Key.';
      case 'rate_limit':        return 'Demasiadas solicitudes. Espera 2-3 minutos y presiona Reintentar.';
      case 'conexion':          return 'No hay conexión a internet. Verifica tu red y reintenta.';
      case 'servidor':          return 'El servidor de IA no está disponible. Espera unos minutos y reintenta.';
      case 'imagen_grande':     return 'El PDF es demasiado grande. Intenta con un archivo de menor resolución.';
      case 'pdf_corrupto':      return 'El PDF está dañado. Descárgalo nuevamente desde la Registraduría.';
      case 'pdf_no_encontrado': return 'El archivo fue movido o eliminado. Vuelve a seleccionar la carpeta.';
      case 'respuesta_ia':      return 'La IA no pudo leer el PDF. Reintenta o revísalo manualmente.';
      default:                  return errorDetectado?.mensaje || 'Algunos archivos no pudieron procesarse.';
    }
  };

  // Texto del botón principal según contexto
  const getBotonPrincipal = () => {
    if (tipoError === 'api_key')        return { texto: 'CORREGIR API KEY', accion: onCerrar, color: 'bg-[#ff5a5a] hover:bg-[#e54a4a]' };
    if (tipoError === 'cuota_excedida') return { texto: 'CAMBIAR API KEY', accion: onCerrar, color: 'bg-[#ff5a5a] hover:bg-[#e54a4a]' };
    if (esReintentable)                 return { texto: 'REINTENTAR', accion: onReintentar, color: 'bg-[#11d0d0] hover:bg-[#0fb8b8]' };
    if (esErrorPrevio)                  return { texto: 'CERRAR', accion: onCerrar, color: 'bg-[#ff5a5a] hover:bg-[#e54a4a]' };
    if (hayErrores)                     return { texto: `REINTENTAR (${fallidos.length})`, accion: onReintentar, color: 'bg-[#11d0d0] hover:bg-[#0fb8b8]' };
    return                                     { texto: 'VER UBICACIÓN', accion: onVerUbicacion, color: 'bg-[#11d0d0] hover:bg-[#0fb8b8]' };
  };

  const botonPrincipal = getBotonPrincipal();
  const esError = hayErrores || esErrorCritico || esErrorPrevio;
  const colorBorde = esError ? 'border-[#ff5a5a]' : 'border-[#11d0d0]';
  const colorFondo = esError ? 'bg-[#ff5a5a]/10' : 'bg-[#11d0d0]/10';
  const colorTexto = esError ? 'text-[#ff5a5a]' : 'text-[#11d0d0]';
  const colorSep = esError ? 'bg-[#ff5a5a]/30' : 'bg-[#11d0d0]/30';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#40376d]/80 backdrop-blur-sm" />

      <div className={`relative bg-white rounded-[17px] p-8 max-w-[500px] w-full mx-4 shadow-2xl border-[3px] ${colorBorde}`}>
        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${colorFondo}`}>
            <svg className={`w-8 h-8 ${iconoColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconoPath} />
            </svg>
          </div>
          <h2 className={`font-['Poppins',sans-serif] font-bold text-xl ${colorTexto}`}>
            {getTituloError()}
          </h2>
        </div>

        <div className={`h-[2px] ${colorSep} mb-6`} />

        {/* Mensaje de error */}
        {tipoError && (
          <div className="bg-[#fff5f5] border-2 border-[#ff5a5a] rounded-[8px] p-4 mb-6">
            <p className="font-['Poppins',sans-serif] text-[#ff5a5a] text-base font-medium text-center">
              {getMensajeError()}
            </p>
          </div>
        )}

        {/* Estadísticas (ocultar si es error previo al procesamiento) */}
        {!esErrorPrevio && <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <p className="font-['Poppins',sans-serif] font-bold text-3xl text-[#11d0d0]">{exitosos.length}</p>
            <p className="font-['Poppins',sans-serif] text-sm text-[#40376d]">Exitosos</p>
          </div>
          <div className="text-center">
            <p className="font-['Poppins',sans-serif] font-bold text-3xl text-[#ff5a5a]">{fallidos.length}</p>
            <p className="font-['Poppins',sans-serif] text-sm text-[#40376d]">Fallidos</p>
          </div>
          <div className="text-center">
            <p className="font-['Poppins',sans-serif] font-bold text-3xl text-[#40376d]">{total}</p>
            <p className="font-['Poppins',sans-serif] text-sm text-[#40376d]">Total</p>
          </div>
        </div>}

        {/* Lista de archivos con error (solo si no es error crítico global) */}
        {hayErrores && !esErrorCritico && (
          <div className="bg-[#fff5f5] rounded-[8px] p-4 mb-6 max-h-[150px] overflow-y-auto">
            <p className="font-['Poppins',sans-serif] font-semibold text-sm text-[#40376d] mb-3">
              Archivos con error ({fallidos.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {fallidos.map((archivo, idx) => (
                <span key={idx} className="bg-white px-3 py-1 rounded-full border border-[#ff5a5a]/30 text-sm text-[#40376d]">
                  {archivo.archivo}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex gap-3">
          <button
            onClick={botonPrincipal.accion}
            className={`flex-1 h-[48px] rounded-[8px] transition-colors ${botonPrincipal.color}`}
          >
            <span className="font-['Poppins',sans-serif] font-semibold text-white">
              {botonPrincipal.texto}
            </span>
          </button>
          {hayErrores && !esErrorCritico && !esReintentable && (
            <button
              onClick={onIgnorar}
              className="flex-1 h-[48px] rounded-[8px] bg-[#d9d9d9] hover:bg-[#c9c9c9] transition-colors"
            >
              <span className="font-['Poppins',sans-serif] font-semibold text-[#40376d]">
                IGNORAR Y CONTINUAR
              </span>
            </button>
          )}
        </div>

        {/* Botón ver ubicación (solo errores individuales, no críticos) */}
        {hayErrores && !esErrorCritico && (
          <button
            onClick={onVerUbicacion}
            className="w-full h-[40px] mt-3 border-2 border-[#40376d] rounded-[8px] hover:bg-gray-50 transition-colors"
          >
            <span className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-sm">
              VER UBICACIÓN DE ARCHIVOS
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function App() {
  // Security state
  const [securityStatus, setSecurityStatus] = useState<string>('pending');
  const [securityMessage, setSecurityMessage] = useState<string>('');
  const [securityTier, setSecurityTier] = useState<string>('full');

  // Auto-update state
  const [updateAvailable, setUpdateAvailable] = useState<string | null>(null);
  const [updateProgress, setUpdateProgress] = useState<number | null>(null);
  const [updateReady, setUpdateReady] = useState(false);

  const [seccionActiva, setSeccionActiva] = useState<Seccion>('informacion');

  // Estado de identificación
  const [tipoEleccion, setTipoEleccion] = useState('');
  const [circunscripcion, setCircunscripcion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [zona, setZona] = useState('');
  const [keyAsignada, setKeyAsignada] = useState('');

  // Estado de preparación
  const [archivosPDF, setArchivosPDF] = useState<string[]>([]);
  const [carpetaPDFs, setCarpetaPDFs] = useState<string>('');
  const [conversionEnProgreso, setConversionEnProgreso] = useState(false);
  const [conversionCompleta, setConversionCompleta] = useState(false);

  // NUEVO: Estado detallado de archivos
  const [archivosExitosos, setArchivosExitosos] = useState<ArchivoExitoso[]>([]);
  const [archivosFallidos, setArchivosFallidos] = useState<ArchivoFallido[]>([]);
  const [archivoActual, setArchivoActual] = useState<string>('');
  const [progresoActual, setProgresoActual] = useState<{ actual: number; total: number }>({ actual: 0, total: 0 });
  const [loteInfo, setLoteInfo] = useState<{ actual: number; total: number }>({ actual: 0, total: 0 });
  const [csvsGenerados, setCsvsGenerados] = useState<string[]>([]);
  const [mensajeEstado, setMensajeEstado] = useState<string>('');

  // NUEVO: Modal de errores
  const [mostrarModal, setMostrarModal] = useState(false);

  // NUEVO: Tipo de error detectado (api_key, cuota_excedida, conexion, pdf_corrupto, otro)
  const [errorDetectado, setErrorDetectado] = useState<{ tipo: TipoError; mensaje: string } | null>(null);
  const canceladoRef = useRef(false);

  // Modal de confirmación de identificación
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);

  // Estado de la pestaña Información
  const [paso0Abierto, setPaso0Abierto] = useState(false);
  const [mostrarEjemploFormatos, setMostrarEjemploFormatos] = useState(false);
  const [mostrarGuiaDrive, setMostrarGuiaDrive] = useState(false);
  const [checkZonas, setCheckZonas] = useState(false);
  const [checkKey, setCheckKey] = useState(false);
  const [checkE14, setCheckE14] = useState(false);
  const checklistCompleto = checkZonas && checkKey && checkE14;

  // Checklist de Extracción
  const [checkCsvSubidos, setCheckCsvSubidos] = useState(false);
  const [checkTotales, setCheckTotales] = useState(false);
  const [checkMmv, setCheckMmv] = useState(false);
  const checklistExtraccionCompleto = checkCsvSubidos && checkTotales && checkMmv;

  // Checklist de Comparación Automática
  const [checkMigaPan, setCheckMigaPan] = useState(false);

  // Estado de comparación de archivos
  const [archivoCSV, setArchivoCSV] = useState<string | null>(null);
  const [carpetaMMV, setCarpetaMMV] = useState<string | null>(null);
  const [progresoComparacion, setProgresoComparacion] = useState(0);
  const [comparacionCompleta, setComparacionCompleta] = useState(false);
  const [comparacionEnProgreso, setComparacionEnProgreso] = useState(false);
  const [resultadoComparacion, setResultadoComparacion] = useState<{
    total_registros: number;
    total_coinciden: number;
    total_discrepancias: number;
    porcentaje_coinciden: number;
    casos_registraduria_mas: number;
    votos_registraduria_mas: number;
    casos_registraduria_menos: number;
    votos_registraduria_menos: number;
  } | null>(null);
  const [errorComparacion, setErrorComparacion] = useState<string | null>(null);
  const [discrepanciasDetalle, setDiscrepanciasDetalle] = useState<DiscrepanciaFila[]>([]);

  // Carpeta de trabajo
  const [carpetaTrabajo, setCarpetaTrabajo] = useState<string>('');

  // Datos dinámicos del DIVIPOLE
  const tiposEleccion = ['Senado', 'Cámara', 'Consulta', 'CITREP'];
  const esCITREP = tipoEleccion === 'CITREP';

  // Selectores en cascada según tipo de elección
  // Normal: Departamento → Municipio → Zona
  // CITREP: Circunscripción → Departamento → Municipio → Zona
  const circunscripcionesCITREP = esCITREP ? getCircunscripcionesCITREP() : [];
  const departamentosFiltrados = esCITREP
    ? (circunscripcion ? getDepartamentosByCITREP(circunscripcion) : [])
    : getDepartamentos();
  const municipiosFiltrados = departamento
    ? (esCITREP ? getMunicipiosByCITREP(circunscripcion, departamento) : getMunicipiosByDepartamento(departamento))
    : [];
  const zonasFiltradas: Zona[] = (departamento && municipio)
    ? (esCITREP ? getZonasCITREP(circunscripcion, departamento, municipio) : getZonasByMunicipio(departamento, municipio))
    : [];

  const URL_REGISTRADURIA = 'https://danielm0101.github.io/redirect-registraduria/';

  // Security: listen for USB validation status from main process
  useEffect(() => {
    if (!window.electronAPI?.obtenerSecurityStatus) return;

    // Poll on mount
    window.electronAPI.obtenerSecurityStatus().then((data) => {
      setSecurityStatus(data.status);
      if (data.message) setSecurityMessage(data.message);
      if (data.tier) setSecurityTier(data.tier);
    });

    // Listen for push events
    window.electronAPI.onSecurityStatus((data) => {
      setSecurityStatus(data.status);
      if (data.message) setSecurityMessage(data.message);
      if (data.tier) setSecurityTier(data.tier);
    });

    return () => {
      window.electronAPI?.removeSecurityStatus();
    };
  }, []);

  // Auto-update listeners
  useEffect(() => {
    if (!window.electronAPI?.onUpdateAvailable) return;

    window.electronAPI.onUpdateAvailable((data) => {
      setUpdateAvailable(data.version);
    });
    window.electronAPI.onUpdateProgress((data) => {
      setUpdateProgress(data.percent);
    });
    window.electronAPI.onUpdateDownloaded(() => {
      setUpdateReady(true);
      setUpdateProgress(null);
    });

    return () => {
      window.electronAPI?.removeUpdateListeners();
    };
  }, []);

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.obtenerCarpetaTrabajo().then(setCarpetaTrabajo);
      window.electronAPI.cargarConfiguracion().then((config: any) => {
        if (config) {
          if (config.tipoEleccion) setTipoEleccion(config.tipoEleccion);
          if (config.circunscripcion) setCircunscripcion(config.circunscripcion);
          if (config.departamento) setDepartamento(config.departamento);
          if (config.municipio) setMunicipio(config.municipio);
          if (config.zona) setZona(config.zona);
          if (config.keyAsignada) setKeyAsignada(config.keyAsignada);
        }
      });
    }
  }, []);

  // Efectos para selectores en cascada
  useEffect(() => {
    setCircunscripcion('');
    setDepartamento('');
    setMunicipio('');
    setZona('');
  }, [tipoEleccion]);

  useEffect(() => {
    setDepartamento('');
    setMunicipio('');
    setZona('');
  }, [circunscripcion]);

  useEffect(() => {
    setMunicipio('');
    setZona('');
  }, [departamento]);

  useEffect(() => {
    setZona('');
  }, [municipio]);

  const getBorderColor = () => {
    switch (seccionActiva) {
      case 'informacion': return '#a855f7';
      case 'identificacion': return '#ffb700';
      case 'extraccion': return '#11d0d0';
      case 'comparacion_automatica': return '#ff5a5a';
      case 'comparacion_archivos': return '#ff8c42';
      case 'comparacion_manual': return '#d3c4d1';
      default: return '#a855f7';
    }
  };

  const getActiveTabBg = (seccion: Seccion) => {
    const colors = {
      informacion: 'bg-[#a855f7]',
      identificacion: 'bg-[#ffb700]',
      extraccion: 'bg-[#11d0d0]',
      comparacion_automatica: 'bg-[#ff5a5a]',
      comparacion_archivos: 'bg-[#ff8c42]',
      comparacion_manual: 'bg-[#d3c4d1]'
    };
    return seccionActiva === seccion ? colors[seccion] : 'bg-white hover:bg-gray-100';
  };

  const handleContinuar = async () => {
    if (seccionActiva === 'informacion') {
      setSeccionActiva('identificacion');
    } else if (seccionActiva === 'identificacion') {
      const camposCompletos = esCITREP
        ? (tipoEleccion && circunscripcion && departamento && municipio && zona && keyAsignada)
        : (tipoEleccion && departamento && municipio && zona && keyAsignada);
      if (camposCompletos) {
        // Mostrar modal de confirmación
        setMostrarModalConfirmacion(true);
      } else {
        alert('Por favor completa todos los campos antes de continuar');
      }
    } else if (seccionActiva === 'extraccion') {
      setSeccionActiva('comparacion_automatica');
    } else if (seccionActiva === 'comparacion_automatica') {
      setSeccionActiva('comparacion_archivos');
    } else if (seccionActiva === 'comparacion_archivos') {
      setSeccionActiva('comparacion_manual');
    }
  };

  const handleConfirmarIdentificacion = async () => {
    if (window.electronAPI) {
      await window.electronAPI.guardarConfiguracion({
        tipoEleccion, circunscripcion, departamento, municipio, zona, keyAsignada
      });
    }
    setMostrarModalConfirmacion(false);
    setSeccionActiva('extraccion');
  };

  // Funciones de preparación
  const handleSeleccionarPDFs = async () => {
    if (window.electronAPI) {
      const resultado = await window.electronAPI.seleccionarPDFs();
      if (resultado.archivos.length > 0) {
        setCarpetaPDFs(resultado.carpeta);
        setArchivosPDF(resultado.archivos);
        // Resetear estados
        setConversionCompleta(false);
        setArchivosExitosos([]);
        setArchivosFallidos([]);
        setCsvsGenerados([]);
        setMensajeEstado('');
        setProgresoActual({ actual: 0, total: 0 });
        setLoteInfo({ actual: 0, total: 0 });
      }
    } else {
      alert('Función disponible solo en la aplicación de escritorio');
    }
  };

  const handleConvertirCSV = async (archivosAProcesar?: string[]) => {
    const archivos = archivosAProcesar || archivosPDF;
    const esReintento = !!archivosAProcesar;

    if (archivos.length === 0) {
      alert('No hay archivos para procesar');
      return;
    }

    if (!keyAsignada) {
      alert('Por favor ingresa una API Key en la sección de Identificación');
      return;
    }

    // Verificar R
    if (window.electronAPI) {
      const rStatus = await window.electronAPI.verificarR();
      if (!rStatus.disponible) {
        alert('R Portable no está disponible. Verifica la instalación.');
        return;
      }

      // Inicializar estados
      setConversionEnProgreso(true);
      setConversionCompleta(false);
      setMostrarModal(false);
      setErrorDetectado(null);
      canceladoRef.current = false;

      if (!esReintento) {
        setArchivosExitosos([]);
        setArchivosFallidos([]);
        setCsvsGenerados([]);
      }

      setArchivoActual('');
      setProgresoActual({ actual: 0, total: archivos.length });
      setMensajeEstado(esReintento ? 'Reintentando archivos fallidos...' : 'Iniciando procesamiento...');

      // Escuchar eventos de R
      window.electronAPI.onEventoR((evento: EventoR) => {
        switch (evento.tipo) {
          case 'inicio':
            setProgresoActual({ actual: 0, total: evento.total || 0 });
            setMensajeEstado(`Procesando ${evento.total} archivos...`);
            break;

          case 'lote_inicio':
            setLoteInfo({ actual: evento.lote || 0, total: evento.total_lotes || 0 });
            setMensajeEstado(`Procesando lote ${evento.lote} de ${evento.total_lotes}...`);
            break;

          case 'exito':
            setArchivoActual(evento.archivo || '');
            setProgresoActual(prev => ({ ...prev, actual: evento.indice || prev.actual + 1 }));
            setArchivosExitosos(prev => [...prev, {
              archivo: evento.archivo || '',
              filas: evento.filas || 0,
              validacion: evento.validacion || 'OK'
            }]);
            break;

          case 'error_archivo':
            setArchivoActual(evento.archivo || '');
            setProgresoActual(prev => ({ ...prev, actual: evento.indice || prev.actual + 1 }));

            // Clasificar el tipo de error
            const errorMsg = evento.error || 'Error desconocido';
            const errorClasificado = clasificarError(errorMsg);

            // Prioridad de errores: api_key > cuota_excedida > conexion > pdf_corrupto > otro
            const prioridadError: Record<TipoError, number> = {
              api_key: 10, cuota_excedida: 9, rate_limit: 8, conexion: 7,
              servidor: 6, imagen_grande: 5, pdf_corrupto: 4, pdf_no_encontrado: 3,
              respuesta_ia: 2, otro: 1
            };

            // Usar updater funcional para acceder al estado actual (evita closure stale)
            setErrorDetectado(prev => {
              const prioridadNuevo = prioridadError[errorClasificado.tipo];
              const prioridadActual = prev ? prioridadError[prev.tipo] : 0;
              return prioridadNuevo >= prioridadActual ? errorClasificado : prev;
            });

            // Errores que no tiene sentido seguir reintentando → cancelar proceso R
            const erroresCancelables: TipoError[] = ['api_key', 'cuota_excedida', 'conexion'];
            if (erroresCancelables.includes(errorClasificado.tipo)) {
              setMensajeEstado(`${errorClasificado.mensaje.split('.')[0]} - cancelando...`);
              window.electronAPI?.cancelarProcesoR();
            } else {
              // Errores individuales por archivo, mostrar resumen
              setMensajeEstado(errorClasificado.mensaje.split('.')[0]);
            }

            setArchivosFallidos(prev => [...prev, {
              archivo: evento.archivo || '',
              ruta: evento.ruta || '',
              error: errorClasificado.mensaje
            }]);
            break;

          case 'lote_guardado':
            setCsvsGenerados(prev => [...prev, evento.nombre || '']);
            setMensajeEstado(`CSV guardado: ${evento.nombre}`);
            break;

          case 'fin':
            setMensajeEstado(`Completado: ${evento.exitosos} exitosos, ${evento.fallidos} fallidos`);
            break;
        }
      });

      // Ejecutar conversión con cleanup garantizado (Fix 3)
      let resultado: Awaited<ReturnType<NonNullable<typeof window.electronAPI>['convertirPDFaCSVv2']>> | null = null;
      const params = {
          archivos,
          apiKey: keyAsignada,
          modo: esReintento ? 'reintento' : 'normal',
          tipoEleccion: tipoEleccion,
          codigoDepartamento: getCodigoDepartamento(departamento),
          circunscripcion: circunscripcion
      };
      console.log('[DEBUG] convertirPDFaCSVv2 params:', JSON.stringify({ ...params, apiKey: '***' }));
      try {
        resultado = await window.electronAPI.convertirPDFaCSVv2(params);
        console.log('[DEBUG] convertirPDFaCSVv2 result:', JSON.stringify(resultado));
      } catch (err) {
        console.error('Error en convertirPDFaCSVv2:', err);
      } finally {
        // Siempre limpiar listener, incluso si hay excepción
        window.electronAPI.removeEventoR();
        setConversionEnProgreso(false);
      }

      setConversionCompleta(true);

      if (resultado) {
        // Si el handler retornó error antes de lanzar R (ej: CSV coordenadas no existe)
        if (!resultado.success && resultado.error) {
          setErrorDetectado({ tipo: 'otro', mensaje: resultado.error });
          setMostrarModal(true);
          return;
        }

        // Fix 5: Solo actualizar desde procesoLog si existe (R pudo crashear sin escribirlo)
        if (resultado.procesoLog) {
          if (!esReintento) {
            setArchivosExitosos(resultado.procesoLog.exitosos || []);
            setArchivosFallidos(resultado.procesoLog.fallidos || []);
          } else {
            // Fix 8: En reintento, merge inteligente de exitosos y fallidos
            setArchivosExitosos(prev => {
              const nombresReintentados = new Set(archivos.map(a => a.split(/[/\\]/).pop()));
              const prevFiltrados = prev.filter(e => !nombresReintentados.has(e.archivo));
              return [...prevFiltrados, ...(resultado!.procesoLog?.exitosos || [])];
            });
            setArchivosFallidos(prev => {
              const nombresReintentados = new Set(archivos.map(a => a.split(/[/\\]/).pop()));
              const prevFiltrados = prev.filter(f => !nombresReintentados.has(f.archivo));
              return [...prevFiltrados, ...(resultado!.procesoLog?.fallidos || [])];
            });
          }
        }
        // Fix 5: Si procesoLog es null (crash), mantener datos del tiempo real (ya están en el state)

        // Fix 7: Fusionar CSVs si R terminó exitosamente (aunque haya algunos fallidos)
        if (resultado.success) {
          await window.electronAPI.fusionarCSVs();
        }

        // Nota: errores pre-vuelo (CSV coordenadas faltante, tipo inválido) se manejan
        // en el bloque anterior (línea ~874) que muestra el ModalErrores con el mensaje real.
      }

      // Si fue cancelado por el usuario, no mostrar modal de error
      if (canceladoRef.current) {
        canceladoRef.current = false;
        setMensajeEstado('Proceso cancelado por el usuario');
        return;
      }

      // Mostrar modal solo si no fue cancelado por el usuario
      if (!canceladoRef.current) {
        setMostrarModal(true);
      } else {
        setMensajeEstado('Proceso cancelado por el usuario');
      }
    }
  };

  const handleReintentar = async () => {
    setMostrarModal(false);

    // Obtener rutas de los archivos fallidos
    const rutasFallidos = archivosFallidos.map(f => f.ruta).filter(r => r);

    if (rutasFallidos.length > 0) {
      await handleConvertirCSV(rutasFallidos);
    } else {
      // Si no tenemos rutas, intentar obtenerlas del log
      if (window.electronAPI) {
        const fallidos = await window.electronAPI.obtenerFallidos();
        const rutas = fallidos.map(f => f.ruta).filter(r => r);
        if (rutas.length > 0) {
          await handleConvertirCSV(rutas);
        }
      }
    }
  };

  const handleIgnorarYContinuar = async () => {
    setMostrarModal(false);

    // Fusionar CSVs existentes (sin los fallidos)
    if (window.electronAPI) {
      await window.electronAPI.fusionarCSVs();
    }
  };

  const handleCancelarProceso = async () => {
    if (window.electronAPI) {
      canceladoRef.current = true;
      setMensajeEstado('Cancelando proceso...');
      await window.electronAPI.cancelarProcesoR();
    }
  };

  const handleVerUbicacion = async () => {
    setMostrarModal(false);
    if (window.electronAPI) {
      const resultado = await window.electronAPI.abrirResultados();
      if (resultado && !resultado.success) {
        alert('No se pudo abrir la carpeta: ' + (resultado.error || 'Error desconocido'));
      }
    }
  };

  const handleAbrirRegistraduria = async () => {
    if (window.electronAPI) {
      await window.electronAPI.abrirURL(URL_REGISTRADURIA);
    } else {
      window.open(URL_REGISTRADURIA, '_blank');
    }
  };

  // Funciones de comparación de archivos
  const handleSeleccionarCSV = async () => {
    if (window.electronAPI) {
      const archivo = await window.electronAPI.seleccionarCSV();
      if (archivo) {
        setArchivoCSV(archivo);
      }
    } else {
      alert('Función disponible solo en la aplicación de escritorio');
    }
  };

  const handleSeleccionarMMV = async () => {
    if (window.electronAPI) {
      const carpeta = await window.electronAPI.seleccionarCarpetaMMV();
      if (carpeta) {
        setCarpetaMMV(carpeta);
      }
    } else {
      alert('Función disponible solo en la aplicación de escritorio');
    }
  };

  const handleGenerarComparacion = async () => {
    if (!archivoCSV || !carpetaMMV) {
      alert('Selecciona el archivo CSV extraido y el archivo MMV oficial primero');
      return;
    }

    if (!window.electronAPI) {
      alert('Funcion disponible solo en la aplicacion de escritorio');
      return;
    }

    // Reset estados
    setComparacionEnProgreso(true);
    setComparacionCompleta(false);
    setResultadoComparacion(null);
    setErrorComparacion(null);
    setDiscrepanciasDetalle([]);
    setProgresoComparacion(10);
    canceladoRef.current = false;

    // Escuchar eventos de progreso
    window.electronAPI.onEventoR((evento: EventoR) => {
      if (evento.tipo === 'progreso') {
        setProgresoComparacion(prev => Math.min(prev + 20, 90));
      } else if (evento.tipo === 'error') {
        setErrorComparacion(evento.mensaje || 'Error desconocido');
      } else if (evento.tipo === 'fin') {
        setProgresoComparacion(100);
        setResultadoComparacion({
          total_registros: evento.total_registros || 0,
          total_coinciden: evento.total_coinciden || 0,
          total_discrepancias: evento.total_discrepancias || 0,
          porcentaje_coinciden: evento.porcentaje_coinciden || 0,
          casos_registraduria_mas: evento.casos_registraduria_mas || 0,
          votos_registraduria_mas: evento.votos_registraduria_mas || 0,
          casos_registraduria_menos: evento.casos_registraduria_menos || 0,
          votos_registraduria_menos: evento.votos_registraduria_menos || 0,
        });
        if (evento.detalle && Array.isArray(evento.detalle)) {
          setDiscrepanciasDetalle(evento.detalle);
        }
      }
    });

    try {
      const resultado = await window.electronAPI.compararE14E24(archivoCSV, carpetaMMV);

      if (!resultado.success && !canceladoRef.current) {
        setErrorComparacion(resultado.error || 'Error en la comparacion');
      }
    } catch (err) {
      console.error('Error en comparacion:', err);
      if (!canceladoRef.current) {
        setErrorComparacion('Error inesperado en la comparacion');
      }
    } finally {
      window.electronAPI.removeEventoR();
      setComparacionEnProgreso(false);
      if (canceladoRef.current) {
        setProgresoComparacion(0);
        canceladoRef.current = false;
      } else {
        setComparacionCompleta(true);
      }
    }
  };

  const handleDescargarResultados = async () => {
    if (window.electronAPI) {
      await window.electronAPI.abrirResultados();
    }
  };

  const handleAbrirEvidencias = async () => {
    if (window.electronAPI) {
      await window.electronAPI.abrirCarpeta('Evidencias');
    }
  };

  // Calcular porcentaje de progreso
  const porcentajeProgreso = progresoActual.total > 0
    ? Math.round((progresoActual.actual / progresoActual.total) * 100)
    : 0;

  return (
    <div className="bg-[#40376d] relative min-h-screen w-full overflow-auto">
      {/* Security overlay - shown when USB validation fails */}
      {securityStatus !== 'ok' && securityStatus !== 'pending' && (
        <div className="fixed inset-0 z-[100] bg-[#1a1333] flex items-center justify-center">
          <div className="text-center max-w-lg px-8">
            <div className="text-7xl mb-6">
              {securityStatus === 'no_usb' && '\u{1F512}'}
              {securityStatus === 'usb_expirada' && '\u{23F0}'}
              {securityStatus === 'sin_conexion' && '\u{1F310}'}
              {(securityStatus === 'usb_no_autorizada' || securityStatus === 'llave_invalida' || securityStatus === 'registro_corrupto') && '\u{1F6AB}'}
            </div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-[#ff5a5a] text-3xl mb-4">
              {securityStatus === 'no_usb' && 'INSERTE LA LLAVE USB'}
              {securityStatus === 'usb_no_autorizada' && 'USB NO AUTORIZADA'}
              {securityStatus === 'llave_invalida' && 'LLAVE INVALIDA'}
              {securityStatus === 'usb_expirada' && 'USB EXPIRADA'}
              {securityStatus === 'sin_conexion' && 'SIN CONEXION'}
              {securityStatus === 'registro_corrupto' && 'ERROR DE REGISTRO'}
            </h2>
            <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-lg mb-6">
              {securityStatus === 'no_usb' && 'Esta aplicacion requiere una llave USB autorizada para funcionar. Inserte la USB y reinicie la aplicacion.'}
              {securityStatus === 'usb_no_autorizada' && 'La USB insertada no esta registrada como llave autorizada. Contacte al administrador del sistema.'}
              {securityStatus === 'llave_invalida' && 'La llave de seguridad en la USB es invalida o los archivos estan corruptos. Contacte al administrador.'}
              {securityStatus === 'usb_expirada' && 'La autorizacion de esta USB ha expirado. Contacte al administrador para renovar su acceso.'}
              {securityStatus === 'sin_conexion' && 'Se requiere conexion a internet para verificar la llave USB. Conectese a internet y reinicie la aplicacion.'}
              {securityStatus === 'registro_corrupto' && 'El registro de USBs autorizadas tiene una firma invalida. Contacte al administrador del sistema.'}
            </p>
            {securityMessage && (
              <p className="font-['Poppins',sans-serif] text-[#999] text-sm mt-4">
                {securityMessage}
              </p>
            )}
            <div className="mt-8 py-3 px-6 bg-[#40376d] rounded-lg inline-block">
              <p className="font-['Poppins',sans-serif] text-[#ffb700] text-sm font-semibold">
                Cierre y vuelva a abrir la aplicacion despues de corregir el problema.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Update banner */}
      {updateAvailable && !updateReady && updateProgress === null && (
        <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ffb700] px-6 py-3 flex items-center justify-between">
          <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm">
            Nueva version disponible: <span className="font-bold text-[#ffb700]">v{updateAvailable}</span>
          </p>
          <button
            onClick={() => window.electronAPI?.descargarActualizacion()}
            className="bg-[#ffb700] text-[#1a1333] font-['Poppins',sans-serif] font-semibold text-sm px-4 py-1.5 rounded hover:bg-[#e6a600] transition-colors"
          >
            Descargar
          </button>
        </div>
      )}
      {updateProgress !== null && (
        <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ffb700] px-6 py-3">
          <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm mb-1">
            Descargando actualizacion... {updateProgress}%
          </p>
          <div className="w-full bg-[#40376d] rounded-full h-2">
            <div className="bg-[#ffb700] h-2 rounded-full transition-all duration-300" style={{ width: `${updateProgress}%` }}></div>
          </div>
        </div>
      )}
      {updateReady && (
        <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#00c853] px-6 py-3 flex items-center justify-between">
          <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm">
            Actualizacion lista. Reinicie para aplicar.
          </p>
          <button
            onClick={() => window.electronAPI?.instalarActualizacion()}
            className="bg-[#00c853] text-white font-['Poppins',sans-serif] font-semibold text-sm px-4 py-1.5 rounded hover:bg-[#00b248] transition-colors"
          >
            Reiniciar ahora
          </button>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto relative min-h-[1024px] p-8">

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h1 className="font-['Poppins',sans-serif] font-bold text-[#ffb700] text-[52px] tracking-[2.6px]">
              VERIFICACIÓN  ELECTORAL
            </h1>
            <div className="h-[2px] bg-[#ffb700] w-full max-w-[832px] mt-2"></div>
            <p className="font-['Poppins',sans-serif] font-semibold text-[#f3f3f3] text-[22px] mt-4 max-w-[832px]">
              Sigue este paso a paso para obtener el archivo con el que podrás realizar la verificación electoral.
            </p>
          </div>
          <img src={logoCNE} alt="Logo CNE" className="w-[550px] h-[309px] object-contain -mt-16" />
        </div>

        {/* Pestañas de navegación */}
        <div className="flex gap-4 mt-2 flex-wrap relative z-10 justify-end">
          {(['informacion', 'identificacion', 'extraccion', 'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'] as Seccion[]).filter(seccion => {
            // Filter tabs by tier
            const extractorTabs: Seccion[] = ['informacion', 'identificacion', 'extraccion'];
            const comparadorTabs: Seccion[] = ['informacion', 'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'];
            if (securityTier === 'extractor') return extractorTabs.includes(seccion);
            if (securityTier === 'comparador') return comparadorTabs.includes(seccion);
            return true; // 'full' and 'admin' see all tabs
          }).map((seccion, index) => {
            const labels: Record<Seccion, string> = {
              informacion: 'INFORMACIÓN',
              identificacion: 'IDENTIFICACIÓN',
              extraccion: 'EXTRACCIÓN',
              comparacion_automatica: 'COMP. AUTOMÁTICA',
              comparacion_archivos: 'COMP. ARCHIVOS',
              comparacion_manual: 'COMP. MANUAL'
            };
            const visibleSecciones = (['informacion', 'identificacion', 'extraccion', 'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'] as Seccion[]).filter(s => {
              const extractorTabs: Seccion[] = ['informacion', 'identificacion', 'extraccion'];
              const comparadorTabs: Seccion[] = ['informacion', 'comparacion_automatica', 'comparacion_archivos', 'comparacion_manual'];
              if (securityTier === 'extractor') return extractorTabs.includes(s);
              if (securityTier === 'comparador') return comparadorTabs.includes(s);
              return true;
            });
            const indiceActual = visibleSecciones.indexOf(seccionActiva);
            // Solo permitir ir a secciones anteriores o la actual
            const permitido = index <= indiceActual;

            return (
              <button
                key={seccion}
                onClick={() => permitido && setSeccionActiva(seccion)}
                disabled={!permitido}
                className={`h-[70px] w-[190px] rounded-[5px] transition-all duration-200 ${getActiveTabBg(seccion)} ${
                  permitido ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
              >
                <p className={`font-['Poppins',sans-serif] font-semibold text-[15px] tracking-[0.8px] ${
                  seccionActiva === seccion ? 'text-white' : 'text-[#40376d]'
                }`}>
                  {labels[seccion]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Contenedor principal */}
        <div
          className="bg-white rounded-[17px] -mt-[22px] pt-[55px] px-8 pb-8 min-h-[550px] border-[3px] transition-colors animate-fadeIn relative"
          style={{ borderColor: getBorderColor() }}
        >

          {/* SECCIÓN INFORMACIÓN */}
          {seccionActiva === 'informacion' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1250px] mx-auto">

                {/* COLUMNA 1: Contexto */}
                <div>
                  <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed mb-4">
                    La verificación electoral consiste en comparar los formatos e-14 con los formatos e-24 para comprobar si existe algún tipo de inconsistencia.
                  </p>

                  <button
                    onClick={() => setMostrarEjemploFormatos(true)}
                    className="font-['Poppins',sans-serif] text-[#11d0d0] text-base font-semibold hover:underline transition-colors cursor-pointer mb-6 block"
                  >
                    Ver ejemplo de formatos
                  </button>

                  <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mb-3">
                    Este proceso esta dividido en dos fases:
                  </p>

                  <p className="font-['Poppins',sans-serif] font-bold text-[#ffb700] text-lg mb-2">
                    FASE 1
                  </p>

                  <p className="font-['Poppins',sans-serif] font-bold text-[#40376d] text-base mb-1">
                    Comparación automática:
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed mb-4">
                    un software lee la información de cada uno de los formatos, unifica la información en un archivo, compara y muestra si hay alguna diferencia de votos. Para que esto suceda, debes entregarle los dos tipos de formato al software, de una forma ordenada.
                  </p>

                  <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mb-3">
                    Para esto:
                  </p>

                  <p className="font-['Poppins',sans-serif] font-semibold text-[#11d0d0] text-base mb-2">
                    Solicita al líder que te indique:
                  </p>
                  <ul className="font-['Poppins',sans-serif] text-[#40376d] text-base space-y-1 list-disc list-inside ml-1">
                    <li>Cuales zonas te corresponden verificar</li>
                    <li>Cuál Key te asignaron</li>
                  </ul>
                </div>

                {/* COLUMNA 2: Preparar archivos */}
                <div>
                  <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-4">
                    Prepara los archivos:
                  </p>

                  {/* Alerta informativa */}
                  <div className="flex items-start gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#11d0d0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">!</span>
                    </div>
                    <p className="font-['Poppins',sans-serif] text-[#40376d] text-base italic leading-relaxed">
                      Inicia con el paso 0, solamente si el líder lo indica, de lo contrario continua con el paso 1.
                    </p>
                  </div>

                  {/* Paso 0 - Desplegable */}
                  <div className="border border-[#ffb700] rounded-[8px] overflow-hidden mb-5">
                    <button
                      onClick={() => setPaso0Abierto(!paso0Abierto)}
                      className="w-full flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#fffdf5] transition-colors"
                    >
                      <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base">
                        Paso 0
                      </p>
                      <svg
                        className={`w-5 h-5 text-[#ffb700] transition-transform duration-200 ${paso0Abierto ? '' : 'rotate-180'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {paso0Abierto && (
                      <div className="px-4 pb-4 border-t border-[#ffb700]/30">
                        <ul className="font-['Poppins',sans-serif] text-[#40376d] text-base space-y-3 mt-3">
                          <li>· Descarga la carpeta del Drive con el nombre de las zonas que te fueron asignadas. Guárdala de manera que la puedas encontrar fácilmente.</li>
                          <li>· Ingresa a la página de la registraduría ... (Ubicación) y descarga todas las E-14 de las zonas que te corresponden. Guardarlas en la carpeta que descargaste anteriormente.</li>
                          <li>· Sube la carpeta al drive con E-14 que guardaste.</li>
                          <li>· Ten en cuenta que estas son las carpetas que vas a utilizar en los siguientes pasos.</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Paso 1 */}
                  <div>
                    <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-2">
                      Paso 1
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed">
                      Descarga las carpetas E-14 de las zonas que te fueron asignadas por el líder. Estas carpetas se encuentran en (DRIVE)
                    </p>
                  </div>
                </div>

                {/* COLUMNA 3: Checklist */}
                <div>
                  <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-6 leading-relaxed">
                    SI YA CUENTAS CON LA SIGUIENTE INFORMACIÓN, PUEDES CONTINUAR CON LA IDENTIFICACIÓN:
                  </p>

                  <div className="space-y-5">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkZonas}
                        onChange={(e) => setCheckZonas(e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                      />
                      <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                        Zonas asignadas
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkKey}
                        onChange={(e) => setCheckKey(e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                      />
                      <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                        Key Asignada
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkE14}
                        onChange={(e) => setCheckE14(e.target.checked)}
                        className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                      />
                      <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                        Formatos E-14 descargados en el computador y divididos en carpetas por zona.
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Botón Continuar - Información */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={handleContinuar}
                  disabled={!checklistCompleto}
                  className={`h-[53px] w-[226px] rounded-[8px] transition-colors border-2 ${
                    checklistCompleto
                      ? 'bg-[#a855f7] border-[#a855f7] hover:bg-[#9333ea] cursor-pointer'
                      : 'bg-white border-[#40376d] cursor-not-allowed'
                  }`}
                >
                  <span className={`font-['Poppins',sans-serif] font-semibold text-2xl tracking-wider ${
                    checklistCompleto ? 'text-white' : 'text-[#40376d]'
                  }`}>
                    CONTINUAR
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* SECCIÓN IDENTIFICACIÓN */}
          {seccionActiva === 'identificacion' && (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 animate-fadeIn max-w-[1000px] mx-auto">
              {/* Columna 1: Formulario principal */}
              <div className="max-w-[380px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Escoge el tipo de elección que te fue asignado.
                  </p>
                </div>
                <p className="font-['Poppins',sans-serif] italic text-[#40376d] text-base mb-6 ml-14">
                  Guíate con el nombre de los archivos en la carpeta.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                      TIPO DE ELECCIÓN
                    </label>
                    <select
                      value={tipoEleccion}
                      onChange={(e) => setTipoEleccion(e.target.value)}
                      className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb700]"
                    >
                      <option value="">Seleccionar...</option>
                      {tiposEleccion.map((tipo) => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                      ))}
                    </select>
                  </div>

                  {/* Selector de Circunscripción (solo CITREP) */}
                  {esCITREP && (
                    <div>
                      <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                        CIRCUNSCRIPCIÓN
                      </label>
                      <select
                        value={circunscripcion}
                        onChange={(e) => setCircunscripcion(e.target.value)}
                        disabled={!tipoEleccion}
                        className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb700] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Seleccionar...</option>
                        {circunscripcionesCITREP.map((circ) => (
                          <option key={circ} value={circ}>{circ}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                      DEPARTAMENTO
                    </label>
                    <select
                      value={departamento}
                      onChange={(e) => setDepartamento(e.target.value)}
                      disabled={esCITREP ? !circunscripcion : !tipoEleccion}
                      className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb700] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Seleccionar...</option>
                      {departamentosFiltrados.map((dep) => (
                        <option key={dep} value={dep}>{dep}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                      MUNICIPIO
                    </label>
                    <select
                      value={municipio}
                      onChange={(e) => setMunicipio(e.target.value)}
                      disabled={!departamento}
                      className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb700] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Seleccionar...</option>
                      {municipiosFiltrados.map((mun) => (
                        <option key={mun} value={mun}>{mun}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                      ZONA
                    </label>
                    <select
                      value={zona}
                      onChange={(e) => setZona(e.target.value)}
                      disabled={!municipio}
                      className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffb700] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Seleccionar...</option>
                      {zonasFiltradas.map((z) => (
                        <option key={z.codigo} value={z.codigo}>{z.nombre}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Columna 2: Key asignada */}
              <div className="max-w-[380px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffb700] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Ingresa la API Key que te fue asignada.
                  </p>
                </div>

                <div className="mt-8">
                  <label className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-lg block mb-2">
                    API KEY
                  </label>
                  <input
                    type="password"
                    value={keyAsignada}
                    onChange={(e) => setKeyAsignada(e.target.value)}
                    placeholder="sk-ant-api03-..."
                    className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] px-3 text-[#40376d] font-['Poppins',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#ffb700] placeholder:text-[#888]"
                  />
                  <p className="font-['Poppins',sans-serif] text-xs text-[#888] mt-2">
                    API Key de Claude (Anthropic). Se guarda localmente.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón Continuar - Identificación */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleContinuar}
                className="h-[53px] w-[226px] bg-[#ffb700] rounded-[8px] hover:bg-[#e5a500] transition-colors cursor-pointer"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-white text-2xl tracking-wider">
                  CONTINUAR
                </span>
              </button>
            </div>
            </>
          )}

          {/* SECCIÓN EXTRACCIÓN */}
          {seccionActiva === 'extraccion' && (
            <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fadeIn max-w-[1250px] mx-auto">
              {/* Columna 1: Paso 3 - Subir PDFs + Progreso debajo */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#11d0d0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Selecciona la carpeta donde están los archivos PDF de las E-14 y conviértelos a CSV.
                  </p>
                </div>

                <button
                  onClick={handleSeleccionarPDFs}
                  disabled={conversionEnProgreso}
                  className={`w-full h-[114px] bg-[#d9d9d9] rounded-[8px] transition-colors flex items-center justify-center drop-zone ${
                    conversionEnProgreso ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c9c9c9] cursor-pointer'
                  }`}
                >
                  <span className="font-['Inter',sans-serif] text-[22px] text-black text-center px-2">
                    {archivosPDF.length > 0 ? `${archivosPDF.length} PDFs encontrados` : 'SELECCIONAR CARPETA E-14'}
                  </span>
                </button>

                <button
                  onClick={() => handleConvertirCSV()}
                  disabled={conversionEnProgreso || archivosPDF.length === 0 || !keyAsignada}
                  className={`w-full h-[42px] rounded-[8px] transition-colors mt-4 ${
                    conversionEnProgreso || archivosPDF.length === 0 || !keyAsignada
                      ? 'bg-[#e5e5e5] cursor-not-allowed'
                      : 'bg-[#11d0d0] hover:bg-[#0fb8b8] cursor-pointer'
                  }`}
                >
                  <span className={`font-['Inter',sans-serif] text-xl ${
                    conversionEnProgreso || archivosPDF.length === 0 || !keyAsignada ? 'text-[#888]' : 'text-white font-semibold'
                  }`}>
                    {conversionEnProgreso ? 'Procesando...' : 'Convertir a CSV'}
                  </span>
                </button>

                {conversionEnProgreso && (
                  <button
                    onClick={handleCancelarProceso}
                    className="w-full h-[42px] rounded-[8px] bg-[#ff5a5a] hover:bg-[#e54a4a] transition-colors cursor-pointer mt-2"
                  >
                    <span className="font-['Inter',sans-serif] text-xl text-white font-semibold">
                      Cancelar
                    </span>
                  </button>
                )}

                {!keyAsignada && archivosPDF.length > 0 && (
                  <p className="font-['Poppins',sans-serif] text-xs text-[#ff5a5a] mt-2 text-center">
                    Ingresa una API Key en Identificación
                  </p>
                )}

                {/* Recuadro de progreso debajo del paso 3 */}
                <div className="bg-[rgba(17,208,208,0.08)] rounded-[8px] p-4 w-full min-h-[120px] max-h-[250px] overflow-y-auto mt-4">
                  {archivosPDF.length === 0 && !conversionEnProgreso && !conversionCompleta && (
                    <p className="font-['Poppins',sans-serif] text-[#a2a2a2] text-sm text-center mt-4">
                      Selecciona una carpeta con archivos PDF para ver el progreso aquí.
                    </p>
                  )}

                  {archivosPDF.length > 0 && !conversionEnProgreso && !conversionCompleta && (
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[#40376d] text-sm font-semibold mb-3">
                        Archivos listos para convertir:
                      </p>
                      <div className="space-y-2">
                        {archivosPDF.slice(0, 8).map((archivo, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
                            <span className="font-['Inter',sans-serif] text-xs text-[#40376d] truncate">
                              {archivo.split(/[/\\]/).pop()}
                            </span>
                          </div>
                        ))}
                        {archivosPDF.length > 8 && (
                          <p className="font-['Inter',sans-serif] text-xs text-[#a2a2a2] ml-4">
                            ... y {archivosPDF.length - 8} archivos más
                          </p>
                        )}
                      </div>
                      <p className="font-['Poppins',sans-serif] text-[#40376d] text-xs mt-4">
                        Se procesarán en {Math.ceil(archivosPDF.length / 50)} lote(s) de 50 PDFs
                      </p>
                    </div>
                  )}

                  {conversionEnProgreso && (
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[#40376d] text-sm font-semibold mb-2">
                        {mensajeEstado}
                      </p>
                      <div className="w-full bg-white border border-[#11d0d0] rounded-[8px] h-[16px] overflow-hidden mb-2">
                        <div
                          className="h-full bg-[#11d0d0] rounded-[8px] transition-all duration-300"
                          style={{ width: `${porcentajeProgreso}%` }}
                        />
                      </div>
                      <p className="font-['Inter',sans-serif] text-xs text-[#40376d] text-right mb-4">
                        {progresoActual.actual} / {progresoActual.total} ({porcentajeProgreso}%)
                      </p>
                      {archivoActual ? (
                        <div className="flex items-center gap-2 p-2 bg-white rounded-[6px] mb-3">
                          <span className="font-['Inter',sans-serif] text-xs text-[#888]">Último:</span>
                          <span className="font-['Inter',sans-serif] text-sm text-[#11d0d0] truncate">
                            {archivoActual}
                          </span>
                        </div>
                      ) : loteInfo.actual > 0 && (
                        <div className="flex items-center gap-2 p-2 bg-white rounded-[6px] mb-3">
                          <div className="w-4 h-4 rounded-full border-2 border-[#11d0d0] border-t-transparent animate-spin"></div>
                          <span className="font-['Inter',sans-serif] text-sm text-[#11d0d0]">
                            Procesando lote {loteInfo.actual} de {loteInfo.total}...
                          </span>
                        </div>
                      )}
                      <div className="flex gap-4 text-sm">
                        <span className="text-[#11d0d0]">Exitosos: {archivosExitosos.length}</span>
                        <span className="text-[#ff5a5a]">Fallidos: {archivosFallidos.length}</span>
                      </div>
                    </div>
                  )}

                  {conversionCompleta && !mostrarModal && (
                    <div>
                      <p className="font-['Poppins',sans-serif] text-[#11d0d0] text-base font-semibold mb-4">
                        Procesamiento completado
                      </p>
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-[#11d0d0]/10 rounded-[8px] p-3 text-center">
                          <p className="font-['Poppins',sans-serif] font-bold text-2xl text-[#11d0d0]">{archivosExitosos.length}</p>
                          <p className="font-['Poppins',sans-serif] text-xs text-[#40376d]">Exitosos</p>
                        </div>
                        <div className="flex-1 bg-[#ff5a5a]/10 rounded-[8px] p-3 text-center">
                          <p className="font-['Poppins',sans-serif] font-bold text-2xl text-[#ff5a5a]">{archivosFallidos.length}</p>
                          <p className="font-['Poppins',sans-serif] text-xs text-[#40376d]">Fallidos</p>
                        </div>
                      </div>
                      {csvsGenerados.length > 0 && (
                        <div>
                          <p className="font-['Poppins',sans-serif] text-xs text-[#40376d] mb-2">CSVs generados:</p>
                          {csvsGenerados.map((csv, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-[#11d0d0]">
                              <span>✓</span> {csv}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {conversionCompleta && (
                  <button
                    onClick={handleVerUbicacion}
                    className="w-full h-[42px] bg-[#d9d9d9] rounded-[8px] hover:bg-[#c9c9c9] transition-colors cursor-pointer mt-4"
                  >
                    <span className="font-['Poppins',sans-serif] font-medium text-lg text-black">VER UBICACIÓN</span>
                  </button>
                )}
              </div>

              {/* Columna 2: Paso 4 - Registraduría */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#11d0d0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Ingresa a la página de la registraduría y descarga el MMV de las E-24 correspondiente al municipio a revisar.
                  </p>
                </div>

                {departamento && municipio && (
                  <div className="bg-[#11d0d0]/10 rounded-[8px] p-4 border border-[#11d0d0]/30 mb-6 mt-6">
                    <p className="font-['Poppins',sans-serif] text-sm text-[#40376d] font-semibold mb-3">
                      GUÍA PARA FILTRAR EN REGISTRADURÍA:
                    </p>
                    <div className="space-y-2 text-sm font-['Inter',sans-serif]">
                      <div className="flex justify-between items-center bg-white/50 rounded px-2 py-1">
                        <span className="text-[#888]">Departamento:</span>
                        <span className="text-[#40376d] font-semibold">{departamento}</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/50 rounded px-2 py-1">
                        <span className="text-[#888]">Municipio:</span>
                        <span className="text-[#40376d] font-semibold">{municipio}</span>
                      </div>
                      {zona && (
                        <div className="flex justify-between items-center bg-white/50 rounded px-2 py-1">
                          <span className="text-[#888]">Zona:</span>
                          <span className="text-[#40376d] font-semibold">{zona}</span>
                        </div>
                      )}
                    </div>
                    <p className="font-['Poppins',sans-serif] text-xs text-[#888] mt-3 italic">
                      Usa estos datos para filtrar en la página de la Registraduría.
                    </p>
                  </div>
                )}

                <button
                  onClick={handleAbrirRegistraduria}
                  className="w-full h-[53px] bg-[#11d0d0] rounded-[8px] hover:bg-[#0fc0c0] transition-colors cursor-pointer"
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-xl text-white">
                    PÁGINA DE LA REGISTRADURÍA
                  </span>
                </button>
              </div>

              {/* Columna 3: Checklist de Extracción */}
              <div>
                <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-6 leading-relaxed">
                  SI YA CUENTAS CON LA SIGUIENTE INFORMACIÓN, PUEDES CONTINUAR A LA COMPARACIÓN AUTOMÁTICA:
                </p>

                <div className="space-y-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkCsvSubidos}
                      onChange={(e) => setCheckCsvSubidos(e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                      Archivos .csv de la zona en la carpeta del computador y subidos a Drive
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkTotales}
                      onChange={(e) => setCheckTotales(e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                      Archivo  <strong>TOTALES_MIGA_DE_PAN</strong> Subido a la carpeta del DRIVE
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkMmv}
                      onChange={(e) => setCheckMmv(e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-[#11d0d0] cursor-pointer flex-shrink-0"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#40376d] text-base">
                      MMV de la E-24 que corresponde a tu zona, descargada en tu computador y subida al DRIVE
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Botón Continuar - Extracción */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleContinuar}
                disabled={!checklistExtraccionCompleto}
                className={`h-[53px] w-[226px] rounded-[8px] transition-colors border-2 ${
                  checklistExtraccionCompleto
                    ? 'bg-[#11d0d0] border-[#11d0d0] hover:bg-[#0eb8b8] cursor-pointer'
                    : 'bg-white border-[#40376d] cursor-not-allowed'
                }`}
              >
                <span className={`font-['Poppins',sans-serif] font-semibold text-2xl tracking-wider ${
                  checklistExtraccionCompleto ? 'text-white' : 'text-[#40376d]'
                }`}>
                  CONTINUAR
                </span>
              </button>
            </div>
            </>
          )}

          {/* SECCIÓN COMPARACIÓN AUTOMÁTICA */}
          {seccionActiva === 'comparacion_automatica' && (
            <>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 animate-fadeIn max-w-[1100px] mx-auto">
              {/* Columna izquierda: Pasos */}
              <div className="space-y-8">
                {/* Paso 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff5a5a] flex items-center justify-center flex-shrink-0">
                    <span className="font-['Poppins',sans-serif] font-bold text-white text-xl">1.</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#ff5a5a] text-lg leading-relaxed mt-1">
                    Indicale al concatenador que ya se encuentran los documentos en el DRIVE, para realizar el proceso de comparación automática.
                  </p>
                </div>

                {/* Paso 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff5a5a] flex items-center justify-center flex-shrink-0">
                    <span className="font-['Poppins',sans-serif] font-bold text-white text-xl">2.</span>
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] text-[#ff5a5a] text-lg leading-relaxed">
                      El concatenador subirá al drive el archivo
                    </p>
                    <p className="font-['Poppins',sans-serif] font-bold text-[#40376d] text-xl tracking-wide">
                      COMPRARACIÓN_MIGA_DE_PAN
                    </p>
                    <p className="font-['Poppins',sans-serif] font-semibold text-[#ff5a5a] text-lg leading-relaxed mt-3">
                      Este es el archivo que debes &nbsp;usar en la fase de comparación manual:
                    </p>

                  </div>
                </div>
              </div>

              {/* Columna derecha: Checklist + Continuar */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-['Poppins',sans-serif] font-bold text-[#ff5a5a] text-sm tracking-wider leading-relaxed uppercase">
                    SI YA CUENTAS CON LA SIGUIENTE INFORMACIÓN, PUEDES CONTINUAR A LA COMPARACIÓN MANUAL:
                  </p>
                  <label className="flex items-start gap-2 mt-5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkMigaPan}
                      onChange={() => setCheckMigaPan(!checkMigaPan)}
                      className="mt-1 w-4 h-4 accent-[#ff5a5a] flex-shrink-0"
                    />
                    <span className="font-['Poppins',sans-serif] text-[#40376d] text-sm leading-relaxed">
                      Archivo COMPARACIÓN_MIGA_DE_PAN abierto en "hojas de calculo de google"
                    </span>
                  </label>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleContinuar}
                    className="h-[53px] w-[226px] border-2 border-[#40376d] rounded-[8px] hover:bg-[#40376d] hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-2xl tracking-wider hover:text-white">
                      CONTINUAR
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Botón guía Drive - parte inferior */}
            <div className="flex justify-center mt-8 max-w-[1100px] mx-auto">
              <button
                onClick={() => setMostrarGuiaDrive(true)}
                className="font-['Poppins',sans-serif] text-[#11d0d0] text-base font-semibold hover:underline transition-colors cursor-pointer"
              >
                En Drive, abre el documento con "hojas de cálculo de google"
              </button>
            </div>
            </>
          )}

          {/* SECCIÓN COMPARACIÓN ARCHIVOS (subir CSV/MMV y generar comparación) */}
          {seccionActiva === 'comparacion_archivos' && (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 animate-fadeIn max-w-[1000px] mx-auto">
              {/* Columna 1: Subir archivos */}
              <div className="max-w-[380px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff8c42] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Sube el archivo CSV generado y el MMV de la E-24 que descargaste.
                  </p>
                </div>

                <button
                  onClick={handleSeleccionarCSV}
                  className={`w-full h-[114px] rounded-[8px] transition-colors cursor-pointer drop-zone border-2 ${
                    archivoCSV
                      ? 'bg-[#ff8c42]/10 border-[#ff8c42]'
                      : 'bg-[#d9d9d9] border-black border-dashed hover:bg-[#c9c9c9]'
                  }`}
                >
                  {archivoCSV ? (
                    <div className="flex flex-col items-center gap-2 px-4">
                      <svg className="w-7 h-7 text-[#ff8c42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-['Poppins',sans-serif] text-sm font-semibold text-[#ff8c42]">CSV SELECCIONADO</span>
                      <span className="font-['Inter',sans-serif] text-xs text-[#40376d] truncate max-w-full px-2">
                        {archivoCSV.split(/[/\\]/).pop()}
                      </span>
                    </div>
                  ) : (
                    <span className="font-['Poppins',sans-serif] text-[22px] text-black">
                      Seleccionar archivo CSV
                    </span>
                  )}
                </button>

                <button
                  onClick={handleSeleccionarMMV}
                  className={`w-full h-[114px] rounded-[8px] transition-colors cursor-pointer mt-4 drop-zone border-2 ${
                    carpetaMMV
                      ? 'bg-[#ff8c42]/10 border-[#ff8c42]'
                      : 'bg-[#d9d9d9] border-black border-dashed hover:bg-[#c9c9c9]'
                  }`}
                >
                  {carpetaMMV ? (
                    <div className="flex flex-col items-center gap-2 px-4">
                      <svg className="w-7 h-7 text-[#ff8c42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-['Poppins',sans-serif] text-sm font-semibold text-[#ff8c42]">MMV SELECCIONADO</span>
                      <span className="font-['Inter',sans-serif] text-xs text-[#40376d] truncate max-w-full px-2">
                        {carpetaMMV.split(/[/\\]/).pop()}
                      </span>
                    </div>
                  ) : (
                    <span className="font-['Poppins',sans-serif] text-[22px] text-black">
                      Seleccionar MMV DE E-24
                    </span>
                  )}
                </button>

              </div>

              {/* Columna 2: Generar comparación */}
              <div className="max-w-[380px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#ff8c42] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">6</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-lg">
                    Crea el archivo de comparación.
                  </p>
                </div>

                <button
                  onClick={handleGenerarComparacion}
                  disabled={comparacionEnProgreso || !archivoCSV || !carpetaMMV}
                  className={`w-full h-[70px] rounded-[8px] transition-colors cursor-pointer ${
                    comparacionEnProgreso || !archivoCSV || !carpetaMMV
                      ? 'bg-[#e0e0e0] cursor-not-allowed'
                      : 'bg-[#d9d9d9] hover:bg-[#c9c9c9]'
                  }`}
                >
                  <span className="font-['Poppins',sans-serif] font-medium text-[22px] text-black">
                    {comparacionEnProgreso ? 'COMPARANDO...' : 'GENERAR ARCHIVO DE COMPARACIÓN'}
                  </span>
                </button>

                {comparacionEnProgreso && (
                  <button
                    onClick={handleCancelarProceso}
                    className="w-full h-[42px] rounded-[8px] bg-[#ff5a5a] hover:bg-[#e54a4a] transition-colors cursor-pointer mt-2"
                  >
                    <span className="font-['Poppins',sans-serif] font-semibold text-white">
                      CANCELAR
                    </span>
                  </button>
                )}

                {progresoComparacion > 0 && (
                  <div className="mt-4">
                    <div className="w-full bg-white border border-[#ff8c42] rounded-[8px] h-[17px] overflow-hidden">
                      <div
                        className="h-full bg-[#ff8c42] rounded-[8px] transition-all duration-300"
                        style={{ width: `${progresoComparacion}%` }}
                      />
                    </div>
                    <p className="font-['Inter',sans-serif] text-black text-[15px] mt-2 text-right">{progresoComparacion}%</p>
                  </div>
                )}

                {errorComparacion && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-300 rounded-lg">
                    <p className="font-['Poppins',sans-serif] text-red-700 text-sm">{errorComparacion}</p>
                  </div>
                )}

                {comparacionCompleta && resultadoComparacion && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-white border border-[#ff8c42] rounded-lg space-y-1">
                      <p className="font-['Poppins',sans-serif] text-sm text-gray-700">
                        Comparados: <span className="font-bold">{resultadoComparacion.total_registros}</span> |
                        Coinciden: <span className="font-bold text-green-700">{resultadoComparacion.total_coinciden}</span> ({resultadoComparacion.porcentaje_coinciden}%) |
                        Discrepancias: <span className="font-bold text-red-700">{resultadoComparacion.total_discrepancias}</span>
                      </p>
                      {resultadoComparacion.total_discrepancias === 0 && (
                        <p className="font-['Poppins',sans-serif] text-sm text-green-700 font-bold">
                          Todos los votos coinciden perfectamente
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleDescargarResultados}
                      className="w-full h-[50px] bg-[#d9d9d9] rounded-[8px] hover:bg-[#c9c9c9] transition-colors cursor-pointer"
                    >
                      <span className="font-['Poppins',sans-serif] font-medium text-lg text-black">DESCARGAR CSV COMPLETO</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tabla de discrepancias */}
            {discrepanciasDetalle.length > 0 && (
              <div className="mt-8 max-w-[1100px] mx-auto animate-fadeIn">
                <p className="font-['Poppins',sans-serif] font-bold text-[#40376d] text-lg mb-3">
                  Discrepancias encontradas ({discrepanciasDetalle.length})
                </p>
                <div className="overflow-x-auto max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg">
                  <table className="w-full text-sm">
                    <thead className="bg-[#40376d] text-white sticky top-0">
                      <tr>
                        <th className="px-3 py-2 text-left font-['Poppins',sans-serif] font-semibold">Mesa</th>
                        <th className="px-3 py-2 text-left font-['Poppins',sans-serif] font-semibold">Puesto</th>
                        <th className="px-3 py-2 text-left font-['Poppins',sans-serif] font-semibold">Partido / Candidato</th>
                        <th className="px-3 py-2 text-right font-['Poppins',sans-serif] font-semibold">V. Oficial</th>
                        <th className="px-3 py-2 text-right font-['Poppins',sans-serif] font-semibold">V. Extraido</th>
                        <th className="px-3 py-2 text-right font-['Poppins',sans-serif] font-semibold">Diferencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {discrepanciasDetalle.map((fila, idx) => {
                        const esMas = fila.discrepancia > 0;
                        return (
                          <tr
                            key={idx}
                            className={esMas
                              ? 'bg-red-50 border-b border-red-200'
                              : 'bg-blue-50 border-b border-blue-200'
                            }
                          >
                            <td className="px-3 py-2 font-mono text-xs text-gray-800">{fila.mesa}</td>
                            <td className="px-3 py-2 text-xs text-gray-700 max-w-[150px] truncate">{fila.puesto}</td>
                            <td className="px-3 py-2 text-xs text-gray-800 max-w-[200px] truncate">{fila.nombre}</td>
                            <td className="px-3 py-2 text-right font-mono text-xs font-bold text-gray-800">{fila.votos_oficial}</td>
                            <td className="px-3 py-2 text-right font-mono text-xs font-bold text-gray-800">{fila.votos_extraido}</td>
                            <td className={`px-3 py-2 text-right font-mono text-xs font-bold ${
                              esMas ? 'text-red-700' : 'text-blue-700'
                            }`}>
                              {esMas ? '+' : ''}{fila.discrepancia}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="flex gap-4 mt-2 text-xs font-['Poppins',sans-serif]">
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-3 h-3 bg-red-200 rounded"></span>
                    <span className="text-red-700">Rojo: Registraduria reporta MAS votos</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-3 h-3 bg-blue-200 rounded"></span>
                    <span className="text-blue-700">Azul: Registraduria reporta MENOS votos</span>
                  </span>
                </div>
              </div>
            )}

            {/* Botón Continuar - Comparación Archivos */}
            <div className="flex justify-end mt-8">
              <button
                onClick={handleContinuar}
                className="h-[53px] w-[226px] bg-[#ff8c42] rounded-[8px] hover:bg-[#e07a35] transition-colors cursor-pointer"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-white text-2xl tracking-wider">
                  CONTINUAR
                </span>
              </button>
            </div>
            </>
          )}

          {/* SECCIÓN COMPARACIÓN MANUAL */}
          {seccionActiva === 'comparacion_manual' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fadeIn max-w-[1250px] mx-auto">
              {/* Columna 1 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">1.</p>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                    Abre la carpeta donde se encuentran las actas E-14 que te asignaron.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">2.</p>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                    Abre el archivo de comparación y ubícate en la hoja de "comparación"
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">3.</p>
                  <div>
                    <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                      Busca el acta E-14  de la fila que vas a revisar.
                    </p>
                    <p className="font-['Poppins',sans-serif] italic text-[#40376d] text-base mt-2">
                      Ten en cuenta el municipio, la zona, el puesto de votación, la mesa y candidato.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna 2 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">4.</p>
                  <div>
                    <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                      Verifica que el dato de la columna "VOTOS_ E14" corresponde con el que se encuentra en la E-14 que estas revisando.
                    </p>

                    <p className="font-['Poppins',sans-serif] font-semibold text-[#ff6e6e] text-base mt-4">
                      Si no corresponde:
                    </p>
                    <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mt-1">
                      Cámbialo por el dato que se encuentra en el acta E-14, ya que esto pudo ser un error de lectura del software.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">5.</p>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                    Luego, en la página de la registraduría, ubica el acta E-24 correspondiente a la E-14 que estas revisando:
                  </p>
                </div>

                <button
                  onClick={handleAbrirRegistraduria}
                  className="w-full h-[48px] bg-[#d3c4d1]/30 border-2 border-[#40376d]/20 rounded-[8px] hover:bg-[#d3c4d1]/50 transition-colors cursor-pointer"
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-base tracking-wider">
                    PAGINA DE LA REGISTRADURIA
                  </span>
                </button>
              </div>

              {/* Columna 3 */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <p className="font-['Poppins',sans-serif] font-semibold text-[#d3c4d1] text-3xl leading-none">6.</p>
                  <div>
                    <p className="font-['Poppins',sans-serif] font-medium text-[#40376d] text-base mt-1">
                      Verifica que el dato de la columna "VOTOS_E14" es el mismo que se encuentra en el acta E-24.
                    </p>

                    <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mt-4">
                      Si los datos son iguales, significa que no hay discrepancia. <span className="text-[#11d0d0] font-semibold">Borra la fila de la hoja de comparación.</span>
                    </p>

                    <p className="font-['Poppins',sans-serif] text-base mt-4">
                      <span className="text-[#ff6e6e] font-semibold">Si no corresponden los datos significa que hay una discrepancia. </span>
                      <span className="text-[#40376d]">En este caso, descarga la E-14 y la E-24 y guárdalas en la carpeta de EVIDENCIAS.</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleAbrirEvidencias}
                  className="w-full h-[48px] bg-[#d3c4d1]/30 border-2 border-[#40376d]/20 rounded-[8px] hover:bg-[#d3c4d1]/50 transition-colors cursor-pointer"
                >
                  <span className="font-['Poppins',sans-serif] font-semibold text-[#40376d] text-base tracking-wider">
                    CARPETA DE EVIDENCIAS
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info de carpeta de trabajo */}
        {carpetaTrabajo && (
          <p className="text-white/50 text-sm mt-4 text-center">
            Carpeta de trabajo: {carpetaTrabajo}
          </p>
        )}
      </div>

      {/* Modal de errores */}
      <ModalErrores
        visible={mostrarModal}
        exitosos={archivosExitosos}
        fallidos={archivosFallidos}
        errorDetectado={errorDetectado}
        onReintentar={handleReintentar}
        onIgnorar={handleIgnorarYContinuar}
        onVerUbicacion={handleVerUbicacion}
        onCerrar={() => {
          setMostrarModal(false);
          setSeccionActiva('identificacion');
        }}
      />

      {/* Modal de ejemplo de formatos E-14 y E-24 */}
      {mostrarEjemploFormatos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#40376d]/80 backdrop-blur-sm"
            onClick={() => setMostrarEjemploFormatos(false)}
          />
          <div className="relative bg-white rounded-[17px] p-6 max-w-[850px] w-full mx-4 shadow-2xl border-[3px] border-[#a855f7]">
            <div className="text-center mb-4">
              <h2 className="font-['Poppins',sans-serif] font-bold text-[#a855f7] text-xl">
                EJEMPLO DE FORMATOS
              </h2>
            </div>
            <div className="h-[2px] bg-[#a855f7]/30 mb-4" />
            <img
              src={ejemploFormatos}
              alt="Ejemplo de formatos E-14 y E-24"
              className="w-full rounded-[8px]"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setMostrarEjemploFormatos(false)}
                className="h-[48px] w-[180px] bg-[#a855f7] rounded-[8px] hover:bg-[#9333ea] transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-white">
                  CERRAR
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de guía Drive - abrir con hojas de cálculo */}
      {mostrarGuiaDrive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#40376d]/80 backdrop-blur-sm"
            onClick={() => setMostrarGuiaDrive(false)}
          />
          <div className="relative bg-white rounded-[17px] p-6 max-w-[850px] w-full mx-4 shadow-2xl border-[3px] border-[#11d0d0]">
            <div className="text-center mb-4">
              <h2 className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-xl">
                ABRIR CON HOJAS DE CÁLCULO DE GOOGLE
              </h2>
            </div>
            <div className="h-[2px] bg-[#11d0d0]/30 mb-4" />
            <img
              src={guiaDriveHojas}
              alt="Guía: abrir con Hojas de cálculo de Google"
              className="w-full rounded-[8px]"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setMostrarGuiaDrive(false)}
                className="h-[48px] w-[180px] bg-[#11d0d0] rounded-[8px] hover:bg-[#0fb8b8] transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-white">
                  CERRAR
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación de identificación */}
      {mostrarModalConfirmacion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[#40376d]/80 backdrop-blur-sm"
            onClick={() => setMostrarModalConfirmacion(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-[17px] p-8 max-w-[500px] w-full mx-4 shadow-2xl border-[3px] border-[#ffb700]">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#ffb700]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#ffb700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="font-['Poppins',sans-serif] font-bold text-[#ffb700] text-xl">
                CONFIRMA TUS DATOS
              </h2>
            </div>

            {/* Separador */}
            <div className="h-[2px] bg-[#ffb700]/30 mb-6" />

            {/* Mensaje */}
            <div className="bg-[#ffb700]/5 border border-[#ffb700]/20 rounded-[8px] p-4 mb-6">
              <p className="font-['Poppins',sans-serif] text-[#40376d] text-sm mb-4">
                Ten en cuenta que estás por procesar las actas <strong>E-14</strong> con la siguiente configuración:
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white rounded px-3 py-2">
                  <span className="font-['Poppins',sans-serif] text-[#888] text-sm">Tipo de Elección:</span>
                  <span className="font-['Poppins',sans-serif] text-[#40376d] font-semibold">{tipoEleccion}</span>
                </div>
                {esCITREP && (
                  <div className="flex justify-between items-center bg-white rounded px-3 py-2">
                    <span className="font-['Poppins',sans-serif] text-[#888] text-sm">Circunscripción:</span>
                    <span className="font-['Poppins',sans-serif] text-[#40376d] font-semibold">{circunscripcion}</span>
                  </div>
                )}
                <div className="flex justify-between items-center bg-white rounded px-3 py-2">
                  <span className="font-['Poppins',sans-serif] text-[#888] text-sm">Departamento:</span>
                  <span className="font-['Poppins',sans-serif] text-[#40376d] font-semibold">{departamento}</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded px-3 py-2">
                  <span className="font-['Poppins',sans-serif] text-[#888] text-sm">Municipio:</span>
                  <span className="font-['Poppins',sans-serif] text-[#40376d] font-semibold">{municipio}</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded px-3 py-2">
                  <span className="font-['Poppins',sans-serif] text-[#888] text-sm">Zona:</span>
                  <span className="font-['Poppins',sans-serif] text-[#40376d] font-semibold">{zonasFiltradas.find(z => z.codigo === zona)?.nombre || zona}</span>
                </div>
              </div>

              <p className="font-['Poppins',sans-serif] text-[#ff5a5a] text-xs mt-4 text-center italic">
                Verifica que estos datos correspondan a las actas que vas a procesar.
              </p>
            </div>

            {/* Botones */}
            <div className="flex gap-3">
              <button
                onClick={() => setMostrarModalConfirmacion(false)}
                className="flex-1 h-[48px] border-2 border-[#40376d] rounded-[8px] hover:bg-gray-50 transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-[#40376d]">
                  CANCELAR
                </span>
              </button>
              <button
                onClick={handleConfirmarIdentificacion}
                className="flex-1 h-[48px] bg-[#ffb700] rounded-[8px] hover:bg-[#e5a500] transition-colors"
              >
                <span className="font-['Poppins',sans-serif] font-semibold text-white">
                  CONFIRMAR
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}