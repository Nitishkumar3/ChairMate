import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const Pending = () => {
  const doctors = [
    { name: 'Dr. Siva            ', time: '10:00 AM' },
    { name: 'Dr. Hema         ', time: '11:30 AM' },
    { name: 'Dr. Soumya     ', time: '01:00 PM' },
    { name: 'Dr. Alan           ', time: '04:30 PM' },
    { name: 'Dr. Bala           ', time: '06:00 PM' }
  ];

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={doctors}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../images/doctor.png')}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timing}>{item.time}</Text>
                </View>
                <Text style={styles.status}>{'Pending'}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Pending;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A66C2',
    elevation:5

  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    color: 'white',
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    color: 'white',
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#FF8C00',
    padding: 10,
    color: 'white',
    fontSize: 20,
  },
});