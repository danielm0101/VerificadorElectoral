import { useState, useEffect } from 'react';

export function useAutoUpdate() {
  const [available, setAvailable] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

  useEffect(() => {
    if (!window.electronAPI?.onUpdateAvailable) return;

    window.electronAPI.onUpdateAvailable((data) => {
      setAvailable(data.version);
      setUpdateError(null);
    });
    window.electronAPI.onUpdateProgress((data) => {
      setProgress(data.percent);
      setUpdateError(null);
    });
    window.electronAPI.onUpdateDownloaded(() => {
      setReady(true);
      setProgress(null);
    });
    window.electronAPI.onUpdateError?.((data) => {
      setUpdateError(data.message);
      setProgress(null);
    });

    return () => {
      window.electronAPI?.removeUpdateListeners();
    };
  }, []);

  const download = () => {
    setUpdateError(null);
    window.electronAPI?.descargarActualizacion();
  };
  const install = () => window.electronAPI?.instalarActualizacion();

  return { available, progress, ready, updateError, download, install };
}
