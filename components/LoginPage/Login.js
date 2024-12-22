import React from 'react';
import {View, Text, Touchable, TouchableOpacity, StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            alignItems:'flex-end',
            fontWeight: 'bold',
            marginVertical: 20,
            paddingLeft:110
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold',paddingRight:90}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              paddingRight:170
            }}>
            Login to your account!
          </Text>
          <View style={{width:400}}>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          </View>
          <View style={{width:400}}>
          <Field placeholder="Password" secureTextEntry={true} />
          </View>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 75, marginBottom: 200}}>
            <Text style={{color: '#0A66C2', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:'100', color:'black'}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#0A66C2', fontWeight:'900', fontSize: 16,marginRight:40}}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};


export default Login;
