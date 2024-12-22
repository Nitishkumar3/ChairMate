import {View, Text, StyleSheet, TextInput,TouchableOpacity,Linking} from 'react-native';
import React from 'react';
import Header from '../component/Header';
import CommonBtn from '../component/CommonBtn';

const CallAmb = () => {
  const phoneNumber = '8072524479'; 

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Address" style={styles.address} placeholderTextColor="black" />
      <TouchableOpacity style={styles.ctaButton} onPress={handleCallPress}>
          <Text style={styles.ctaButtonText}>{'Call Now'}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CallAmb;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    color: 'black',
    height: 70,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
    marginBottom: 50,
    color: 'black',

  },
  ctaButton: {
    backgroundColor: '#0A66C2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});