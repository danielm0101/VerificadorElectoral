import { useState, useEffect } from 'react';

interface ConfigState {
  tipoEleccion: string;
  circunscripcion: string;
  departamento: string;
  municipio: string;
  zona: string;
  keyAsignada: string;
}

export function useElectronConfig() {
  const [carpetaTrabajo, setCarpetaTrabajo] = useState('');
  const [config, setConfig] = useState<ConfigState>({
    tipoEleccion: '',
    circunscripcion: '',
    departamento: '',
    municipio: '',
    zona: '',
    keyAsignada: ''
  });

  useEffect(() => {
    if (!window.electronAPI) return;
    window.electronAPI.obtenerCarpetaTrabajo().then(setCarpetaTrabajo);
    window.electronAPI.cargarConfiguracion().then((loaded: any) => {
      if (loaded) {
        setConfig(prev => ({
          tipoEleccion: loaded.tipoEleccion || prev.tipoEleccion,
          circunscripcion: loaded.circunscripcion || prev.circunscripcion,
          departamento: loaded.departamento || prev.departamento,
          municipio: loaded.municipio || prev.municipio,
          zona: loaded.zona || prev.zona,
          keyAsignada: loaded.keyAsignada || prev.keyAsignada,
        }));
      }
    });
  }, []);

  const guardarConfig = async (newConfig: ConfigState) => {
    if (window.electronAPI) {
      await window.electronAPI.guardarConfiguracion(newConfig);
    }
  };

  return { carpetaTrabajo, config, setConfig, guardarConfig };
}
