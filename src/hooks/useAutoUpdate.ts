import { useState, useEffect } from 'react';

export function useAutoUpdate() {
  const [available, setAvailable] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.electronAPI?.onUpdateAvailable) return;

    window.electronAPI.onUpdateAvailable((data) => {
      setAvailable(data.version);
    });
    window.electronAPI.onUpdateProgress((data) => {
      setProgress(data.percent);
    });
    window.electronAPI.onUpdateDownloaded(() => {
      setReady(true);
      setProgress(null);
    });

    return () => {
      window.electronAPI?.removeUpdateListeners();
    };
  }, []);

  const download = () => window.electronAPI?.descargarActualizacion();
  const install = () => window.electronAPI?.instalarActualizacion();

  return { available, progress, ready, download, install };
}
