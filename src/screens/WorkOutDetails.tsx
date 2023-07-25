import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useWorkout} from '../hooks/useWorkoutBySlug';
import Modal from '../components/Modal';

type WorkOutProp = {
  route: {
    params: {
      slug: string;
    };
  };
};

const WorkOutDetails = ({route}: WorkOutProp) => {
  // useEffect(() => {
  const workout = useWorkout(route.params.slug);
  //   if (!workout) {
  //     return null;
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{workout?.name}</Text>

      <View style={styles.centeredView}>
        <Modal />
      </View>
    </View>
  );
};

export default WorkOutDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    // fontFamily: 'Malinda',
    marginBottom: 5,
  },
});
