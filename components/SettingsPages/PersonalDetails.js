import React from 'react';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';

const PersonalDetails = () => {
  const isAndroid = Platform.OS === 'android';
  return (
    <WebView
      startInLoadingState={false}
      style={{ flex: 1, width: Dimensions.get('window').width }}
      source={{ uri: 'https://autochair.techmedok.com/edit-data' }}
      cacheEnabled={false}
      builtInZoomControls={isAndroid ? false : true}
      displayZoomControls={isAndroid ? false : true}

    />
  );
}

export default PersonalDetails;
