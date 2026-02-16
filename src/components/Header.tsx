import logoCNE from '../assets/logo-cne.png';
import type { Seccion } from '../types';
import { TAB_LABELS, TAB_BG_CLASSES, getVisibleTabs } from '../constants';

interface HeaderProps {
  seccionActiva: Seccion;
  securityTier: string;
  onChangeSeccion: (seccion: Seccion) => void;
}

export default function Header({ seccionActiva, securityTier, onChangeSeccion }: HeaderProps) {
  const visibleTabs = getVisibleTabs(securityTier);
  const indiceActual = visibleTabs.indexOf(seccionActiva);

  return (
    <>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h1 className="font-['Poppins',sans-serif] font-bold text-[#ffb700] text-[52px] tracking-[2.6px]">
            VERIFICACION  ELECTORAL
          </h1>
          <div className="h-[2px] bg-[#ffb700] w-full max-w-[832px] mt-2"></div>
          <p className="font-['Poppins',sans-serif] font-semibold text-[#f3f3f3] text-[22px] mt-4 max-w-[832px]">
            Sigue este paso a paso para obtener el archivo con el que podras realizar la verificacion electoral.
          </p>
        </div>
        <img src={logoCNE} alt="Logo CNE" className="w-[550px] h-[309px] object-contain -mt-16" />
      </div>

      <div className="flex gap-4 mt-2 flex-wrap relative z-10 justify-end">
        {visibleTabs.map((seccion, index) => {
          const permitido = index <= indiceActual;
          const isActive = seccionActiva === seccion;

          return (
            <button
              key={seccion}
              onClick={() => permitido && onChangeSeccion(seccion)}
              disabled={!permitido}
              className={`h-[70px] w-[190px] rounded-[5px] transition-all duration-200 ${
                isActive ? TAB_BG_CLASSES[seccion] : 'bg-white hover:bg-gray-100'
              } ${permitido ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
            >
              <p className={`font-['Poppins',sans-serif] font-semibold text-[15px] tracking-[0.8px] ${
                isActive ? 'text-white' : 'text-[#40376d]'
              }`}>
                {TAB_LABELS[seccion]}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}
