import {useEffect, useState} from 'react';
import {initWorkouts} from '../storage/workout';

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await initWorkouts();
      } catch (er) {
        console.log(er);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
