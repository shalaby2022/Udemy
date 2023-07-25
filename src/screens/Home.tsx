import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Workout} from '../types/data';
import WorkOutItem from '../components/WorkOutItem';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/stacks';
import {useWorkouts} from '../hooks/useWorkouts';

type HomeProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Root'>;
};

const Home = ({navigation}: HomeProps) => {
  const renderItem = ({item}: {item: Workout}) => (
    <Pressable
      onPress={() => navigation.navigate('WorkOutDetails', {slug: item.slug})}>
      <WorkOutItem item={item} />
    </Pressable>
  );

  const workouts = useWorkouts();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={item => item.slug}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
