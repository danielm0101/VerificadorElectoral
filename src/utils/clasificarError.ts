import type { TipoError } from '../types';

export function clasificarError(error: string): { tipo: TipoError; mensaje: string } {
  const e = error.toLowerCase();

  // API KEY INVALIDA
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
      mensaje: 'La API Key es incorrecta. Ve a Identificacion y verifica que la hayas copiado completa.'
    };
  }

  // CUOTA / CREDITOS AGOTADOS
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
      mensaje: 'La API Key no tiene creditos disponibles. Recarga tu saldo en la plataforma del proveedor (OpenAI o Anthropic).'
    };
  }

  // RATE LIMIT
  if (
    e.includes('rate limit') ||
    e.includes('rate_limit') ||
    e.includes('too many requests') ||
    e.includes('exceeded your per-model limit')
  ) {
    return {
      tipo: 'rate_limit',
      mensaje: 'Se alcanzo el limite de solicitudes por minuto de la API. Espera unos minutos y reintenta.'
    };
  }

  // SERVIDOR NO DISPONIBLE
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
      mensaje: 'El servidor de IA esta sobrecargado o con problemas temporales. Reintenta en unos minutos.'
    };
  }

  // CONEXION A INTERNET
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
      mensaje: 'No hay conexion a internet o el servidor no responde. Verifica tu conexion y reintenta.'
    };
  }

  // IMAGEN MUY GRANDE
  if (
    e.includes('request too large') ||
    e.includes('payload too large') ||
    e.includes('content too large')
  ) {
    return {
      tipo: 'imagen_grande',
      mensaje: 'El archivo PDF genera una imagen demasiado grande para la API. Intenta con un PDF de menor resolucion.'
    };
  }

  // PDF CORRUPTO
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
      mensaje: 'El archivo PDF esta danado o no es un PDF valido. Descargalo nuevamente desde la fuente original.'
    };
  }

  // ARCHIVO NO ENCONTRADO
  if (
    e.includes('no such file or directory') ||
    e.includes('cannot open file') ||
    e.includes('file not found') ||
    e.includes('does not exist')
  ) {
    return {
      tipo: 'pdf_no_encontrado',
      mensaje: 'El archivo PDF no se encontro en la ruta indicada. Puede que se haya movido o eliminado.'
    };
  }

  // RESPUESTA DE IA NO INTERPRETABLE
  if (
    e.includes('no se pudo parsear') ||
    e.includes('sin datos extraidos') ||
    e.includes('respuesta inesperada') ||
    e.includes('parse error') ||
    e.includes('unexpected token') ||
    e.includes('unexpected end') ||
    e.includes('json parse') ||
    e.includes('no se encontro json valido') ||
    e.includes('no hay datos de ubicacion') ||
    e.includes('no hay datos de votos')
  ) {
    return {
      tipo: 'respuesta_ia',
      mensaje: 'La IA no pudo leer correctamente este PDF. El formato puede ser diferente al esperado. Reintenta o revisalo manualmente.'
    };
  }

  // PDF MAL ESCANEADO / NO SE PUDO ALINEAR
  if (
    e.includes('no se pudo alinear') ||
    e.includes('no se detecto marcador') ||
    e.includes('error en preparacion') ||
    e.includes('no se pudo leer') ||
    e.includes('warpPerspective') ||
    e.includes('perspectiva')
  ) {
    return {
      tipo: 'pdf_corrupto',
      mensaje: 'El PDF no pudo ser procesado. Puede estar mal escaneado, rotado o con baja calidad de imagen. Descargalo nuevamente.'
    };
  }

  // ERROR DESCONOCIDO
  return {
    tipo: 'otro',
    mensaje: `Error inesperado: ${error}`
  };
}
