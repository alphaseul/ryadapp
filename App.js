import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Home from './components/Home';
import Vid from './components/Vid';
import {NativeRouter, Route, Link} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <View style={styles.container}>
          <Route path="/home" component={Home} />
          <Route path="/vid" component={Vid} />
        </View>
        <View style={styles.navBar}>
          <Link to="/home">
            <Text>Home</Text>
          </Link>
          <Link to="/vid">
            <Text>Vid</Text>
          </Link>
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    height: 755,
  },
});

export default App;
