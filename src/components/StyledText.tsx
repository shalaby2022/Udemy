import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement} from 'react';

type StyledTextProp = {
  children: string;
};

const StyledText = ({children}: StyledTextProp) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Malinda',
    marginBottom: 5,
  },
});
