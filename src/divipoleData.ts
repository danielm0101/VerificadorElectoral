// ============================================
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
export const divipoleData: DivipoleData = {
  "ANTIOQUIA": {
    "codigo": "01",
    "municipios": {
      "MEDELLIN": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "21",
            "nombre": "Zona 21"
          },
          {
            "codigo": "22",
            "nombre": "Zona 22"
          },
          {
            "codigo": "23",
            "nombre": "Zona 23"
          },
          {
            "codigo": "24",
            "nombre": "Zona 24"
          },
          {
            "codigo": "25",
            "nombre": "Zona 25"
          },
          {
            "codigo": "26",
            "nombre": "Zona 26"
          },
          {
            "codigo": "27",
            "nombre": "Zona 27"
          },
          {
            "codigo": "28",
            "nombre": "Zona 28"
          },
          {
            "codigo": "29",
            "nombre": "Zona 29"
          },
          {
            "codigo": "30",
            "nombre": "Zona 30"
          },
          {
            "codigo": "31",
            "nombre": "Zona 31"
          },
          {
            "codigo": "32",
            "nombre": "Zona 32"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ABEJORRAL": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ABRIAQUI": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALEJANDRIA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "AMAGA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AMALFI": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANDES": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANGELOPOLIS": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANGOSTURA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANORI": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANTIOQUIA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANZA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "APARTADO": {
        "codigo": "035",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARBOLETES": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARGELIA": {
        "codigo": "039",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARMENIA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARBOSA": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELMIRA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELLO": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BETANIA": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BETULIA": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOLIVAR": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BURITICA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BRICEÑO": {
        "codigo": "062",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CACERES": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAICEDO": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALDAS": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "CAMPAMENTO": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAÑASGORDAS": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARACOLI": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARAMANTA": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAREPA": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARMEN DE VIBORAL": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAROLINA": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CAUCASIA": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CISNEROS": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "COCORNA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONCEPCION": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CONCORDIA": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COPACABANA": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIGORODO": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DABEIBA": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DON MATIAS": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EBEJICO": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL BAGRE": {
        "codigo": "117",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ENTRERRIOS": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ENVIGADO": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FREDONIA": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FRONTINO": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GIRALDO": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GIRARDOTA": {
        "codigo": "133",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GOMEZ PLATA": {
        "codigo": "136",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GRANADA": {
        "codigo": "139",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUADALUPE": {
        "codigo": "140",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUARNE": {
        "codigo": "142",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUATAPE": {
        "codigo": "145",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "HELICONIA": {
        "codigo": "148",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HISPANIA": {
        "codigo": "150",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ITAGUI": {
        "codigo": "151",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ITUANGO": {
        "codigo": "154",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JARDIN": {
        "codigo": "157",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JERICO": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CEJA": {
        "codigo": "163",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA ESTRELLA": {
        "codigo": "166",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "PUERTO NARE-LA MAGDALENA": {
        "codigo": "168",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA UNION": {
        "codigo": "169",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PINTADA": {
        "codigo": "170",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LIBORINA": {
        "codigo": "172",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MACEO": {
        "codigo": "175",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARINILLA": {
        "codigo": "178",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONTEBELLO": {
        "codigo": "181",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MURINDO": {
        "codigo": "184",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MUTATA": {
        "codigo": "187",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NARIÑO": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NECHI": {
        "codigo": "191",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NECOCLI": {
        "codigo": "192",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OLAYA": {
        "codigo": "193",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PEÑOL": {
        "codigo": "196",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PEQUE": {
        "codigo": "199",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUEBLORRICO": {
        "codigo": "202",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PUERTO BERRIO": {
        "codigo": "205",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO TRIUNFO": {
        "codigo": "206",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "REMEDIOS": {
        "codigo": "208",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RETIRO": {
        "codigo": "211",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIONEGRO": {
        "codigo": "214",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANALARGA": {
        "codigo": "217",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANETA": {
        "codigo": "218",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALGAR": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ANDRES": {
        "codigo": "223",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CARLOS": {
        "codigo": "226",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN FRANCISCO": {
        "codigo": "227",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JERONIMO": {
        "codigo": "229",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOSE DE LA MONTAÑA": {
        "codigo": "230",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAN JUAN DE URABA": {
        "codigo": "231",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN LUIS": {
        "codigo": "232",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PEDRO": {
        "codigo": "235",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PEDRO DE URABA": {
        "codigo": "237",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN RAFAEL": {
        "codigo": "238",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ROQUE": {
        "codigo": "241",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN VICENTE": {
        "codigo": "244",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA BARBARA": {
        "codigo": "247",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSA DE OSOS": {
        "codigo": "250",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTO DOMINGO": {
        "codigo": "253",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTUARIO": {
        "codigo": "256",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SEGOVIA": {
        "codigo": "259",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SONSON": {
        "codigo": "262",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOPETRAN": {
        "codigo": "265",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAMESIS": {
        "codigo": "268",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TARAZA": {
        "codigo": "270",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TARSO": {
        "codigo": "271",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TITIRIBI": {
        "codigo": "274",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOLEDO": {
        "codigo": "277",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TURBO": {
        "codigo": "280",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "URAMITA": {
        "codigo": "282",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "URRAO": {
        "codigo": "283",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALDIVIA": {
        "codigo": "286",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALPARAISO": {
        "codigo": "289",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VEGACHI": {
        "codigo": "290",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VIGIA DEL FUERTE": {
        "codigo": "291",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VENECIA": {
        "codigo": "292",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YALI": {
        "codigo": "293",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YARUMAL": {
        "codigo": "295",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YOLOMBO": {
        "codigo": "298",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YONDO-CASABE": {
        "codigo": "300",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZARAGOZA": {
        "codigo": "301",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "ATLANTICO": {
    "codigo": "03",
    "municipios": {
      "BARRANQUILLA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "21",
            "nombre": "Zona 21"
          },
          {
            "codigo": "22",
            "nombre": "Zona 22"
          },
          {
            "codigo": "23",
            "nombre": "Zona 23"
          },
          {
            "codigo": "24",
            "nombre": "Zona 24"
          },
          {
            "codigo": "25",
            "nombre": "Zona 25"
          },
          {
            "codigo": "26",
            "nombre": "Zona 26"
          },
          {
            "codigo": "27",
            "nombre": "Zona 27"
          },
          {
            "codigo": "28",
            "nombre": "Zona 28"
          },
          {
            "codigo": "29",
            "nombre": "Zona 29"
          },
          {
            "codigo": "30",
            "nombre": "Zona 30"
          },
          {
            "codigo": "31",
            "nombre": "Zona 31"
          },
          {
            "codigo": "32",
            "nombre": "Zona 32"
          },
          {
            "codigo": "33",
            "nombre": "Zona 33"
          },
          {
            "codigo": "34",
            "nombre": "Zona 34"
          },
          {
            "codigo": "35",
            "nombre": "Zona 35"
          },
          {
            "codigo": "36",
            "nombre": "Zona 36"
          },
          {
            "codigo": "37",
            "nombre": "Zona 37"
          },
          {
            "codigo": "38",
            "nombre": "Zona 38"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARANOA": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAMPO DE LA CRUZ": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CANDELARIA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GALAPA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JUAN DE ACOSTA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LURUACO": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MALAMBO": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MANATI": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PALMAR DE VARELA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIOJO": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "POLONUEVO": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PONEDERA": {
        "codigo": "035",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO COLOMBIA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "REPELON": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANAGRANDE": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "SABANALARGA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA LUCIA": {
        "codigo": "047",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTO TOMAS": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOLEDAD": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          }
        ]
      },
      "SUAN": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TUBARA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "USIACURI": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      }
    }
  },
  "BOLIVAR": {
    "codigo": "05",
    "municipios": {
      "CARTAGENA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "21",
            "nombre": "Zona 21"
          },
          {
            "codigo": "22",
            "nombre": "Zona 22"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ACHI": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARENAL": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALTOS DEL ROSARIO": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARJONA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARROYO HONDO": {
        "codigo": "009",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARRANCO DE LOBA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALAMAR": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CANTAGALLO": {
        "codigo": "014",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CICUCO": {
        "codigo": "015",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CORDOBA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CLEMENCIA": {
        "codigo": "018",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CARMEN DE BOLIVAR": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL GUAMO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HATILLO DE LOBA": {
        "codigo": "026",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PEÑON": {
        "codigo": "027",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAGANGUE": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAHATES": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARGARITA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARIA LA BAJA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONTECRISTO": {
        "codigo": "041",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOMPOS": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MORALES": {
        "codigo": "044",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NOROSI": {
        "codigo": "050",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PINILLOS": {
        "codigo": "059",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "REGIDOR": {
        "codigo": "063",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIOVIEJO": {
        "codigo": "065",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ESTANISLAO": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CRISTOBAL": {
        "codigo": "072",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN FERNANDO": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JACINTO": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JACINTO DEL CAUCA": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUAN NEPOMUCENO": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MARTIN DE LOBA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PABLO": {
        "codigo": "084",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA CATALINA": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SANTA ROSA DEL SUR": {
        "codigo": "095",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SIMITI": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOPLAVIENTO": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TALAIGUA NUEVO": {
        "codigo": "110",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIQUISIO (PTO. RICO)": {
        "codigo": "113",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TURBACO": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TURBANA": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLANUEVA": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZAMBRANO": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "BOYACA": {
    "codigo": "07",
    "municipios": {
      "TUNJA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALMEIDA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "AQUITANIA (PUEBLOVIEJO)": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARCABUCO": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BELEN": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BERBEO": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BETEITIVA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOAVITA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOYACA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BRICEÑO": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BUENAVISTA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUSBANZA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CALDAS": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAMPOHERMOSO": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CERINZA": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CIENEGA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "COMBITA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COPER": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CORRALES": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "COVARACHIA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUBARA": {
        "codigo": "059",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUCAITA": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CUITIVA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHINAVITA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIQUINQUIRA": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIQUIZA": {
        "codigo": "068",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHISCAS": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHITA": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHITARAQUE": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIVATA": {
        "codigo": "077",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CHIVOR": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DUITAMA": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL COCUY": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ESPINO": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FIRAVITOBA": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLORESTA": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GACHANTIVA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GAMEZA": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GARAGOA": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACAMAYAS": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GUATEQUE": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "GUAYATA": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GUICAN": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "IZA": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "JENESANO": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "JERICO": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LABRANZAGRANDE": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CAPILLA": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LA UVITA": {
        "codigo": "136",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA VICTORIA": {
        "codigo": "137",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLA DE LEIVA": {
        "codigo": "139",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MACANAL": {
        "codigo": "142",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARIPI": {
        "codigo": "148",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MIRAFLORES": {
        "codigo": "151",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONGUA": {
        "codigo": "154",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONGUI": {
        "codigo": "157",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MONIQUIRA": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOTAVITA": {
        "codigo": "161",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MUZO": {
        "codigo": "163",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NOBSA": {
        "codigo": "166",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NUEVO COLON": {
        "codigo": "169",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "OICATA": {
        "codigo": "173",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "OTANCHE": {
        "codigo": "176",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PACHAVITA": {
        "codigo": "178",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PAEZ": {
        "codigo": "179",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAIPA": {
        "codigo": "181",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAJARITO": {
        "codigo": "184",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PANQUEBA": {
        "codigo": "187",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PAUNA": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAYA": {
        "codigo": "193",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAZ DE RIO": {
        "codigo": "199",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PESCA": {
        "codigo": "202",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PISBA": {
        "codigo": "205",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PUERTO BOYACA": {
        "codigo": "214",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUIPAMA": {
        "codigo": "215",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RAMIRIQUI": {
        "codigo": "217",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RAQUIRA": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RONDON": {
        "codigo": "223",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABOYA": {
        "codigo": "226",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SACHICA": {
        "codigo": "232",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAMACA": {
        "codigo": "235",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN EDUARDO": {
        "codigo": "237",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAN JOSE DE PARE": {
        "codigo": "238",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN LUIS DE GACENO": {
        "codigo": "241",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MATEO": {
        "codigo": "247",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MIGUEL DE SEMA": {
        "codigo": "248",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAN PABLO DE BORBUR": {
        "codigo": "249",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTANA": {
        "codigo": "250",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SANTA MARIA": {
        "codigo": "251",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSA DE VITERBO": {
        "codigo": "253",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA SOFIA": {
        "codigo": "256",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SATIVANORTE": {
        "codigo": "259",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SATIVASUR": {
        "codigo": "262",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SIACHOQUE": {
        "codigo": "265",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SOATA": {
        "codigo": "268",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SOCOTA": {
        "codigo": "271",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOCHA": {
        "codigo": "274",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOGAMOSO": {
        "codigo": "277",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOMONDOCO": {
        "codigo": "280",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SORA": {
        "codigo": "281",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SORACA": {
        "codigo": "282",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SOTAQUIRA": {
        "codigo": "283",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUSACON": {
        "codigo": "286",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUTAMARCHAN": {
        "codigo": "289",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SUTATENZA": {
        "codigo": "292",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TASCO": {
        "codigo": "298",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TENZA": {
        "codigo": "301",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TIBANA": {
        "codigo": "304",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIBASOSA": {
        "codigo": "307",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TINJACA": {
        "codigo": "310",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TIPACOQUE": {
        "codigo": "311",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOCA": {
        "codigo": "313",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TOGUI": {
        "codigo": "316",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOPAGA": {
        "codigo": "319",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOTA": {
        "codigo": "322",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TUNUNGUA": {
        "codigo": "324",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TURMEQUE": {
        "codigo": "325",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TUTA": {
        "codigo": "328",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TUTAZA": {
        "codigo": "331",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UMBITA": {
        "codigo": "334",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "VENTAQUEMADA": {
        "codigo": "337",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VIRACACHA": {
        "codigo": "340",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ZETAQUIRA": {
        "codigo": "346",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      }
    }
  },
  "CALDAS": {
    "codigo": "09",
    "municipios": {
      "MANIZALES": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGUADAS": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANSERMA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARANZAZU": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELALCAZAR": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHINCHINA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FILADELFIA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA DORADA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA MERCED": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MANZANARES": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARMATO": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARQUETALIA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARULANDA": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NEIRA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NORCASIA": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PACORA": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALESTINA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PENSILVANIA": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIOSUCIO": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RISARALDA": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALAMINA": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAMANA": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOSE": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUPIA": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VICTORIA": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLAMARIA": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VITERBO": {
        "codigo": "133",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CAUCA": {
    "codigo": "11",
    "municipios": {
      "POPAYAN": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALMAGUER": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARGELIA": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BALBOA": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOLIVAR": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENOS AIRES": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAJIBIO": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALDONO": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALOTO": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CORINTO": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL TAMBO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLORENCIA": {
        "codigo": "027",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAPI": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACHENE": {
        "codigo": "029",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "INZA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JAMBALO": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA SIERRA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA VEGA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOPEZ (MICAY)": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MERCADERES": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MIRANDA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MORALES": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PADILLA": {
        "codigo": "053",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAEZ (BELALCAZAR)": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PATIA (EL BORDO)": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIAMONTE": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIENDAMO": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO TEJADA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PURACE (COCONUCO)": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ROSAS": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN SEBASTIAN": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTANDER DE QUILICHAO": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSA": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SILVIA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOTARA (PAISPAMBA)": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUCRE": {
        "codigo": "086",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUAREZ": {
        "codigo": "087",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIMBIO": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIMBIQUI": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TORIBIO": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOTORO": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLA RICA": {
        "codigo": "098",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CESAR": {
    "codigo": "12",
    "municipios": {
      "VALLEDUPAR": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGUACHICA": {
        "codigo": "075",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGUSTIN CODAZZI": {
        "codigo": "150",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ASTREA": {
        "codigo": "170",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BECERRIL": {
        "codigo": "180",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOSCONIA": {
        "codigo": "200",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CURUMANI": {
        "codigo": "225",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIMICHAGUA": {
        "codigo": "300",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIRIGUANA": {
        "codigo": "375",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL COPEY": {
        "codigo": "410",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PASO": {
        "codigo": "415",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GAMARRA": {
        "codigo": "450",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GONZALEZ": {
        "codigo": "525",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA GLORIA": {
        "codigo": "600",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA JAGUA DE IBIRICO": {
        "codigo": "608",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MANAURE BALCON DEL CESAR (MANA": {
        "codigo": "625",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAILITAS": {
        "codigo": "650",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PELAYA": {
        "codigo": "700",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUEBLO BELLO": {
        "codigo": "720",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIO DE ORO": {
        "codigo": "750",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ALBERTO": {
        "codigo": "800",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PAZ": {
        "codigo": "825",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN DIEGO": {
        "codigo": "850",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MARTIN": {
        "codigo": "875",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAMALAMEQUE": {
        "codigo": "900",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CORDOBA": {
    "codigo": "13",
    "municipios": {
      "MONTERIA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AYAPEL": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENAVISTA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CANALETE": {
        "codigo": "009",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CERETE": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CIENAGA DE ORO": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COTORRA (BONGO)": {
        "codigo": "014",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIMA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHINU": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA APARTADA (FRONTERA)": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LORICA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOS CORDOBAS": {
        "codigo": "023",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOMIL": {
        "codigo": "024",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONTELIBANO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOÑITOS": {
        "codigo": "027",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PLANETA RICA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUEBLO NUEVO": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO LIBERTADOR": {
        "codigo": "032",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO ESCONDIDO": {
        "codigo": "033",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PURISIMA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAHAGUN": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ANDRES DE SOTAVENTO": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ANTERO": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN BERNARDO DEL VIENTO": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CARLOS": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOSE DE URE": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PELAYO": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIERRALTA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TUCHIN": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALENCIA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CUNDINAMARCA": {
    "codigo": "15",
    "municipios": {
      "AGUA DE DIOS": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ALBAN": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANAPOIMA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANOLAIMA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARBELAEZ": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BELTRAN": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BITUIMA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOJACA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CABRERA": {
        "codigo": "029",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CACHIPAY": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAJICA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "CAPARRAPI": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAQUEZA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARMEN DE CARUPA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COGUA": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COTA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "CUCUNUBA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHAGUANI": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CHIA": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          }
        ]
      },
      "CHIPAQUE": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CHOACHI": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHOCONTA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "EL COLEGIO": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PEÑON": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ROSAL": {
        "codigo": "072",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "FACATATIVA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FOMEQUE": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FOSCA": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FUNZA": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "FUQUENE": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FUSAGASUGA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GACHALA": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GACHANCIPA": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GACHETA": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GAMA": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GIRARDOT": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACHETA": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUADUAS": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUASCA": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUATAQUI": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GUATAVITA": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GUAYABAL DE SIQUIMA": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAYABETAL": {
        "codigo": "128",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUTIERREZ": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GRANADA": {
        "codigo": "132",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "JERUSALEN": {
        "codigo": "133",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "JUNIN": {
        "codigo": "136",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CALERA": {
        "codigo": "139",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA MESA": {
        "codigo": "142",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PALMA": {
        "codigo": "145",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PEÑA": {
        "codigo": "148",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA VEGA": {
        "codigo": "151",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LENGUAZAQUE": {
        "codigo": "154",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MACHETA": {
        "codigo": "157",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MADRID": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MANTA": {
        "codigo": "163",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MEDINA": {
        "codigo": "166",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOSQUERA": {
        "codigo": "169",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "NARIÑO": {
        "codigo": "172",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "NEMOCON": {
        "codigo": "175",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NILO": {
        "codigo": "178",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NIMAIMA": {
        "codigo": "181",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NOCAIMA": {
        "codigo": "184",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PACHO": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAIME": {
        "codigo": "193",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PANDI": {
        "codigo": "196",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PARATEBUENO (LA NAGUAYA)": {
        "codigo": "198",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PASCA": {
        "codigo": "199",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PUERTO SALGAR": {
        "codigo": "202",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PULI": {
        "codigo": "205",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUEBRADANEGRA": {
        "codigo": "208",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUETAME": {
        "codigo": "211",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUIPILE": {
        "codigo": "214",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "APULO": {
        "codigo": "217",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "RICAURTE": {
        "codigo": "218",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ANTONIO DEL TEQUENDAMA": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN BERNARDO": {
        "codigo": "223",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CAYETANO": {
        "codigo": "226",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN FRANCISCO": {
        "codigo": "229",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUAN DE RIOSECO": {
        "codigo": "232",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SASAIMA": {
        "codigo": "235",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SESQUILE": {
        "codigo": "238",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SIBATE": {
        "codigo": "239",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "SILVANIA": {
        "codigo": "241",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SIMIJACA": {
        "codigo": "244",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOACHA": {
        "codigo": "247",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOPO": {
        "codigo": "250",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUBACHOQUE": {
        "codigo": "256",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUESCA": {
        "codigo": "259",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUPATA": {
        "codigo": "262",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SUSA": {
        "codigo": "265",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SUTATAUSA": {
        "codigo": "268",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TABIO": {
        "codigo": "271",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAUSA": {
        "codigo": "274",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TENA": {
        "codigo": "277",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TENJO": {
        "codigo": "280",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIBACUY": {
        "codigo": "283",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIBIRITA": {
        "codigo": "286",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TOCAIMA": {
        "codigo": "289",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOCANCIPA": {
        "codigo": "292",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOPAIPI": {
        "codigo": "295",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UBALA": {
        "codigo": "298",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UBAQUE": {
        "codigo": "301",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UBATE": {
        "codigo": "304",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UNE": {
        "codigo": "307",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UTICA": {
        "codigo": "316",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "VENECIA": {
        "codigo": "318",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VERGARA": {
        "codigo": "319",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VIANI": {
        "codigo": "322",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "VILLAGOMEZ": {
        "codigo": "323",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLAPINZON": {
        "codigo": "325",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "VILLETA": {
        "codigo": "328",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VIOTA": {
        "codigo": "331",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YACOPI": {
        "codigo": "334",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZIPACON": {
        "codigo": "337",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZIPAQUIRA": {
        "codigo": "340",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "BOGOTA D.C.": {
    "codigo": "16",
    "municipios": {
      "BOGOTA. D.C.": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      }
    }
  },
  "CHOCO": {
    "codigo": "17",
    "municipios": {
      "QUIBDO": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ATRATO (YUTO)": {
        "codigo": "002",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ACANDI": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALTO BAUDO (PIE DE PATO)": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BAGADO": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BAHIA SOLANO (MUTIS)": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BAJO BAUDO (PIZARRO)": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOJAYA (BELLAVISTA)": {
        "codigo": "011",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MEDIO ATRATO (BETE)": {
        "codigo": "012",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONDOTO": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CERTEGUI": {
        "codigo": "014",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARMEN DEL DARIEN": {
        "codigo": "015",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CARMEN": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CANTON DEL SAN PABLO (MAN.": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ISTMINA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JURADO": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LLORO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MEDIO BAUDO (PUERTO MELUK)": {
        "codigo": "026",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MEDIO SAN JUAN": {
        "codigo": "027",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NOVITA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NUQUI": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIO IRO": {
        "codigo": "032",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIOSUCIO": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIO QUITO (PAIMADO)": {
        "codigo": "035",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOSE DEL PALMAR": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL LITORAL DEL SAN JUAN": {
        "codigo": "038",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SIPI": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TADO": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UNGUIA": {
        "codigo": "048",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "UNION PANAMERICANA (LAS ANIMAS": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NUEVO BELEN DE BAJIRA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "HUILA": {
    "codigo": "19",
    "municipios": {
      "NEIVA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ACEVEDO": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGRADO": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AIPE": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALGECIRAS": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALTAMIRA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BARAYA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAMPOALEGRE": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TESALIA (CARNICERIAS)": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COLOMBIA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ELIAS": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GARZON": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GIGANTE": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUADALUPE": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HOBO": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ISNOS": {
        "codigo": "044",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "IQUIRA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA ARGENTINA (PLATA VIEJA)": {
        "codigo": "047",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PLATA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NATAGA": {
        "codigo": "050",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OPORAPA": {
        "codigo": "051",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAICOL": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALERMO": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALESTINA": {
        "codigo": "056",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PITAL": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PITALITO": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIVERA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALADOBLANCO": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN AGUSTIN": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA MARIA": {
        "codigo": "074",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUAZA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TARQUI": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TELLO": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TERUEL": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIMANA": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLAVIEJA": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YAGUARA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "MAGDALENA": {
    "codigo": "21",
    "municipios": {
      "SANTA MARTA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALGARROBO": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARACATACA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARIGUANI (EL DIFICIL)": {
        "codigo": "012",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CERRO DE SAN ANTONIO": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIVOLO": {
        "codigo": "015",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CIENAGA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONCORDIA": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL BANCO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PIÑON": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL RETEN": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FUNDACION": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAMAL": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NUEVA GRANADA": {
        "codigo": "042",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PEDRAZA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIJIÑO DEL CARMEN": {
        "codigo": "048",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIVIJAY": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PLATO": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUEBLOVIEJO": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "REMOLINO": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANAS DE SAN ANGEL": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALAMINA": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN SEBASTIAN DE BUENAVISTA": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ZENON": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ANA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA BARBARA DE PINTO": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SITIONUEVO": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TENERIFE": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZAPAYAN": {
        "codigo": "090",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZONA BANANERA (SEVILLA)": {
        "codigo": "095",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "NARIÑO": {
    "codigo": "23",
    "municipios": {
      "PASTO": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALBAN (SAN JOSE)": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALDANA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANCUYA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARBOLEDA (BERRUECOS)": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARBACOAS": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELEN": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUESACO": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COLON (GENOVA)": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONSACA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONTADERO": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CORDOBA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUASPUD (CARLOSAMA)": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUMBAL": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHACHAGUI": {
        "codigo": "038",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUMBITARA": {
        "codigo": "039",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ROSARIO": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CHARCO": {
        "codigo": "041",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL TABLON": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PEÑOL": {
        "codigo": "044",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL TAMBO": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FRANCISCO PIZARRO (SALAHONDA)": {
        "codigo": "047",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FUNES": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACHUCAL": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAITARILLA": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUALMATAN": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ILES": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "IMUES": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "IPIALES": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CRUZ": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA FLORIDA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA LLANADA": {
        "codigo": "077",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA TOLA": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA UNION": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LEIVA": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LINARES": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOS ANDES (SOTOMAYOR)": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAGUI (PAYAN)": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MALLAMA (PIEDRANCHA)": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOSQUERA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OLAYA HERRERA": {
        "codigo": "095",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NARIÑO": {
        "codigo": "096",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OSPINA": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "POLICARPA": {
        "codigo": "098",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "POTOSI": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PROVIDENCIA": {
        "codigo": "101",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERRES": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUPIALES": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RICAURTE": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ROBERTO PAYAN (SAN JOSE)": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAMANIEGO": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANDONA": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN BERNARDO": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN LORENZO": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PEDRO DE CARTAGO": {
        "codigo": "123",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PABLO": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA BARBARA (ISCUANDE)": {
        "codigo": "125",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTACRUZ (GUACHAVES)": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAPUYES": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAMINANGO": {
        "codigo": "133",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TANGUA": {
        "codigo": "136",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TUMACO": {
        "codigo": "139",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TUQUERRES": {
        "codigo": "142",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YACUANQUER": {
        "codigo": "145",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "RISARALDA": {
    "codigo": "24",
    "municipios": {
      "PEREIRA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "APIA": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BALBOA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELEN DE UMBRIA": {
        "codigo": "021",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DOSQUEBRADAS": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUATICA": {
        "codigo": "029",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CELIA": {
        "codigo": "038",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA VIRGINIA": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARSELLA": {
        "codigo": "054",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MISTRATO": {
        "codigo": "062",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUEBLO RICO": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUINCHIA": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSA DE CABAL": {
        "codigo": "086",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTUARIO": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "NORTE DE SAN": {
    "codigo": "25",
    "municipios": {
      "CUCUTA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ABREGO": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARBOLEDAS": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOCHALEMA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUCARASICA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CACOTA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CACHIRA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONVENCION": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUCUTILLA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHINACOTA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHITAGA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DURANIA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL TARRA": {
        "codigo": "036",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CARMEN": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ZULIA": {
        "codigo": "038",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GRAMALOTE": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HACARI": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HERRAN": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LABATECA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA ESPERANZA": {
        "codigo": "051",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PLAYA": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOS PATIOS": {
        "codigo": "054",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOURDES": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MUTISCUA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OCAÑA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAMPLONA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAMPLONITA": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO SANTANDER": {
        "codigo": "069",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "RAGONVALIA": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALAZAR": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CALIXTO": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN CAYETANO": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTIAGO": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SARDINATA": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SILOS": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TEORAMA": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TIBU": {
        "codigo": "093",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOLEDO": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLA CARO": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLA DEL ROSARIO": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "QUINDIO": {
    "codigo": "26",
    "municipios": {
      "ARMENIA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENAVISTA": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALARCA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CIRCASIA": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CORDOBA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "FILANDIA": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GENOVA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA TEBAIDA": {
        "codigo": "050",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONTENEGRO": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIJAO": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "QUIMBAYA": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALENTO": {
        "codigo": "090",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "SANTANDER": {
    "codigo": "27",
    "municipios": {
      "BUCARAMANGA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGUADA": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ALBANIA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARATOCA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BARBOSA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARICHARA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "BARRANCABERMEJA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BETULIA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOLIVAR": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CABRERA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CALIFORNIA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CAPITANEJO": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CARCASI": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CEPITA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CERRITO": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CIMITARRA": {
        "codigo": "045",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONCEPCION": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONFINES": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CONTRATACION": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COROMORO": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CURITI": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHARALA": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHARTA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIMA": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHIPATA": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "EL CARMEN": {
        "codigo": "071",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL GUACAMAYO": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PLAYON": {
        "codigo": "074",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PEÑON": {
        "codigo": "075",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ENCINO": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ENCISO": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLORIAN": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLORIDABLANCA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GALAN": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GAMBITA": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GIRON": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACA": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUADALUPE": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAPOTA": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAVATA": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "GUEPSA": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "HATO": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JESUS MARIA": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JORDAN": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PAZ": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA BELLEZA": {
        "codigo": "119",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LANDAZURI": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LEBRIJA": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOS SANTOS": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MACARAVITA": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MALAGA": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MATANZA": {
        "codigo": "133",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOGOTES": {
        "codigo": "136",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MOLAGAVITA": {
        "codigo": "139",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OCAMONTE": {
        "codigo": "142",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "OIBA": {
        "codigo": "145",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ONZAGA": {
        "codigo": "148",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALMAR": {
        "codigo": "151",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALMAS DEL SOCORRO": {
        "codigo": "154",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PARAMO": {
        "codigo": "157",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PIEDECUESTA": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PINCHOTE": {
        "codigo": "163",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PUENTE NACIONAL": {
        "codigo": "166",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO PARRA": {
        "codigo": "167",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO WILCHES": {
        "codigo": "169",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIONEGRO": {
        "codigo": "172",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANA DE TORRES": {
        "codigo": "174",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "SAN ANDRES": {
        "codigo": "175",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN BENITO": {
        "codigo": "178",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN GIL": {
        "codigo": "181",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOAQUIN": {
        "codigo": "184",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAN JOSE DE MIRANDA": {
        "codigo": "187",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MIGUEL": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN VICENTE DE CHUCURI": {
        "codigo": "193",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA HELENA DEL OPON": {
        "codigo": "194",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA BARBARA": {
        "codigo": "195",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SIMACOTA": {
        "codigo": "196",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOCORRO": {
        "codigo": "199",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "SUAITA": {
        "codigo": "202",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUCRE": {
        "codigo": "205",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SURATA": {
        "codigo": "208",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TONA": {
        "codigo": "211",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALLE DE SAN JOSE": {
        "codigo": "217",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VETAS": {
        "codigo": "219",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "VELEZ": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLANUEVA": {
        "codigo": "221",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ZAPATOCA": {
        "codigo": "223",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "SUCRE": {
    "codigo": "28",
    "municipios": {
      "SINCELEJO": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENAVISTA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAIMITO": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COLOSO (RICAURTE)": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COROZAL": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COVEÑAS": {
        "codigo": "041",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ROBLE": {
        "codigo": "042",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHALAN": {
        "codigo": "045",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GALERAS (NUEVA GRANADA)": {
        "codigo": "048",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUARANDA": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA UNION": {
        "codigo": "050",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LOS PALMITOS": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAJAGUAL": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MORROA": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OVEJAS": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALMITO": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAMPUES": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN BENITO ABAD": {
        "codigo": "180",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUAN DE BETULIA (BETULIA)": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MARCOS": {
        "codigo": "200",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ONOFRE": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PEDRO": {
        "codigo": "240",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SINCE": {
        "codigo": "260",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUCRE": {
        "codigo": "280",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOLU": {
        "codigo": "300",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TOLUVIEJO": {
        "codigo": "320",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "TOLIMA": {
    "codigo": "29",
    "municipios": {
      "IBAGUE": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALPUJARRA": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALVARADO": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AMBALEMA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANZOATEGUI": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARMERO (GUAYABAL)": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ATACO": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAJAMARCA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARMEN DE APICALA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CASABIANCA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COELLO": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COYAIMA": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUNDAY": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHAPARRAL": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DOLORES": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ESPINAL": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FALAN": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLANDES": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FRESNO": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAMO": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HERVEO": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HONDA": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "ICONONZO": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LERIDA": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LIBANO": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MARIQUITA": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MELGAR": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MURILLO": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NATAGAIMA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ORTEGA": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALOCABILDO": {
        "codigo": "087",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PIEDRAS": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PLANADAS": {
        "codigo": "089",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PRADO": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PURIFICACION": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIOBLANCO": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RONCESVALLES": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ROVIRA": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SALDAÑA": {
        "codigo": "105",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN ANTONIO": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN LUIS": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ISABEL": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SUAREZ": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALLE DE SAN JUAN": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VENADILLO": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLAHERMOSA": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLARRICA": {
        "codigo": "127",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "VALLE": {
    "codigo": "31",
    "municipios": {
      "CALI": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "19",
            "nombre": "Zona 19"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "21",
            "nombre": "Zona 21"
          },
          {
            "codigo": "22",
            "nombre": "Zona 22"
          },
          {
            "codigo": "23",
            "nombre": "Zona 23"
          },
          {
            "codigo": "24",
            "nombre": "Zona 24"
          },
          {
            "codigo": "25",
            "nombre": "Zona 25"
          },
          {
            "codigo": "26",
            "nombre": "Zona 26"
          },
          {
            "codigo": "27",
            "nombre": "Zona 27"
          },
          {
            "codigo": "28",
            "nombre": "Zona 28"
          },
          {
            "codigo": "29",
            "nombre": "Zona 29"
          },
          {
            "codigo": "30",
            "nombre": "Zona 30"
          },
          {
            "codigo": "31",
            "nombre": "Zona 31"
          },
          {
            "codigo": "32",
            "nombre": "Zona 32"
          },
          {
            "codigo": "33",
            "nombre": "Zona 33"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALCALA": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANDALUCIA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ANSERMANUEVO": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARGELIA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BOLIVAR": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENAVENTURA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUGA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUGALAGRANDE": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CAICEDONIA": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CANDELARIA": {
        "codigo": "031",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARTAGO": {
        "codigo": "034",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DAGUA": {
        "codigo": "037",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALIMA (DARIEN)": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL AGUILA": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CAIRO": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CERRITO": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL DOVIO": {
        "codigo": "052",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FLORIDA": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GINEBRA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUACARI": {
        "codigo": "061",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "JAMUNDI": {
        "codigo": "064",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA CUMBRE": {
        "codigo": "067",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA UNION": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA VICTORIA": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OBANDO": {
        "codigo": "076",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PALMIRA": {
        "codigo": "079",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PRADERA": {
        "codigo": "082",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RESTREPO": {
        "codigo": "085",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RIOFRIO": {
        "codigo": "088",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ROLDANILLO": {
        "codigo": "091",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN PEDRO": {
        "codigo": "094",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SEVILLA": {
        "codigo": "097",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TORO": {
        "codigo": "100",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TRUJILLO": {
        "codigo": "103",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TULUA": {
        "codigo": "106",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ULLOA": {
        "codigo": "109",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VERSALLES": {
        "codigo": "112",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VIJES": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YOTOCO": {
        "codigo": "118",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YUMBO": {
        "codigo": "121",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ZARZAL": {
        "codigo": "124",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "ARAUCA": {
    "codigo": "40",
    "municipios": {
      "ARAUCA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAME": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ARAUQUITA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CRAVO NORTE": {
        "codigo": "015",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "FORTUL": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO RONDON": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SARAVENA": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CAQUETA": {
    "codigo": "44",
    "municipios": {
      "FLORENCIA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALBANIA": {
        "codigo": "002",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARTAGENA DEL CHAIRA": {
        "codigo": "003",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BELEN DE LOS ANDAQUIES": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL DONCELLO": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL PAUJIL": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA MONTAÑITA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO RICO": {
        "codigo": "009",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN VICENTE DEL CAGUAN": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CURILLO": {
        "codigo": "012",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MILAN": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MORELIA": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JOSE DEL FRAGUA": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOLANO": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SOLITA": {
        "codigo": "024",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALPARAISO": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CASANARE": {
    "codigo": "46",
    "municipios": {
      "YOPAL": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "AGUAZUL": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CHAMEZA": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "HATO COROZAL": {
        "codigo": "320",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA SALINA": {
        "codigo": "480",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MANI": {
        "codigo": "520",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MONTERREY": {
        "codigo": "540",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "NUNCHIA": {
        "codigo": "560",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "OROCUE": {
        "codigo": "640",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PAZ DE ARIPORO (MORENO)": {
        "codigo": "680",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PORE": {
        "codigo": "700",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RECETOR": {
        "codigo": "760",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SABANALARGA": {
        "codigo": "800",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SACAMA": {
        "codigo": "815",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN LUIS DE PALENQUE": {
        "codigo": "830",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAMARA": {
        "codigo": "840",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TAURAMENA": {
        "codigo": "850",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TRINIDAD": {
        "codigo": "865",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLANUEVA": {
        "codigo": "880",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "LA GUAJIRA": {
    "codigo": "48",
    "municipios": {
      "RIOHACHA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ALBANIA": {
        "codigo": "002",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARRANCAS": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DIBULLA": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL MOLINO": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "FONSECA": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "DISTRACCION": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "HATONUEVO": {
        "codigo": "009",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAICAO": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MANAURE": {
        "codigo": "011",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA JAGUA DEL PILAR": {
        "codigo": "012",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUAN DEL CESAR": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "URIBIA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "URUMITA": {
        "codigo": "018",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLANUEVA": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      }
    }
  },
  "GUAINIA": {
    "codigo": "50",
    "municipios": {
      "INIRIDA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARRANCOMINAS": {
        "codigo": "070",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CACAHUAL": {
        "codigo": "073",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LA GUADALUPE": {
        "codigo": "078",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MORICHAL (MORICHAL NUEVO)": {
        "codigo": "083",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PANA PANA (CAMPO ALEGRE)": {
        "codigo": "087",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO COLOMBIA": {
        "codigo": "090",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN FELIPE": {
        "codigo": "092",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      }
    }
  },
  "META": {
    "codigo": "52",
    "municipios": {
      "VILLAVICENCIO": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "06",
            "nombre": "Zona 06"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "08",
            "nombre": "Zona 08"
          },
          {
            "codigo": "09",
            "nombre": "Zona 09"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "11",
            "nombre": "Zona 11"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "13",
            "nombre": "Zona 13"
          },
          {
            "codigo": "14",
            "nombre": "Zona 14"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "16",
            "nombre": "Zona 16"
          },
          {
            "codigo": "17",
            "nombre": "Zona 17"
          },
          {
            "codigo": "18",
            "nombre": "Zona 18"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "ACACIAS": {
        "codigo": "005",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BARRANCA DE UPIA": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CABUYARO": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CASTILLA LA NUEVA": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUBARRAL": {
        "codigo": "015",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "CUMARAL": {
        "codigo": "020",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CALVARIO": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL CASTILLO": {
        "codigo": "027",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL DORADO": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "FUENTE DE ORO": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GRANADA": {
        "codigo": "035",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "90",
            "nombre": "Zona 90"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "GUAMAL": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA MACARENA": {
        "codigo": "041",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LEJANIAS": {
        "codigo": "042",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO GAITAN": {
        "codigo": "043",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MESETAS": {
        "codigo": "044",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO LOPEZ": {
        "codigo": "045",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MAPIRIPAN": {
        "codigo": "046",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO CONCORDIA": {
        "codigo": "047",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO LLERAS": {
        "codigo": "048",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO RICO": {
        "codigo": "049",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "RESTREPO": {
        "codigo": "050",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "SAN CARLOS DE GUAROA": {
        "codigo": "055",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUAN DE ARAMA": {
        "codigo": "058",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN JUANITO": {
        "codigo": "059",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MARTIN DE LOS LLANOS": {
        "codigo": "060",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "URIBE": {
        "codigo": "074",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VISTA HERMOSA": {
        "codigo": "080",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "GUAVIARE": {
    "codigo": "54",
    "municipios": {
      "SAN JOSE DEL GUAVIARE": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CALAMAR": {
        "codigo": "003",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL RETORNO": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MIRAFLORES": {
        "codigo": "012",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "SAN ANDRES": {
    "codigo": "56",
    "municipios": {
      "SAN ANDRES": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          }
        ]
      },
      "PROVIDENCIA": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      }
    }
  },
  "AMAZONAS": {
    "codigo": "60",
    "municipios": {
      "LETICIA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO NARIÑO": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "EL ENCANTO": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LA CHORRERA": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LA PEDRERA": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "LA VICTORIA": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "MIRITI PARANA": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO SANTANDER": {
        "codigo": "021",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "TARAPACA": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO ALEGRIA": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "PUERTO ARICA": {
        "codigo": "040",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      }
    }
  },
  "PUTUMAYO": {
    "codigo": "64",
    "municipios": {
      "MOCOA": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO ASIS": {
        "codigo": "002",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO LEGUIZAMO": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "COLON": {
        "codigo": "007",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN FRANCISCO": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTIAGO": {
        "codigo": "016",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SAN MIGUEL (LA DORADA)": {
        "codigo": "018",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SIBUNDOY": {
        "codigo": "019",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          }
        ]
      },
      "ORITO": {
        "codigo": "023",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO GUZMAN": {
        "codigo": "025",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "PUERTO CAICEDO": {
        "codigo": "026",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VALLE DEL GUAMUEZ (LA HORMIGA)": {
        "codigo": "028",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "VILLAGARZON": {
        "codigo": "030",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "VAUPES": {
    "codigo": "68",
    "municipios": {
      "MITU": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CARURU": {
        "codigo": "004",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "MORICHAL (PAPUNAGUA)": {
        "codigo": "010",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "BUENOS AIRES (PACOA)": {
        "codigo": "013",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "TARAIRA": {
        "codigo": "017",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "YAVARATE": {
        "codigo": "022",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "VICHADA": {
    "codigo": "72",
    "municipios": {
      "PUERTO CARREÑO": {
        "codigo": "001",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "98",
            "nombre": "Zona 98"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "SANTA ROSALIA": {
        "codigo": "002",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "CUMARIBO": {
        "codigo": "006",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      },
      "LA PRIMAVERA": {
        "codigo": "008",
        "zonas": [
          {
            "codigo": "00",
            "nombre": "Zona 00"
          },
          {
            "codigo": "99",
            "nombre": "Zona 99"
          }
        ]
      }
    }
  },
  "CONSULADOS": {
    "codigo": "88",
    "municipios": {
      "GHANA": {
        "codigo": "115",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ALEMANIA": {
        "codigo": "120",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          }
        ]
      },
      "ARGELIA": {
        "codigo": "130",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "AZERBAIYAN": {
        "codigo": "135",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "CURAZAO": {
        "codigo": "140",
        "zonas": [
          {
            "codigo": "10",
            "nombre": "Zona 10"
          }
        ]
      },
      "ARGENTINA": {
        "codigo": "155",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ARUBA": {
        "codigo": "160",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "AUSTRALIA": {
        "codigo": "165",
        "zonas": [
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          }
        ]
      },
      "AUSTRIA": {
        "codigo": "170",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "BELGICA": {
        "codigo": "190",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "BOLIVIA": {
        "codigo": "215",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "BRASIL": {
        "codigo": "220",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "35",
            "nombre": "Zona 35"
          },
          {
            "codigo": "40",
            "nombre": "Zona 40"
          },
          {
            "codigo": "42",
            "nombre": "Zona 42"
          }
        ]
      },
      "CANADA": {
        "codigo": "250",
        "zonas": [
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          }
        ]
      },
      "COREA DEL SUR": {
        "codigo": "275",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "COSTA RICA": {
        "codigo": "285",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "CUBA": {
        "codigo": "290",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "CHILE": {
        "codigo": "305",
        "zonas": [
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "CHINA REPUBLICA POPULAR": {
        "codigo": "315",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "50",
            "nombre": "Zona 50"
          },
          {
            "codigo": "55",
            "nombre": "Zona 55"
          }
        ]
      },
      "DINAMARCA": {
        "codigo": "325",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ECUADOR": {
        "codigo": "330",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          },
          {
            "codigo": "35",
            "nombre": "Zona 35"
          },
          {
            "codigo": "40",
            "nombre": "Zona 40"
          }
        ]
      },
      "EGIPTO": {
        "codigo": "335",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "EL SALVADOR": {
        "codigo": "340",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "EMIRATOS ARABES UNIDOS": {
        "codigo": "350",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ESPAÑA": {
        "codigo": "355",
        "zonas": [
          {
            "codigo": "03",
            "nombre": "Zona 03"
          },
          {
            "codigo": "04",
            "nombre": "Zona 04"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "50",
            "nombre": "Zona 50"
          },
          {
            "codigo": "60",
            "nombre": "Zona 60"
          },
          {
            "codigo": "65",
            "nombre": "Zona 65"
          },
          {
            "codigo": "70",
            "nombre": "Zona 70"
          }
        ]
      },
      "ESTADOS UNIDOS": {
        "codigo": "360",
        "zonas": [
          {
            "codigo": "01",
            "nombre": "Zona 01"
          },
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "30",
            "nombre": "Zona 30"
          },
          {
            "codigo": "35",
            "nombre": "Zona 35"
          },
          {
            "codigo": "40",
            "nombre": "Zona 40"
          },
          {
            "codigo": "55",
            "nombre": "Zona 55"
          },
          {
            "codigo": "57",
            "nombre": "Zona 57"
          },
          {
            "codigo": "59",
            "nombre": "Zona 59"
          },
          {
            "codigo": "60",
            "nombre": "Zona 60"
          }
        ]
      },
      "REPUBLICA DE FILIPINAS": {
        "codigo": "370",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "FINLANDIA": {
        "codigo": "375",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "FRANCIA": {
        "codigo": "380",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "GUATEMALA": {
        "codigo": "410",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "HAITI": {
        "codigo": "430",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "PAISES BAJOS": {
        "codigo": "435",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "HONDURAS": {
        "codigo": "440",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "HUNGRIA": {
        "codigo": "445",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "INDIA": {
        "codigo": "455",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "INDONESIA": {
        "codigo": "460",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "INGLATERRA": {
        "codigo": "465",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "IRLANDA": {
        "codigo": "470",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ISRAEL": {
        "codigo": "490",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "ITALIA": {
        "codigo": "495",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          }
        ]
      },
      "JAMAICA": {
        "codigo": "500",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "JAPON": {
        "codigo": "505",
        "zonas": [
          {
            "codigo": "10",
            "nombre": "Zona 10"
          }
        ]
      },
      "KENIA": {
        "codigo": "515",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "LIBANO": {
        "codigo": "535",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "MALASIA": {
        "codigo": "560",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "MARRUECOS": {
        "codigo": "580",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "MEXICO": {
        "codigo": "590",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "10",
            "nombre": "Zona 10"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          }
        ]
      },
      "NICARAGUA": {
        "codigo": "620",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "NUEVA ZELANDIA": {
        "codigo": "625",
        "zonas": [
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "NORUEGA": {
        "codigo": "635",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "PANAMA": {
        "codigo": "655",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "07",
            "nombre": "Zona 07"
          },
          {
            "codigo": "12",
            "nombre": "Zona 12"
          },
          {
            "codigo": "20",
            "nombre": "Zona 20"
          }
        ]
      },
      "PARAGUAY": {
        "codigo": "665",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "PERU": {
        "codigo": "670",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "15",
            "nombre": "Zona 15"
          }
        ]
      },
      "POLONIA": {
        "codigo": "675",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "PORTUGAL": {
        "codigo": "680",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "PUERTO RICO": {
        "codigo": "683",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "REPUBLICA DOMINICANA": {
        "codigo": "685",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "REPUBLICA DE SINGAPUR": {
        "codigo": "688",
        "zonas": [
          {
            "codigo": "11",
            "nombre": "Zona 11"
          }
        ]
      },
      "REPUBLICA SOCIALISTA DE VIETNA": {
        "codigo": "690",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "RUSIA": {
        "codigo": "700",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "SUDAFRICA": {
        "codigo": "745",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "SUECIA": {
        "codigo": "755",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "SUIZA": {
        "codigo": "760",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "TAILANDIA": {
        "codigo": "765",
        "zonas": [
          {
            "codigo": "02",
            "nombre": "Zona 02"
          }
        ]
      },
      "TURQUIA": {
        "codigo": "770",
        "zonas": [
          {
            "codigo": "02",
            "nombre": "Zona 02"
          },
          {
            "codigo": "03",
            "nombre": "Zona 03"
          }
        ]
      },
      "TRINIDAD Y TOBAGO": {
        "codigo": "785",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "URUGUAY": {
        "codigo": "805",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          }
        ]
      },
      "VENEZUELA": {
        "codigo": "815",
        "zonas": [
          {
            "codigo": "05",
            "nombre": "Zona 05"
          },
          {
            "codigo": "35",
            "nombre": "Zona 35"
          },
          {
            "codigo": "55",
            "nombre": "Zona 55"
          },
          {
            "codigo": "65",
            "nombre": "Zona 65"
          }
        ]
      }
    }
  }
};


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

export const citrepData: Record<string, CircunscripcionCITREP> = {
  "CIRCUNSCRIPCION 1": {
    "departamentos": {
      "CAUCA": {
        "ARGELIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "BALBOA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "BUENOS AIRES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CALDONO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CALOTO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CAJIBIO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CORINTO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL TAMBO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "JAMBALO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MERCADERES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MORALES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MIRANDA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PATIA (EL BORDO)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PIENDAMO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SANTANDER DE QUILICHAO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SUAREZ": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TORIBIO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "NARIÑO": {
        "CUMBITARA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL ROSARIO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LEIVA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LOS ANDES (SOTOMAYOR)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "POLICARPA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "VALLE": {
        "FLORIDA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PRADERA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 2": {
    "departamentos": {
      "ARAUCA": {
        "ARAUQUITA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "FORTUL": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SARAVENA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TAME": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 3": {
    "departamentos": {
      "ANTIOQUIA": {
        "AMALFI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ANORI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "BRICEÑO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CACERES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CAUCASIA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL BAGRE": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ITUANGO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "NECHI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "REMEDIOS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SEGOVIA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TARAZA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VALDIVIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ZARAGOZA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 4": {
    "departamentos": {
      "NORTE DE SAN": {
        "CONVENCION": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL CARMEN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL TARRA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "HACARI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN CALIXTO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SARDINATA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TEORAMA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TIBU": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 5": {
    "departamentos": {
      "CAQUETA": {
        "FLORENCIA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ALBANIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "BELEN DE LOS ANDAQUIES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CARTAGENA DEL CHAIRA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CURILLO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL DONCELLO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL PAUJIL": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LA MONTAÑITA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MILAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MORELIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO RICO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN JOSE DEL FRAGUA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN VICENTE DEL CAGUAN": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SOLANO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SOLITA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VALPARAISO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "HUILA": {
        "ALGECIRAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 6": {
    "departamentos": {
      "CHOCO": {
        "BOJAYA (BELLAVISTA)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MEDIO ATRATO (BETE)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ISTMINA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MEDIO SAN JUAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL LITORAL DEL SAN JUAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "NOVITA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SIPI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ACANDI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CARMEN DEL DARIEN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "RIOSUCIO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "UNGUIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CONDOTO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "ANTIOQUIA": {
        "VIGIA DEL FUERTE": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MURINDO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 7": {
    "departamentos": {
      "META": {
        "MAPIRIPAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MESETAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LA MACARENA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "URIBE": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO CONCORDIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO LLERAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO RICO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VISTA HERMOSA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "GUAVIARE": {
        "SAN JOSE DEL GUAVIARE": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CALAMAR": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL RETORNO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MIRAFLORES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 8": {
    "departamentos": {
      "BOLIVAR": {
        "CORDOBA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL CARMEN DE BOLIVAR": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL GUAMO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MARIA LA BAJA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN JACINTO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN JUAN NEPOMUCENO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ZAMBRANO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "SUCRE": {
        "COLOSO (RICAURTE)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CHALAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LOS PALMITOS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MORROA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "OVEJAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PALMITO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN ONOFRE": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TOLUVIEJO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 9": {
    "departamentos": {
      "CAUCA": {
        "GUAPI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LOPEZ (MICAY)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TIMBIQUI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "VALLE": {
        "BUENAVENTURA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "05",
              "nombre": "Zona 05"
            },
            {
              "codigo": "06",
              "nombre": "Zona 06"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 10": {
    "departamentos": {
      "NARIÑO": {
        "BARBACOAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "EL CHARCO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LA TOLA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MAGUI (PAYAN)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MOSQUERA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "OLAYA HERRERA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "FRANCISCO PIZARRO (SALAHONDA)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "RICAURTE": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "ROBERTO PAYAN (SAN JOSE)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SANTA BARBARA (ISCUANDE)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TUMACO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 11": {
    "departamentos": {
      "PUTUMAYO": {
        "ORITO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO ASIS": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO CAICEDO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO GUZMAN": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUERTO LEGUIZAMO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN MIGUEL (LA DORADA)": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VALLE DEL GUAMUEZ (LA HORMIGA)": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VILLAGARZON": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 12": {
    "departamentos": {
      "CESAR": {
        "AGUSTIN CODAZZI": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "BECERRIL": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LA JAGUA DE IBIRICO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "LA PAZ": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PUEBLO BELLO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VALLEDUPAR": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "05",
              "nombre": "Zona 05"
            },
            {
              "codigo": "06",
              "nombre": "Zona 06"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "LA GUAJIRA": {
        "DIBULLA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "FONSECA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN JUAN DEL CESAR": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "MAGDALENA": {
        "ARACATACA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CIENAGA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "FUNDACION": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SANTA MARTA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "05",
              "nombre": "Zona 05"
            },
            {
              "codigo": "06",
              "nombre": "Zona 06"
            },
            {
              "codigo": "07",
              "nombre": "Zona 07"
            },
            {
              "codigo": "08",
              "nombre": "Zona 08"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 13": {
    "departamentos": {
      "BOLIVAR": {
        "ARENAL": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CANTAGALLO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MORALES": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN PABLO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SANTA ROSA DEL SUR": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SIMITI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      },
      "ANTIOQUIA": {
        "YONDO-CASABE": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 14": {
    "departamentos": {
      "CORDOBA": {
        "PUERTO LIBERTADOR": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN JOSE DE URE": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "VALENCIA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TIERRALTA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MONTELIBANO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 15": {
    "departamentos": {
      "TOLIMA": {
        "ATACO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CHAPARRAL": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "90",
              "nombre": "Zona 90"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "PLANADAS": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "RIOBLANCO": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  },
  "CIRCUNSCRIPCION 16": {
    "departamentos": {
      "ANTIOQUIA": {
        "CAREPA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "CHIGORODO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "DABEIBA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "MUTATA": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "NECOCLI": {
          "zonas": [
            {
              "codigo": "00",
              "nombre": "Zona 00"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "SAN PEDRO DE URABA": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "APARTADO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "04",
              "nombre": "Zona 04"
            },
            {
              "codigo": "98",
              "nombre": "Zona 98"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        },
        "TURBO": {
          "zonas": [
            {
              "codigo": "01",
              "nombre": "Zona 01"
            },
            {
              "codigo": "02",
              "nombre": "Zona 02"
            },
            {
              "codigo": "03",
              "nombre": "Zona 03"
            },
            {
              "codigo": "99",
              "nombre": "Zona 99"
            }
          ]
        }
      }
    }
  }
};

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
