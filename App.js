import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainView from './components/MainView'

export default function App() {
  return (
    <View style={styles.container}>
      <MainView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  }
});
