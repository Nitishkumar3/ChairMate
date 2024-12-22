import {useState} from 'react';
import {PermissionsAndroid,Platform} from 'react-native';
import {Device,BleError,Characteristic,BleManager} from 'react-native-ble-plx';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import DeviceInfo from 'react-native-device-info';
type PermissionCallback = (result:boolean)=>void;
const BleManagerr =new BleManager();
type VoidCallback=(result:boolean)=>void;

interface BluetoothLowEnergyApi{
  requestPermissions(cb: VoidCallback):Promise<void>;
  scanForPeripherals():void;
  allDevices: Device[];
  connectToDevice : (deviceId: string)=>void;
}
function Ble():BluetoothLowEnergyApi{
const [allDevices,setAllDevices] = useState<Device[]>([]);
const requestPermissions=async(cb:VoidCallback)=>{
if(Platform.OS ==='android'){
    const apiLevel =await DeviceInfo.getApiLevel();
    if(apiLevel<31){
    const granted =await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
            title:'Location Permission',
            message: 'Bluetooth Low Energy requires Location',
            buttonNeutral:'Ask Later',
            buttonNegative: 'Cancel',
            buttonPositive:'OK',
        },
    );
    cb(granted ===PermissionsAndroid.RESULTS.GRANTED);
}
else{
    const result=await requestMultiple([
        PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
        PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,

    ]);
    const isAllPermissionsGranted=
    result['android.permission.BLUETOOTH_SCAN']===PermissionsAndroid.RESULTS.GRANTED &&
    result['android.permission.BLUETOOTH_CONNECT']===PermissionsAndroid.RESULTS.GRANTED &&
    result['android.permission.ACCESS_FINE_LOCATION']===PermissionsAndroid.RESULTS.GRANTED 
    cb(isAllPermissionsGranted);
}
}
else{
    cb(true);
}

};
const isDuplicateDevices =(devices:Device[],nextDevice:Device)=>
  devices.findIndex(device => nextDevice.id ===device.id)> -1;
   
  const scanForPeripherals =()=>
    BleManagerr.startDeviceScan(null,null,(error,device)=> {
      if(error){
        console.log(error);
      }
      if(device && device.name?.includes('AutoChair')) { //HC-05
        setAllDevices((prevState: Device[])=> {
          if(!isDuplicateDevices(prevState, device)) {
            return [...prevState, device];
          }
          return prevState;
        });
 
      }
    });
    const connectToDevice=(deviceId:string)=>
    BleManagerr.connectToDevice(deviceId);

    return{
      scanForPeripherals,
      requestPermissions,
      allDevices,
      connectToDevice
    };
  
  
  };
  


export default Ble;