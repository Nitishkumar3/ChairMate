import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { startSpeechRecognition, stopSpeechRecognition } from './SpeechRecognition';

function HomeScreen({ navigation }) {
    const [isListening, setIsListening] = useState(false);
    const [spokenText, setSpokenText] = useState('');
    const [displayText, setDisplayText] = useState('Say something!');
    const animationValue = useRef(new Animated.Value(1)).current;




    const handleMicIconPress = () => {
        if (!isListening) {
            setSpokenText('');
            startSpeechRecognition(handleVoiceCommand);
            setIsListening(true);
        } else {
            stopSpeechRecognition();
            setIsListening(false);
        }
    };
    const handleVoiceCommand = (command) => {
        if (command.includes('open settings')) {
            navigation.navigate('Settings');
            console.log('settings opened');
        }
        else if (command.includes('settings')) {
            navigation.navigate('Settings');
            console.log('settings opened');
        }
        else if (command.includes('open navigation')) {
            navigation.navigate('Map');
            console.log('navigation opened');
        }
        else if (command.includes('open map')) {
            navigation.navigate('Map');
            console.log('navigation opened');
        }
        else if (command.includes('open user profile')) {
            navigation.navigate('HomeLogin');
            console.log('user profile opened');
        }
        else if (command.includes('user profile')) {
            navigation.navigate('HomeLogin');
            console.log('user profile opened');
        }
        else if (command.includes('open profile')) {
            navigation.navigate('HomeLogin');
            console.log('user profile opened');
        }
        else if (command.includes('open voice assistant')) {
            navigation.navigate('AiAssistant');
            console.log('AiAssistant opened');
        }
        else if (command.includes('voice assistant')) {
            navigation.navigate('AiAssistant');
            console.log('AiAssistant opened');
        }
        else if (command.includes('open ai assistant')) {
            navigation.navigate('AiAssistant');
            console.log('AiAssistant opened');
        }
        
        else if (command.includes('book doctor appointment')) {
            navigation.navigate('Home');
            console.log('doctor appointment');
        }
        else if (command.includes('doctor appointment')) {
            navigation.navigate('Home');
            console.log('doctor appointment');
        }
        else if (command.includes('connect bluetooth')) {
            navigation.navigate('Autochair connect');
            console.log('Autochair connected');
        }
        else if (command.includes('connect')) {
            navigation.navigate('Autochair connect');
            console.log('Autochair connected');
        }
        else if (command.includes('medication')) {
            navigation.navigate('MedReminder');
            console.log('med reminder');
        }
        else if (command.includes('open medication reminder')) {
            navigation.navigate('MedReminder');
            console.log('med reminder');
        }
        else if (command.includes('managae medication')) {
            navigation.navigate('MedReminder');
            console.log('med reminder');
        }
        else if (command.includes('open medication')) {
            navigation.navigate('MedReminder');
            console.log('med reminder');
        }

        setSpokenText(command);
    };
    useEffect(() => {
        if (isListening) {
            setDisplayText('Listening...');
            Animated.spring(animationValue, {
                toValue: 1.2, 
                friction: 4, 
                useNativeDriver: true,
            }).start();
        } else {
            setDisplayText(spokenText || 'Say something!');
            Animated.spring(animationValue, {
                toValue: 1, 
                friction: 4, 
                useNativeDriver: true,
            }).start();
        }
    }, [isListening, spokenText]);

    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Text style={styles.s}>Chairmate</Text>
                <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate('Settings')}>
                    <Icon name="cog" size={50} color="#FFFFFF" />
                    <Text>Settings</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.us} onPress={() => navigation.navigate('Profile')}>
                        <Icon name="user-circle" size={50} color="#FFFFFF" />
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Pressable style={styles.innerContainer} onPress={handleMicIconPress} android_ripple={{ color: 'grey' }}>
                <Animated.View style={{ transform: [{ scale: animationValue }] }}>
                    <Icon name="microphone" size={200} color={isListening ? '#0A66C2' : '#000000'} />
                </Animated.View>
                <Text style={styles.t}>{isListening ? 'Stop Listening' : 'Start Listening'}</Text>
                <Text style={styles.ts}>{spokenText}</Text>

            </Pressable>
            <View style={styles.ic}>
                <TouchableOpacity style={styles.cc} onPress={() => navigation.navigate('AiAssistant')}>
                    <Icon name="microphone" size={50} color="#FFFFFF" />
                    <Text>AI Assistant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cc} onPress={() => navigation.navigate('Autochair connect')}>
                    <Icon name="bluetooth" size={50} color="#FFFFFF" />
                    <Text>Connect</Text>
                </TouchableOpacity>
                <View style={styles.cc}>
                    <TouchableOpacity
                        style={styles.cc}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Icon name="stethoscope" size={50} style={styles.cc} color="#FFFFFF" />
                        <Text>Doctor</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.cc}>
                    <TouchableOpacity
                        style={styles.cc}
                        onPress={() => navigation.navigate('Map')}
                    >
                        <Icon name="location-arrow" size={50} style={styles.cc} color="#FFFFFF" />
                        <Text>Navigation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A66C2',
    },
    us: {
        marginLeft: 40,
        alignItems: "center"

    },
    user: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 25,
        marginTop: 15,
        marginBottom: 8
    },
    innerContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        overflow: 'hidden',
    },
    nav: {
        marginLeft: 80,
        alignItems: "center"

    },
    mic: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginVertical: 50,
        borderRadius: 50,
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    ic: {
        flex: 0.5,
        flexDirection: 'row',
        paddingBottom: 13,
        marginTop: 8,
        backgroundColor: '#0A66C2',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    t:
    {
        fontSize: 40,
        color: '#000000'
    },
    ts:{
        fontSize: 20,
        color:'#FF5733',
        padding:10,

    },
    s:
    {
        color: '#FFFFFF',
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 25,
        textAlignVertical: 'center'
    },
    cc: {
        alignItems: 'center',
    }
});

export default HomeScreen;