import {containsKey, getData, removeItem, storeData} from '.';
import data from '../../data.json';
import {Workout} from '../types/data';

export const getWorkouts = async (): Promise<Workout[]> => {
  const Workouts = await getData('workout-data');
  return Workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const Workouts = await getWorkouts();
  const workout = Workouts.filter(work => work.slug === slug)[0];
  return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey('workout-data');
  if (!hasWorkouts) {
    await storeData('workout-data', data);
    return true;
  }

  return false;
};

export const clearWorkouts = async () => {
  await removeItem('workout-data');
};
