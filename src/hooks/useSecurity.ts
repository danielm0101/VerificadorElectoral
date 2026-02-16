import { useState, useEffect } from 'react';

export function useSecurity() {
  const [status, setStatus] = useState<string>('pending');
  const [message, setMessage] = useState<string>('');
  const [tier, setTier] = useState<string>('full');

  useEffect(() => {
    if (!window.electronAPI?.obtenerSecurityStatus) return;

    window.electronAPI.obtenerSecurityStatus().then((data) => {
      setStatus(data.status);
      if (data.message) setMessage(data.message);
      if (data.tier) setTier(data.tier);
    });

    window.electronAPI.onSecurityStatus((data) => {
      setStatus(data.status);
      if (data.message) setMessage(data.message);
      if (data.tier) setTier(data.tier);
    });

    return () => {
      window.electronAPI?.removeSecurityStatus();
    };
  }, []);

  return { status, message, tier };
}
