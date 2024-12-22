import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';
import Map from './components/Map';
import HomeLogin from './components/LoginPage/HomeLogin';
import Signup from './components/LoginPage/Signup';
import Login from './components/LoginPage/Login';
import BookAppointment from './components/screens/BookAppointment';
import CallAmb from './components/screens/CallAmb';
import Completed from './components/screens/Completed';
import Home from './components/screens/Home';
import Pending from './components/screens/Pending';
import Success from './components/screens/Success';
import PersonalDetails from './components/SettingsPages/PersonalDetails';
import ChangePassword from './components/SettingsPages/ChangePassword';
import Faq from './components/SettingsPages/Faq';
import Feedback from './components/SettingsPages/Feedback';
import PrivacyPolicy from './components/SettingsPages/PrivacyPolicy';
import Rating from './components/SettingsPages/Rating';
import BleApp from './components/ble/BleApp';
import AiAssistant from './components/AiAssistant';
import Profile from './components/LoginPage/Profile'; 
import Logout from './components/Logout';
import MedReminder from './components/MedReminder';

const stack = createNativeStackNavigator();
const { Navigator, Screen } = stack;

function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Navigator>
                    <Screen name='Homescreen' component={HomeScreen} options={{ headerShown: false }} />
                    <Screen name='Settings' component={Settings} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }} />
                    <Screen name='Map' component={Map} options={{ headerShown: false }} />
                    <Screen name="HomeLogin" component={HomeLogin} options={{ headerShown: false }} />
                    <Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Screen name="BookAppointment" component={BookAppointment} options={{ headerShown: false }} />
                    <Screen name="CallAmb" component={CallAmb} />
                    <Screen name="Completed Appointments" component={Completed} />
                    <Screen name="Home" component={Home} options={{
                        headerTitle: '  Doctor', headerLeft: () => (
                            <View style={{ paddingLeft: 10 }}>
                                <Image
                                    source={require('./components/images/logo.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        ),
                        headerTintColor: 'black',
                    }} />
                    <Screen name="Pending Appointments" component={Pending} />
                    <Screen name="Success" component={Success} />
                    <Screen name='Personal Details' component={PersonalDetails} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>
                    <Screen name='Change Password' component={ChangePassword} options={{ headerShown: false }} />
                    <Screen name='Faq' component={Faq} options={{ headerShown: false }}/>
                    <Screen name='Feedback' component={Feedback} options={{ headerShown: false }}/>
                    <Screen name='Privacy Policy' component={PrivacyPolicy} options={{ headerShown: false }}/>
                    <Screen name='Rating' component={Rating} options={{ headerShown: false }}/>
                    <Screen name="Autochair connect" component={BleApp} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>
                    <Screen name="AiAssistant" component={AiAssistant} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>
                    <Screen name="Profile" component={Profile} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>
                    <Screen name="Logout" component={Logout} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>
                    <Screen name="MedReminder" component={MedReminder} options={{ headerStyle: { backgroundColor: '#0A66C2', }, headerTintColor: 'white' }}/>



                    







                    



                </Navigator>
            </NavigationContainer>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});


export default App;
