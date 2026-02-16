# Verificador Electoral

Aplicacion de escritorio para el Consejo Nacional Electoral (CNE) de Colombia.
Permite verificar actas electorales E-14 y E-24 para las Elecciones de Congreso 2026, extrayendo datos de PDFs mediante IA y comparandolos con los resultados oficiales de la Registraduria.

## Requisitos

- Node.js 18+
- R 4.x (incluido como R Portable en Windows)
- USB autorizada con llave de seguridad

## Instalacion

```bash
npm install
```

## Scripts disponibles

| Script | Descripcion |
|--------|-------------|
| `npm run electron:dev` | Modo desarrollo (Vite + Electron) |
| `npm run electron:build` | Compilar instalador Windows (NSIS) |
| `npm run security:keygen` | Generar fragmentos de llave desde llave_maestra |
| `npm run security:register` | Registrar USB autorizada con metadata |
| `npm run security:encrypt` | Encriptar scripts R y CSVs de coordenadas |
| `npm run security:publish` | Firmar y publicar registro en GitHub Pages |

## Estructura del proyecto

```
VerificadorElectoral/
├── electron/
│   ├── main.cjs              # Proceso principal, IPC handlers, R integration
│   ├── preload.cjs            # contextBridge → window.electronAPI
│   └── security/
│       ├── encryption.cjs     # AES-256-GCM + HKDF
│       ├── validator.cjs      # Validacion USB + GitHub + HMAC + tiers
│       └── usb-detector.cjs   # Deteccion USB cross-platform
├── src/
│   ├── App.tsx                # Componente principal React
│   ├── types.ts               # Tipos e interfaces
│   ├── constants.ts           # Constantes (tabs, labels, colores)
│   ├── components/            # Componentes UI reutilizables
│   ├── hooks/                 # Custom hooks (security, update, config)
│   ├── utils/                 # Utilidades (clasificacion de errores)
│   ├── assets/                # Imagenes y recursos
│   └── divipoleData.ts        # Datos DIVIPOLE (auto-generado, no editar)
├── r-scripts/
│   ├── *.R.enc                # Scripts R encriptados
│   └── coordenadas/*.csv.enc  # Coordenadas encriptadas
├── tools/                     # Scripts de seguridad y administracion
└── r-portable/                # R Portable (solo Windows, no en git)
```

## Seguridad

El sistema usa doble llave (USB + GitHub) con AES-256-GCM:

- La llave maestra se divide en dos fragmentos de 16 bytes
- Un fragmento va en la USB autorizada, el otro en GitHub Pages
- Se derivan mediante HKDF-SHA256 para obtener la clave de 256 bits
- El registro de USBs autorizadas se firma con HMAC-SHA256
- Cada USB tiene tier (admin/extractor/comparador/full) y fecha de expiracion

## Tecnologias

- Electron 31 + React 18 + TypeScript + Tailwind CSS 3
- Vite 5 (build)
- R 4.x (procesamiento de PDFs y comparacion)
- electron-updater (actualizaciones automaticas via GitHub Releases)
