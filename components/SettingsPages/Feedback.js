import React from 'react';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';

const Feedback = () => {
  const isAndroid = Platform.OS === 'android';
  return (
    <WebView
      javaScriptEnabled={true}
      startInLoadingState={false}
      style={{ flex: 1, width: Dimensions.get('window').width }}
      source={{ uri: 'https://autochair.techmedok.com/feedback' }}
      cacheEnabled={false}
      builtInZoomControls={isAndroid ? false : true}
      displayZoomControls={isAndroid ? false : true}
    />
  );
}

export default Feedback;
