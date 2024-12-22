import React from 'react';
import {View, Text, Touchable, TouchableOpacity,StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft:50
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
            marginLeft:90
          }}>
          Create a new account!
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
            
          }}>
            <View style={styles.placeholder}>
            <Field placeholder="First Name" />
            </View>
            <View style={styles.placeholder}>
            <Field placeholder="Last Name" />
            </View>
            <View style={styles.placeholder}>
            <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
            </View>
          <View style={styles.placeholder}>
          <Field placeholder="Contact Number" keyboardType={'numeric'} />
          </View>
          <View style={styles.placeholder}>
          <Field placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={styles.placeholder}>
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight:16
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 12}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 12,paddingRight:65}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: '#0A66C2', fontWeight: 'bold', fontSize: 20,paddingRight:20}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;

const styles=StyleSheet.create(
  {
    placeholder:{
      width:400
    }

  }
);
