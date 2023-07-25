import {useEffect, useRef, useState} from 'react';
import {getWorkouts} from '../storage/workout';
import {Workout} from '../types/data';
import {useIsFocused} from '@react-navigation/native';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();
  const numRef = useRef(0);

  useEffect(() => {
    const getData = async () => {
      console.log(`Getting Data! ${(numRef.current += 1)}`);
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    };

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};
