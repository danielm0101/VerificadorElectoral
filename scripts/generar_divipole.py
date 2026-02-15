#!/usr/bin/env python3
"""
GENERADOR DE DIVIPOLE PARA VERIFICADOR ELECTORAL
=================================================
Este script lee un archivo Excel de DIVIPOLE y genera el archivo divipoleData.ts

USO:
    python3 scripts/generar_divipole.py [archivo.xlsx]

Si no se especifica archivo, busca automáticamente archivos DIVIPOLE en la carpeta raíz.
"""

import pandas as pd
import json
import sys
import os
from pathlib import Path

# Obtener directorio del proyecto
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
OUTPUT_FILE = PROJECT_DIR / "src" / "divipoleData.ts"


# ============================================
# CITREP - Acto Legislativo 02 de 2021
# 16 Circunscripciones Transitorias Especiales de Paz
# Los nombres de municipios deben coincidir EXACTAMENTE con los del DIVIPOLE
# ============================================

CITREP_DEFINICIONES = {
    "CIRCUNSCRIPCION 1": {
        "departamento_principal": "CAUCA",
        "municipios": [
            ("CAUCA", "ARGELIA"),
            ("CAUCA", "BALBOA"),
            ("CAUCA", "BUENOS AIRES"),
            ("CAUCA", "CALDONO"),
            ("CAUCA", "CALOTO"),
            ("CAUCA", "CAJIBIO"),
            ("CAUCA", "CORINTO"),
            ("CAUCA", "EL TAMBO"),
            ("CAUCA", "JAMBALO"),
            ("CAUCA", "MERCADERES"),
            ("CAUCA", "MORALES"),
            ("CAUCA", "MIRANDA"),
            ("CAUCA", "PATIA (EL BORDO)"),
            ("CAUCA", "PIENDAMO"),
            ("CAUCA", "SANTANDER DE QUILICHAO"),
            ("CAUCA", "SUAREZ"),
            ("CAUCA", "TORIBIO"),
            ("NARIÑO", "CUMBITARA"),
            ("NARIÑO", "EL ROSARIO"),
            ("NARIÑO", "LEIVA"),
            ("NARIÑO", "LOS ANDES (SOTOMAYOR)"),
            ("NARIÑO", "POLICARPA"),
            ("VALLE", "FLORIDA"),
            ("VALLE", "PRADERA"),
        ]
    },
    "CIRCUNSCRIPCION 2": {
        "departamento_principal": "ARAUCA",
        "municipios": [
            ("ARAUCA", "ARAUQUITA"),
            ("ARAUCA", "FORTUL"),
            ("ARAUCA", "SARAVENA"),
            ("ARAUCA", "TAME"),
        ]
    },
    "CIRCUNSCRIPCION 3": {
        "departamento_principal": "ANTIOQUIA",
        "municipios": [
            ("ANTIOQUIA", "AMALFI"),
            ("ANTIOQUIA", "ANORI"),
            ("ANTIOQUIA", "BRICEÑO"),
            ("ANTIOQUIA", "CACERES"),
            ("ANTIOQUIA", "CAUCASIA"),
            ("ANTIOQUIA", "EL BAGRE"),
            ("ANTIOQUIA", "ITUANGO"),
            ("ANTIOQUIA", "NECHI"),
            ("ANTIOQUIA", "REMEDIOS"),
            ("ANTIOQUIA", "SEGOVIA"),
            ("ANTIOQUIA", "TARAZA"),
            ("ANTIOQUIA", "VALDIVIA"),
            ("ANTIOQUIA", "ZARAGOZA"),
        ]
    },
    "CIRCUNSCRIPCION 4": {
        "departamento_principal": "NORTE DE SAN",
        "municipios": [
            ("NORTE DE SAN", "CONVENCION"),
            ("NORTE DE SAN", "EL CARMEN"),
            ("NORTE DE SAN", "EL TARRA"),
            ("NORTE DE SAN", "HACARI"),
            ("NORTE DE SAN", "SAN CALIXTO"),
            ("NORTE DE SAN", "SARDINATA"),
            ("NORTE DE SAN", "TEORAMA"),
            ("NORTE DE SAN", "TIBU"),
        ]
    },
    "CIRCUNSCRIPCION 5": {
        "departamento_principal": "CAQUETA",
        "municipios": [
            ("CAQUETA", "FLORENCIA"),
            ("CAQUETA", "ALBANIA"),
            ("CAQUETA", "BELEN DE LOS ANDAQUIES"),
            ("CAQUETA", "CARTAGENA DEL CHAIRA"),
            ("CAQUETA", "CURILLO"),
            ("CAQUETA", "EL DONCELLO"),
            ("CAQUETA", "EL PAUJIL"),
            ("CAQUETA", "LA MONTAÑITA"),
            ("CAQUETA", "MILAN"),
            ("CAQUETA", "MORELIA"),
            ("CAQUETA", "PUERTO RICO"),
            ("CAQUETA", "SAN JOSE DEL FRAGUA"),
            ("CAQUETA", "SAN VICENTE DEL CAGUAN"),
            ("CAQUETA", "SOLANO"),
            ("CAQUETA", "SOLITA"),
            ("CAQUETA", "VALPARAISO"),
            ("HUILA", "ALGECIRAS"),
        ]
    },
    "CIRCUNSCRIPCION 6": {
        "departamento_principal": "CHOCO",
        "municipios": [
            ("CHOCO", "BOJAYA (BELLAVISTA)"),
            ("CHOCO", "MEDIO ATRATO (BETE)"),
            ("CHOCO", "ISTMINA"),
            ("CHOCO", "MEDIO SAN JUAN"),
            ("CHOCO", "EL LITORAL DEL SAN JUAN"),
            ("CHOCO", "NOVITA"),
            ("CHOCO", "SIPI"),
            ("CHOCO", "ACANDI"),
            ("CHOCO", "CARMEN DEL DARIEN"),
            ("CHOCO", "RIOSUCIO"),
            ("CHOCO", "UNGUIA"),
            ("CHOCO", "CONDOTO"),
            ("ANTIOQUIA", "VIGIA DEL FUERTE"),
            ("ANTIOQUIA", "MURINDO"),
        ]
    },
    "CIRCUNSCRIPCION 7": {
        "departamento_principal": "META",
        "municipios": [
            ("META", "MAPIRIPAN"),
            ("META", "MESETAS"),
            ("META", "LA MACARENA"),
            ("META", "URIBE"),
            ("META", "PUERTO CONCORDIA"),
            ("META", "PUERTO LLERAS"),
            ("META", "PUERTO RICO"),
            ("META", "VISTA HERMOSA"),
            ("GUAVIARE", "SAN JOSE DEL GUAVIARE"),
            ("GUAVIARE", "CALAMAR"),
            ("GUAVIARE", "EL RETORNO"),
            ("GUAVIARE", "MIRAFLORES"),
        ]
    },
    "CIRCUNSCRIPCION 8": {
        "departamento_principal": "BOLIVAR",
        "municipios": [
            ("BOLIVAR", "CORDOBA"),
            ("BOLIVAR", "EL CARMEN DE BOLIVAR"),
            ("BOLIVAR", "EL GUAMO"),
            ("BOLIVAR", "MARIA LA BAJA"),
            ("BOLIVAR", "SAN JACINTO"),
            ("BOLIVAR", "SAN JUAN NEPOMUCENO"),
            ("BOLIVAR", "ZAMBRANO"),
            ("SUCRE", "COLOSO (RICAURTE)"),
            ("SUCRE", "CHALAN"),
            ("SUCRE", "LOS PALMITOS"),
            ("SUCRE", "MORROA"),
            ("SUCRE", "OVEJAS"),
            ("SUCRE", "PALMITO"),
            ("SUCRE", "SAN ONOFRE"),
            ("SUCRE", "TOLUVIEJO"),
        ]
    },
    "CIRCUNSCRIPCION 9": {
        "departamento_principal": "CAUCA",
        "municipios": [
            ("CAUCA", "GUAPI"),
            ("CAUCA", "LOPEZ (MICAY)"),
            ("CAUCA", "TIMBIQUI"),
            ("VALLE", "BUENAVENTURA"),
        ]
    },
    "CIRCUNSCRIPCION 10": {
        "departamento_principal": "NARIÑO",
        "municipios": [
            ("NARIÑO", "BARBACOAS"),
            ("NARIÑO", "EL CHARCO"),
            ("NARIÑO", "LA TOLA"),
            ("NARIÑO", "MAGUI (PAYAN)"),
            ("NARIÑO", "MOSQUERA"),
            ("NARIÑO", "OLAYA HERRERA"),
            ("NARIÑO", "FRANCISCO PIZARRO (SALAHONDA)"),
            ("NARIÑO", "RICAURTE"),
            ("NARIÑO", "ROBERTO PAYAN (SAN JOSE)"),
            ("NARIÑO", "SANTA BARBARA (ISCUANDE)"),
            ("NARIÑO", "TUMACO"),
        ]
    },
    "CIRCUNSCRIPCION 11": {
        "departamento_principal": "PUTUMAYO",
        "municipios": [
            ("PUTUMAYO", "ORITO"),
            ("PUTUMAYO", "PUERTO ASIS"),
            ("PUTUMAYO", "PUERTO CAICEDO"),
            ("PUTUMAYO", "PUERTO GUZMAN"),
            ("PUTUMAYO", "PUERTO LEGUIZAMO"),
            ("PUTUMAYO", "SAN MIGUEL (LA DORADA)"),
            ("PUTUMAYO", "VALLE DEL GUAMUEZ (LA HORMIGA)"),
            ("PUTUMAYO", "VILLAGARZON"),
        ]
    },
    "CIRCUNSCRIPCION 12": {
        "departamento_principal": "CESAR",
        "municipios": [
            ("CESAR", "AGUSTIN CODAZZI"),
            ("CESAR", "BECERRIL"),
            ("CESAR", "LA JAGUA DE IBIRICO"),
            ("CESAR", "LA PAZ"),
            ("CESAR", "PUEBLO BELLO"),
            ("CESAR", "VALLEDUPAR"),
            ("LA GUAJIRA", "DIBULLA"),
            ("LA GUAJIRA", "FONSECA"),
            ("LA GUAJIRA", "SAN JUAN DEL CESAR"),
            ("MAGDALENA", "ARACATACA"),
            ("MAGDALENA", "CIENAGA"),
            ("MAGDALENA", "FUNDACION"),
            ("MAGDALENA", "SANTA MARTA"),
        ]
    },
    "CIRCUNSCRIPCION 13": {
        "departamento_principal": "BOLIVAR",
        "municipios": [
            ("BOLIVAR", "ARENAL"),
            ("BOLIVAR", "CANTAGALLO"),
            ("BOLIVAR", "MORALES"),
            ("BOLIVAR", "SAN PABLO"),
            ("BOLIVAR", "SANTA ROSA DEL SUR"),
            ("BOLIVAR", "SIMITI"),
            ("ANTIOQUIA", "YONDO-CASABE"),
        ]
    },
    "CIRCUNSCRIPCION 14": {
        "departamento_principal": "CORDOBA",
        "municipios": [
            ("CORDOBA", "PUERTO LIBERTADOR"),
            ("CORDOBA", "SAN JOSE DE URE"),
            ("CORDOBA", "VALENCIA"),
            ("CORDOBA", "TIERRALTA"),
            ("CORDOBA", "MONTELIBANO"),
        ]
    },
    "CIRCUNSCRIPCION 15": {
        "departamento_principal": "TOLIMA",
        "municipios": [
            ("TOLIMA", "ATACO"),
            ("TOLIMA", "CHAPARRAL"),
            ("TOLIMA", "PLANADAS"),
            ("TOLIMA", "RIOBLANCO"),
        ]
    },
    "CIRCUNSCRIPCION 16": {
        "departamento_principal": "ANTIOQUIA",
        "municipios": [
            ("ANTIOQUIA", "CAREPA"),
            ("ANTIOQUIA", "CHIGORODO"),
            ("ANTIOQUIA", "DABEIBA"),
            ("ANTIOQUIA", "MUTATA"),
            ("ANTIOQUIA", "NECOCLI"),
            ("ANTIOQUIA", "SAN PEDRO DE URABA"),
            ("ANTIOQUIA", "APARTADO"),
            ("ANTIOQUIA", "TURBO"),
        ]
    },
}


def buscar_archivo_divipole():
    """Busca archivos Excel de DIVIPOLE en la carpeta del proyecto"""
    archivos = list(PROJECT_DIR.glob("*ivipole*.xlsx")) + list(PROJECT_DIR.glob("*IVIPOLE*.xlsx"))
    if not archivos:
        print("❌ No se encontró ningún archivo DIVIPOLE (.xlsx) en la carpeta del proyecto")
        sys.exit(1)

    # Ordenar por fecha de modificación (más reciente primero)
    archivos.sort(key=lambda x: x.stat().st_mtime, reverse=True)
    return archivos[0]


def leer_excel(archivo_path):
    """Lee el archivo Excel y retorna un DataFrame limpio"""
    print(f"📖 Leyendo archivo: {archivo_path.name}")

    # Leer saltando las primeras 7 filas (encabezados del formato)
    df = pd.read_excel(archivo_path, skiprows=7)

    # Renombrar columnas esperadas
    columnas_esperadas = ['dd', 'mm', 'zz', 'pp', 'cod_unico', 'departamento', 'municipio', 'puesto']
    df.columns = columnas_esperadas + list(df.columns[8:])

    # Limpiar datos
    df = df.dropna(subset=['departamento', 'municipio'])

    # Convertir códigos a string con formato correcto
    df['dd'] = df['dd'].apply(lambda x: str(int(x)).zfill(2) if pd.notna(x) else '00')
    df['mm'] = df['mm'].apply(lambda x: str(int(x)).zfill(3) if pd.notna(x) else '000')
    df['zz'] = df['zz'].apply(lambda x: str(int(x)).zfill(2) if pd.notna(x) else '00')

    # Limpiar nombres
    df['departamento'] = df['departamento'].str.strip().str.upper()
    df['municipio'] = df['municipio'].str.strip().str.upper()

    print(f"   ✓ {len(df)} registros leídos")
    print(f"   ✓ {df['departamento'].nunique()} departamentos")
    print(f"   ✓ {df['municipio'].nunique()} municipios")

    return df


def generar_estructura(df):
    """Genera la estructura jerárquica de DIVIPOLE"""
    print("🔧 Generando estructura jerárquica...")

    divipole = {}

    for _, row in df.iterrows():
        dep_nombre = row['departamento']
        dep_codigo = row['dd']
        mun_nombre = row['municipio']
        mun_codigo = row['mm']
        zona_codigo = row['zz']

        # Crear departamento si no existe
        if dep_nombre not in divipole:
            divipole[dep_nombre] = {
                'codigo': dep_codigo,
                'municipios': {}
            }

        # Crear municipio si no existe
        if mun_nombre not in divipole[dep_nombre]['municipios']:
            divipole[dep_nombre]['municipios'][mun_nombre] = {
                'codigo': mun_codigo,
                'zonas': []
            }

        # Agregar zona si no existe
        zona_obj = {'codigo': zona_codigo, 'nombre': f'Zona {zona_codigo}'}
        zonas_existentes = [z['codigo'] for z in divipole[dep_nombre]['municipios'][mun_nombre]['zonas']]
        if zona_codigo not in zonas_existentes:
            divipole[dep_nombre]['municipios'][mun_nombre]['zonas'].append(zona_obj)

    # Ordenar zonas
    for dep in divipole.values():
        for mun in dep['municipios'].values():
            mun['zonas'].sort(key=lambda x: x['codigo'])

    return divipole


def generar_citrep(divipole):
    """Genera la estructura CITREP cruzando con los datos DIVIPOLE.
    Agrupa municipios por departamento dentro de cada circunscripción."""
    print("🔧 Generando datos CITREP...")

    citrep = {}
    errores = []

    for nombre_circ, definicion in CITREP_DEFINICIONES.items():
        departamentos_citrep = {}

        for dep_nombre, mun_nombre in definicion["municipios"]:
            # Buscar municipio en el DIVIPOLE
            if dep_nombre not in divipole:
                errores.append(f"   ⚠ Departamento '{dep_nombre}' no encontrado en DIVIPOLE")
                continue

            if mun_nombre not in divipole[dep_nombre]["municipios"]:
                errores.append(f"   ⚠ Municipio '{mun_nombre}' no encontrado en '{dep_nombre}'")
                continue

            # Crear departamento si no existe en esta circunscripción
            if dep_nombre not in departamentos_citrep:
                departamentos_citrep[dep_nombre] = {}

            # Copiar zonas del DIVIPOLE
            zonas = divipole[dep_nombre]["municipios"][mun_nombre]["zonas"]
            departamentos_citrep[dep_nombre][mun_nombre] = {"zonas": zonas}

        citrep[nombre_circ] = {
            "departamentos": departamentos_citrep
        }

    # Reportar errores
    if errores:
        print("   ⚠ ERRORES encontrados:")
        for error in errores:
            print(error)
    else:
        total_municipios = sum(len(d["municipios"]) for d in CITREP_DEFINICIONES.values())
        print(f"   ✓ 16 circunscripciones con {total_municipios} municipios")

    return citrep


def generar_typescript(divipole, citrep):
    """Genera el contenido del archivo TypeScript"""
    print("📝 Generando archivo TypeScript...")

    ts_content = '''// ============================================
// DATOS DIVIPOLE - Generado automáticamente
// ============================================
// Generado con: python3 scripts/generar_divipole.py
// NO EDITAR MANUALMENTE - Regenerar con el script
// ============================================

// Tipos
export interface Zona {
  codigo: string;
  nombre: string;
}

export interface Municipio {
  codigo: string;
  zonas: Zona[];
}

export interface Departamento {
  codigo: string;
  municipios: Record<string, Municipio>;
}

export type DivipoleData = Record<string, Departamento>;

// Datos jerárquicos completos
export const divipoleData: DivipoleData = '''

    # Convertir a JSON con formato
    json_data = json.dumps(divipole, ensure_ascii=False, indent=2)
    ts_content += json_data + ";\n\n"

    # Agregar funciones de utilidad
    ts_content += '''
// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

export function getDepartamentos(): string[] {
  return Object.keys(divipoleData).sort();
}

export function getMunicipiosByDepartamento(departamento: string): string[] {
  if (!divipoleData[departamento]) return [];
  return Object.keys(divipoleData[departamento].municipios).sort();
}

export function getZonasByMunicipio(departamento: string, municipio: string): Zona[] {
  if (!divipoleData[departamento]) return [];
  if (!divipoleData[departamento].municipios[municipio]) return [];
  return divipoleData[departamento].municipios[municipio].zonas;
}

export function getCodigoDepartamento(departamento: string): string {
  if (!divipoleData[departamento]) return '';
  return divipoleData[departamento].codigo;
}

export function getCodigoMunicipio(departamento: string, municipio: string): string {
  if (!divipoleData[departamento]) return '';
  if (!divipoleData[departamento].municipios[municipio]) return '';
  return divipoleData[departamento].municipios[municipio].codigo;
}

export const departamentos: string[] = getDepartamentos();

// ============================================
// DATOS CITREP (Circunscripciones Transitorias Especiales de Paz)
// Acto Legislativo 02 de 2021 - 16 Circunscripciones
// Estructura: Circunscripción → Departamento → Municipio → Zonas
// ============================================

export interface CircunscripcionCITREP {
  departamentos: Record<string, Record<string, { zonas: Zona[] }>>;
}

export const citrepData: Record<string, CircunscripcionCITREP> = '''

    # Agregar datos CITREP
    citrep_json = json.dumps(citrep, ensure_ascii=False, indent=2)
    ts_content += citrep_json + ";\n"

    # Agregar funciones CITREP
    ts_content += '''
export function getCircunscripcionesCITREP(): string[] {
  return Object.keys(citrepData).sort();
}

export function getDepartamentosByCITREP(circunscripcion: string): string[] {
  if (!citrepData[circunscripcion]) return [];
  return Object.keys(citrepData[circunscripcion].departamentos).sort();
}

export function getMunicipiosByCITREP(circunscripcion: string, departamento: string): string[] {
  if (!citrepData[circunscripcion]) return [];
  if (!citrepData[circunscripcion].departamentos[departamento]) return [];
  return Object.keys(citrepData[circunscripcion].departamentos[departamento]).sort();
}

export function getZonasCITREP(circunscripcion: string, departamento: string, municipio: string): Zona[] {
  if (!citrepData[circunscripcion]) return [];
  if (!citrepData[circunscripcion].departamentos[departamento]) return [];
  if (!citrepData[circunscripcion].departamentos[departamento][municipio]) return [];
  return citrepData[circunscripcion].departamentos[departamento][municipio].zonas;
}
'''

    return ts_content


def main():
    print("=" * 50)
    print("GENERADOR DE DIVIPOLE")
    print("=" * 50)

    # Determinar archivo a usar
    if len(sys.argv) > 1:
        archivo = Path(sys.argv[1])
        if not archivo.exists():
            archivo = PROJECT_DIR / sys.argv[1]
    else:
        archivo = buscar_archivo_divipole()

    if not archivo.exists():
        print(f"❌ Archivo no encontrado: {archivo}")
        sys.exit(1)

    # Procesar
    df = leer_excel(archivo)
    divipole = generar_estructura(df)
    citrep = generar_citrep(divipole)
    ts_content = generar_typescript(divipole, citrep)

    # Guardar
    print(f"💾 Guardando en: {OUTPUT_FILE}")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print("=" * 50)
    print("✅ ¡DIVIPOLE generado exitosamente!")
    print(f"   Archivo: {OUTPUT_FILE.name}")
    print(f"   Departamentos: {len(divipole)}")
    print(f"   Circunscripciones CITREP: {len(citrep)}")
    print("=" * 50)


if __name__ == "__main__":
    main()