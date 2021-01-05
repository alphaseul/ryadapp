import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});

export default Home;
