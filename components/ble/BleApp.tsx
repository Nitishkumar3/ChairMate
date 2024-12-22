import {useState, useEffect} from 'react';
import{
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
}from 'react-native';
import { Device } from 'react-native-ble-plx';
import DeviceModal from './DeviceConnectionModal';
import Ble from './Ble';

function BleApp() {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState<boolean>(false);
  const { requestPermissions, scanForPeripherals, allDevices } = Ble();

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    requestPermissions((isGranted: boolean) => {
      if (isGranted) {
        scanForPeripherals();
        setIsDeviceConnected(true);

      }
    });
  };
  useEffect(() => {
    if (isDeviceConnected) {
      hideModal();
    }
  }, [isDeviceConnected]);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heartRateTitleWrapper}>
        <Text style={styles.heartRateTitleText}>
        {isDeviceConnected ? 'Device Connected Successfully!' : 'Please Connect to a Bluetooth Device'}
        </Text>
        {isDeviceConnected && allDevices.map((device: Device) => (
          <Text key={device.id} style={styles.devname}>{device.name}</Text>
        ))}
      </View>
            {!isDeviceConnected && (
        <TouchableOpacity onPress={openModal} style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>{'Connect'}</Text>
        </TouchableOpacity>
      )}

      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={hideModal}
        devices={[]}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'black',
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
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
  devname:{
    color:'blue',
    padding:15,
    fontWeight:'800',
    fontSize:30
    

  }
});

export default BleApp;

