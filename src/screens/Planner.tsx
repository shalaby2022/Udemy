import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Planner = () => {
  return (
    <View style={styles.container}>
      <Text>Planner</Text>
    </View>
  );
};

export default Planner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
