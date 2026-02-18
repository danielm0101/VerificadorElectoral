interface UpdateBannerProps {
  available: string | null;
  progress: number | null;
  ready: boolean;
  updateError: string | null;
  onDownload: () => void;
  onInstall: () => void;
}

export default function UpdateBanner({ available, progress, ready, updateError, onDownload, onInstall }: UpdateBannerProps) {
  if (!available && progress === null && !ready && !updateError) return null;

  if (ready) {
    return (
      <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#00c853] px-6 py-3 flex items-center justify-between">
        <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm">
          Actualizacion lista. Reinicie para aplicar.
        </p>
        <button
          onClick={onInstall}
          className="bg-[#00c853] text-white font-['Poppins',sans-serif] font-semibold text-sm px-4 py-1.5 rounded hover:bg-[#00b248] transition-colors"
        >
          Reiniciar ahora
        </button>
      </div>
    );
  }

  if (updateError) {
    return (
      <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ff5a5a] px-6 py-3 flex items-center justify-between">
        <p className="font-['Poppins',sans-serif] text-[#ff5a5a] text-sm">
          Error al actualizar. Descarga manualmente la nueva version.
        </p>
        <button
          onClick={onDownload}
          className="bg-[#ff5a5a] text-white font-['Poppins',sans-serif] font-semibold text-sm px-4 py-1.5 rounded hover:bg-[#e54a4a] transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (progress !== null) {
    const verificando = progress >= 100;
    return (
      <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ffb700] px-6 py-3">
        <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm mb-1">
          {verificando ? 'Verificando archivo descargado...' : `Descargando actualizacion... ${progress}%`}
        </p>
        <div className="w-full bg-[#40376d] rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${verificando ? 'bg-[#00c853] animate-pulse' : 'bg-[#ffb700]'}`}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    );
  }

  if (available) {
    return (
      <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ffb700] px-6 py-3 flex items-center justify-between">
        <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm">
          Nueva version disponible: <span className="font-bold text-[#ffb700]">v{available}</span>
        </p>
        <button
          onClick={onDownload}
          className="bg-[#ffb700] text-[#1a1333] font-['Poppins',sans-serif] font-semibold text-sm px-4 py-1.5 rounded hover:bg-[#e6a600] transition-colors"
        >
          Descargar
        </button>
      </div>
    );
  }

  return null;
}
