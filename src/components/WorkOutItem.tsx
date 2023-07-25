import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Workout} from '../types/data';
import StyledText from './StyledText';

const WorkOutItem = ({item}: {item: Workout}) => {
  return (
    <View style={styles.container}>
      <StyledText>{item.name}</StyledText>
      <Text>Duration: {item.duration}</Text>
      <Text>Difficulty: {item.difficulty}</Text>
      <View style={{height: 5, width: '100%'}} />
    </View>
  );
};

export default WorkOutItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Malinda',
    marginBottom: 5,
  },
  duration: {
    fontSize: 15,
  },
  difficulty: {
    fontSize: 15,
  },
});
