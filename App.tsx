import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import useCachedResources from './src/hooks/useCachedResources';

const App = () => {
  const isLoaded = useCachedResources();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
