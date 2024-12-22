import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';


const Map = () => {
  return <WebView
    javaScriptEnabled={true}
    startInLoadingState={false}
    style={{ flex: 1, width: Dimensions.get('window').width }}
    source={{ uri: 'https://techmedok.com/maps/index.html' }} 
    cacheEnabled={false}/>
}
export default Map;