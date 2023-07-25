import React from 'react';
import {Text, Pressable, Alert, StyleSheet, PressableProps} from 'react-native';

const PressableText = (props: PressableProps & {text: string}) => {
  return (
    <Pressable onPress={() => Alert.alert('done')} {...props}>
      <Text style={{textDecorationLine: 'underline'}}>{props.text}</Text>
    </Pressable>
  );
};

export default PressableText;

const style = StyleSheet.create({});
