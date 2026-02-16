interface UpdateBannerProps {
  available: string | null;
  progress: number | null;
  ready: boolean;
  onDownload: () => void;
  onInstall: () => void;
}

export default function UpdateBanner({ available, progress, ready, onDownload, onInstall }: UpdateBannerProps) {
  if (!available && progress === null && !ready) return null;

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

  if (progress !== null) {
    return (
      <div className="sticky top-0 z-50 bg-[#2d2557] border-b border-[#ffb700] px-6 py-3">
        <p className="font-['Poppins',sans-serif] text-[#f3f3f3] text-sm mb-1">
          Descargando actualizacion... {progress}%
        </p>
        <div className="w-full bg-[#40376d] rounded-full h-2">
          <div className="bg-[#ffb700] h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
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
