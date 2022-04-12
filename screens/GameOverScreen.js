import {Text, View, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
