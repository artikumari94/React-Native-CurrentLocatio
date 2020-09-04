/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Geolocation from '@react-native-community/geolocation'
const App: () => React$Node = () => {
  const [info,setInfo] = useState(0)
  Geolocation.getCurrentPosition(data =>{
    setInfo(data.coords.latitude+"  , "+data.coords.longitude
      )
  })
  
 return(
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold', color: 'white', textAlign:'auto', fontSize: 30, margin: 5}}>Current Location</Text>
      <Text style = {{fontWeight: 'bold', color: 'white', textAlign: 'center', fontSize: 25, margin: 5}}>latitude  and longtituade {info}</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  
  engine: {
    position: 'absolute',
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#538cc6'
}
  
 
});

export default App;
