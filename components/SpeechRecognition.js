import Voice from '@react-native-voice/voice';
import HapticFeedback from 'react-native-haptic-feedback';

let commandCallback = null;

Voice.onSpeechStart = () => {
};

Voice.onSpeechEnd = () => {
};

Voice.onSpeechError = (err) => {
 
  console.error('Speech recognition error:', err);
};

Voice.onSpeechResults = (result) => {
  const spokenText = result.value[0].toLowerCase();

  
  if (commandCallback) {
    commandCallback(spokenText);
  }
};

const startSpeechRecognition = (callback) => {
  try {
    HapticFeedback.trigger('selection', { ignoreAndroidSystemSettings: false });
    commandCallback = callback; 
    Voice.start('en-US');
  } catch (error) {
    console.error('Error starting voice recognition:', error);
  }
};

const stopSpeechRecognition = () => {
  try {
    commandCallback = null; 
    Voice.stop();
    HapticFeedback.trigger('impactLight', { ignoreAndroidSystemSettings: false });
  } catch (error) {
    console.error('Error stopping voice recognition:', error);
  }
};

export { startSpeechRecognition, stopSpeechRecognition };
