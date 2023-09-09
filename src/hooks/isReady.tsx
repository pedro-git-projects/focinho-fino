import { useState, useEffect } from 'react';

function useAppIsReady(): boolean {
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {

    const initializeApp = async () => {
      // TODO: replace this with your actual async logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      setAppReady(true);
    };

    initializeApp();
  }, []);

  return isAppReady;
}

export default useAppIsReady;

