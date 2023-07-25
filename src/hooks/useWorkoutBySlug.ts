import {useEffect, useState} from 'react';
import {getWorkoutBySlug} from '../storage/workout';
import {Workout} from '../types/data';

export const useWorkout = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const getData = async () => {
      const _workout = await getWorkoutBySlug(slug);
      setWorkout(_workout);
    };
    getData();
  }, []);

  return workout;
};
