import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const HomeLogin = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 40}}>Get started with</Text>
      <Text style={{ color: 'white', fontSize:40,  marginBottom: 40 }}>ChairMate</Text>
      <View style={styles.bt}>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      </View>
      <View style={styles.bg}>
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  bg:{
    alignItems:'center'
  }
});

export default HomeLogin;
