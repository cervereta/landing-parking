import { useEffect } from 'react';
import { registerServiceWorker } from '@/lib/sw-register';

export const useServiceWorker = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  }, []);
};

export default useServiceWorker;