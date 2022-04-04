import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Cards from './components/Cards';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <Cards/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;