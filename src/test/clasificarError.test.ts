import { describe, it, expect } from 'vitest';
import { clasificarError } from '../utils/clasificarError';

// ============================================================
// Tests para clasificarError.ts
// Cubre todos los tipos de error que puede generar el script R
// ============================================================

describe('clasificarError - API Key inválida', () => {
  it('detecta "Incorrect API key provided"', () => {
    const r = clasificarError('Error API OpenAI: Incorrect API key provided: sk-proj-xxx');
    expect(r.tipo).toBe('api_key');
  });
  it('detecta "invalid_api_key"', () => {
    const r = clasificarError('Error API OpenAI: invalid_api_key');
    expect(r.tipo).toBe('api_key');
  });
  it('detecta "Unauthorized"', () => {
    const r = clasificarError('Error API OpenAI: Unauthorized');
    expect(r.tipo).toBe('api_key');
  });
  it('detecta "authentication_error"', () => {
    const r = clasificarError('authentication_error: token inválido');
    expect(r.tipo).toBe('api_key');
  });
  it('mensaje contiene instrucción de corrección', () => {
    const r = clasificarError('Incorrect API key provided');
    expect(r.mensaje).toContain('Identificacion');
  });
});

describe('clasificarError - Cuota agotada', () => {
  it('detecta "exceeded your current quota"', () => {
    const r = clasificarError('Error API OpenAI: You exceeded your current quota, please check your plan and billing details');
    expect(r.tipo).toBe('cuota_excedida');
  });
  it('detecta "insufficient_quota"', () => {
    const r = clasificarError('insufficient_quota');
    expect(r.tipo).toBe('cuota_excedida');
  });
  it('detecta "credit balance is too low"', () => {
    const r = clasificarError('Your credit balance is too low');
    expect(r.tipo).toBe('cuota_excedida');
  });
  it('detecta "billing"', () => {
    const r = clasificarError('billing limit reached');
    expect(r.tipo).toBe('cuota_excedida');
  });
});

describe('clasificarError - Rate limit', () => {
  it('detecta "Rate limit reached"', () => {
    const r = clasificarError('Error API OpenAI: Rate limit reached for gpt-4o-mini');
    expect(r.tipo).toBe('rate_limit');
  });
  it('detecta "too many requests"', () => {
    const r = clasificarError('Too many requests');
    expect(r.tipo).toBe('rate_limit');
  });
  it('detecta "rate_limit_exceeded"', () => {
    const r = clasificarError('rate_limit exceeded');
    expect(r.tipo).toBe('rate_limit');
  });
});

describe('clasificarError - Sin conexión', () => {
  it('detecta "Could not resolve host"', () => {
    const r = clasificarError('Could not resolve host: api.openai.com');
    expect(r.tipo).toBe('conexion');
  });
  it('detecta "Connection timed out"', () => {
    const r = clasificarError('Connection timed out');
    expect(r.tipo).toBe('conexion');
  });
  it('detecta "ECONNREFUSED"', () => {
    const r = clasificarError('ECONNREFUSED 127.0.0.1:443');
    expect(r.tipo).toBe('conexion');
  });
  it('detecta "ENOTFOUND"', () => {
    const r = clasificarError('getaddrinfo ENOTFOUND api.openai.com');
    expect(r.tipo).toBe('conexion');
  });
  it('detecta "socket hang up"', () => {
    const r = clasificarError('socket hang up');
    expect(r.tipo).toBe('conexion');
  });
});

describe('clasificarError - Servidor no disponible', () => {
  it('detecta "server had an error"', () => {
    const r = clasificarError('Error API OpenAI: The server had an error processing your request');
    expect(r.tipo).toBe('servidor');
  });
  it('detecta "overloaded"', () => {
    const r = clasificarError('overloaded_error: the server is overloaded');
    expect(r.tipo).toBe('servidor');
  });
  it('detecta "503"', () => {
    const r = clasificarError('HTTP 503 service unavailable');
    expect(r.tipo).toBe('servidor');
  });
  it('detecta "502"', () => {
    const r = clasificarError('HTTP error 502 Bad Gateway');
    expect(r.tipo).toBe('servidor');
  });
});

describe('clasificarError - Imagen muy grande', () => {
  it('detecta "Request too large"', () => {
    const r = clasificarError('Error API OpenAI: Request too large for model');
    expect(r.tipo).toBe('imagen_grande');
  });
  it('detecta "payload too large"', () => {
    const r = clasificarError('413 payload too large');
    expect(r.tipo).toBe('imagen_grande');
  });
  it('detecta "content too large"', () => {
    const r = clasificarError('content too large');
    expect(r.tipo).toBe('imagen_grande');
  });
});

describe('clasificarError - PDF corrupto o mal escaneado', () => {
  it('detecta "PDF file is damaged"', () => {
    const r = clasificarError('PDF file is damaged');
    expect(r.tipo).toBe('pdf_corrupto');
  });
  it('detecta "not a pdf file"', () => {
    const r = clasificarError('not a pdf file');
    expect(r.tipo).toBe('pdf_corrupto');
  });
  // Nuevos patrones añadidos en v1.0.2
  it('detecta "No se pudo alinear ninguna pagina"', () => {
    const r = clasificarError('No se pudo alinear ninguna pagina');
    expect(r.tipo).toBe('pdf_corrupto');
  });
  it('detecta "No se detecto marcador en TR"', () => {
    const r = clasificarError('No se detecto marcador en TR');
    expect(r.tipo).toBe('pdf_corrupto');
  });
  it('detecta "No se detecto marcador en BL"', () => {
    const r = clasificarError('No se detecto marcador en BL');
    expect(r.tipo).toBe('pdf_corrupto');
  });
  it('detecta "error en preparacion"', () => {
    const r = clasificarError('Error en preparacion del PDF');
    expect(r.tipo).toBe('pdf_corrupto');
  });
});

describe('clasificarError - Archivo no encontrado', () => {
  it('detecta "No such file or directory"', () => {
    const r = clasificarError('No such file or directory: archivo.pdf');
    expect(r.tipo).toBe('pdf_no_encontrado');
  });
  it('detecta "file not found"', () => {
    const r = clasificarError('file not found');
    expect(r.tipo).toBe('pdf_no_encontrado');
  });
  it('detecta "does not exist"', () => {
    const r = clasificarError('path does not exist');
    expect(r.tipo).toBe('pdf_no_encontrado');
  });
});

describe('clasificarError - Respuesta IA no interpretable', () => {
  // Nuevos patrones añadidos en v1.0.2
  it('detecta "No se encontro JSON valido en la respuesta"', () => {
    const r = clasificarError('No se encontro JSON valido en la respuesta');
    expect(r.tipo).toBe('respuesta_ia');
  });
  it('detecta "No hay datos de ubicacion" (fallback del R)', () => {
    const r = clasificarError('No hay datos de ubicacion');
    expect(r.tipo).toBe('respuesta_ia');
  });
  it('detecta "No hay datos de votos del OCR"', () => {
    const r = clasificarError('No hay datos de votos del OCR');
    expect(r.tipo).toBe('respuesta_ia');
  });
  it('detecta "parse error"', () => {
    const r = clasificarError('parse error in JSON response');
    expect(r.tipo).toBe('respuesta_ia');
  });
  it('detecta "unexpected token"', () => {
    const r = clasificarError('unexpected token < in JSON');
    expect(r.tipo).toBe('respuesta_ia');
  });
});

describe('clasificarError - Error desconocido', () => {
  it('clasifica errores no reconocidos como "otro"', () => {
    const r = clasificarError('algún error raro desconocido xyz');
    expect(r.tipo).toBe('otro');
  });
  it('incluye el mensaje original en errores "otro"', () => {
    const r = clasificarError('error desconocido específico');
    expect(r.mensaje).toContain('error desconocido específico');
  });
  it('cadena vacía clasifica como "otro"', () => {
    const r = clasificarError('');
    expect(r.tipo).toBe('otro');
  });
});

describe('clasificarError - Prioridad (errores combinados en un mensaje)', () => {
  it('api_key tiene prioridad sobre texto genérico', () => {
    const r = clasificarError('Error API OpenAI: Incorrect API key provided - no such file');
    expect(r.tipo).toBe('api_key');
  });
  it('cuota_excedida tiene prioridad sobre rate_limit en mismo texto', () => {
    const r = clasificarError('exceeded your current quota rate limit');
    // Cuota aparece primero en el switch
    expect(r.tipo).toBe('cuota_excedida');
  });
});