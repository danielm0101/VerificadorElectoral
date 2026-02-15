# Verificador Electoral

Aplicación de escritorio para la verificación de actas electorales E-14 y E-24.

## Requisitos

- Node.js 18 o superior
- npm o pnpm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
# Solo React (navegador)
npm run dev

# Electron + React
npm run electron:dev
```

## Construir instalador

```bash
npm run electron:build
```

El instalador se generará en la carpeta `dist-electron/`.

## Estructura del proyecto

```
VerificadorElectoral/
├── electron/           # Código principal de Electron
│   ├── main.js        # Proceso principal
│   └── preload.js     # APIs expuestas al renderer
├── src/               # Código React
│   ├── App.tsx        # Componente principal
│   ├── assets/        # Imágenes y recursos
│   ├── components/    # Componentes reutilizables
│   └── styles/        # Estilos CSS
├── public/            # Archivos estáticos
└── dist-electron/     # Instaladores generados
```

## Carpetas de trabajo

La aplicación crea automáticamente las siguientes carpetas en Documentos:

- `VerificadorElectoral/E14_PDFs` - PDFs de E-14 originales
- `VerificadorElectoral/E14_CSVs` - CSVs convertidos
- `VerificadorElectoral/E24_MMV` - Archivos MMV de E-24
- `VerificadorElectoral/Resultados` - Archivos de comparación
- `VerificadorElectoral/Evidencias` - Evidencias de discrepancias

## Integración con R (pendiente)

Los siguientes handlers están preparados para conectar con scripts R:

- `convertir-pdf-csv` - Conversión de PDFs a CSV
- `comparar-e14-e24` - Comparación entre E-14 y E-24
- `ejecutar-script-r` - Ejecución de scripts R personalizados

## Tecnologías

- Electron 31
- React 18
- Vite 5
- Tailwind CSS 3
- TypeScript