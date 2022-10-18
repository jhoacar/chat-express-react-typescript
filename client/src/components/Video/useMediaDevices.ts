import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function useMediaDevices() {
  const [stream, setStream] = useState<MediaStream | null>(null);

  const loadMediaDevices = useCallback(async () => {
    if (!navigator || !navigator.mediaDevices) {
      throw new Error('Media devices not available');
    }

    const newStream = await navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      });
    setStream(newStream);
  }, []);

  useEffect(() => {
    const handlerLoading = toast.loading('Loading media devices');
    loadMediaDevices()
      .then(() => toast.success('Loaded media devices'))
      .catch((error) => toast.error(error?.message || 'Error loading media devices'))
      .finally(() => toast.dismiss(handlerLoading));
  }, []);

  return { stream };
}
