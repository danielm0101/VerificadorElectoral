import { useState, useEffect } from 'react';
import { URL_RELEASES } from '../constants';

const MAX_DOWNLOAD_ATTEMPTS = 3; // 1 inicial + 2 reintentos

export function useAutoUpdate() {
  const [available, setAvailable] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [downloadAttempts, setDownloadAttempts] = useState(0);

  useEffect(() => {
    if (!window.electronAPI?.onUpdateAvailable) return;

    window.electronAPI.onUpdateAvailable((data) => {
      setAvailable(data.version);
      setUpdateError(null);
      setDownloadAttempts(0);
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

  const download = async () => {
    setDownloadAttempts(c => c + 1);
    setUpdateError(null);
    const result = await window.electronAPI?.descargarActualizacion();
    if (result && !result.success) {
      setUpdateError(result.error || 'Error desconocido al iniciar descarga');
    }
  };

  const install = () => window.electronAPI?.instalarActualizacion();

  const openManualDownload = () => window.electronAPI?.abrirURL(URL_RELEASES);

  const canRetry = downloadAttempts < MAX_DOWNLOAD_ATTEMPTS;

  return { available, progress, ready, updateError, canRetry, download, install, openManualDownload };
}