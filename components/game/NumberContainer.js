import {Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utils/constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500,
    //fontFamily: 'OpenSans-Bold',
  },
});
