import { useState } from 'react';
import Checkbox from '../Checkbox';

interface TabInformacionProps {
  checkZonas: boolean;
  checkKey: boolean;
  checkE14: boolean;
  onCheckZonas: (v: boolean) => void;
  onCheckKey: (v: boolean) => void;
  onCheckE14: (v: boolean) => void;
  onMostrarEjemploFormatos: () => void;
  onContinuar: () => void;
}

export default function TabInformacion({
  checkZonas, checkKey, checkE14,
  onCheckZonas, onCheckKey, onCheckE14,
  onMostrarEjemploFormatos, onContinuar
}: TabInformacionProps) {
  const [paso0Abierto, setPaso0Abierto] = useState(false);
  const checklistCompleto = checkZonas && checkKey && checkE14;

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1250px] mx-auto">
        {/* COLUMNA 1: Contexto */}
        <div>
          <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed mb-4">
            La verificacion electoral consiste en comparar los formatos e-14 con los formatos e-24 para comprobar si existe algun tipo de inconsistencia.
          </p>

          <button
            onClick={onMostrarEjemploFormatos}
            className="font-['Poppins',sans-serif] text-[#11d0d0] text-base font-semibold hover:underline transition-colors cursor-pointer mb-6 block"
          >
            Ver ejemplo de formatos
          </button>

          <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mb-3">
            Este proceso esta dividido en dos fases:
          </p>

          <p className="font-['Poppins',sans-serif] font-bold text-[#ffb700] text-lg mb-2">FASE 1</p>

          <p className="font-['Poppins',sans-serif] font-bold text-[#40376d] text-base mb-1">
            Comparacion automatica:
          </p>
          <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed mb-4">
            un software lee la informacion de cada uno de los formatos, unifica la informacion en un archivo, compara y muestra si hay alguna diferencia de votos. Para que esto suceda, debes entregarle los dos tipos de formato al software, de una forma ordenada.
          </p>

          <p className="font-['Poppins',sans-serif] text-[#40376d] text-base mb-3">Para esto:</p>

          <p className="font-['Poppins',sans-serif] font-semibold text-[#11d0d0] text-base mb-2">
            Solicita al lider que te indique:
          </p>
          <ul className="font-['Poppins',sans-serif] text-[#40376d] text-base space-y-1 list-disc list-inside ml-1">
            <li>Cuales zonas te corresponden verificar</li>
            <li>Cual Key te asignaron</li>
          </ul>
        </div>

        {/* COLUMNA 2: Preparar archivos */}
        <div>
          <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-4">
            Prepara los archivos:
          </p>

          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-[#11d0d0] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white font-bold text-sm">!</span>
            </div>
            <p className="font-['Poppins',sans-serif] text-[#40376d] text-base italic leading-relaxed">
              Inicia con el paso 0, solamente si el lider lo indica, de lo contrario continua con el paso 1.
            </p>
          </div>

          {/* Paso 0 - Desplegable */}
          <div className="border border-[#ffb700] rounded-[8px] overflow-hidden mb-5">
            <button
              onClick={() => setPaso0Abierto(!paso0Abierto)}
              className="w-full flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#fffdf5] transition-colors"
            >
              <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base">Paso 0</p>
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
                  <li>· Descarga la carpeta del Drive con el nombre de las zonas que te fueron asignadas. Guardala de manera que la puedas encontrar facilmente.</li>
                  <li>· Ingresa a la página de la registraduría ... (Ubicación) y descarga todas las E-14 de las zonas que te corresponden. Guardarlas en la carpeta que descargaste anteriormente.</li>
                  <li>· Sube la carpeta al drive con E-14 que guardaste.</li>
                  <li>· Ten en cuenta que estas son las carpetas que vas a utilizar en los siguientes pasos.</li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-2">Paso 1</p>
            <p className="font-['Poppins',sans-serif] text-[#40376d] text-base leading-relaxed">
              Descarga las carpetas E-14 de las zonas que te fueron asignadas por el lider. Estas carpetas se encuentran en (DRIVE)
            </p>
          </div>
        </div>

        {/* COLUMNA 3: Checklist */}
        <div>
          <p className="font-['Poppins',sans-serif] font-bold text-[#11d0d0] text-base mb-6 leading-relaxed">
            SI YA CUENTAS CON LA SIGUIENTE INFORMACIÓN, PUEDES CONTINUAR CON LA IDENTIFICACIÓN:
          </p>

          <div className="space-y-5">
            <Checkbox checked={checkZonas} onChange={onCheckZonas} label="Zonas asignadas" />
            <Checkbox checked={checkKey} onChange={onCheckKey} label="Key Asignada" />
            <Checkbox
              checked={checkE14}
              onChange={onCheckE14}
              label="Formatos E-14 descargados en el computador y divididos en carpetas por zona."
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={onContinuar}
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
  );
}
