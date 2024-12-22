import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../component/Header';

const Completed = () => {
  const doctors = [
    { name: 'Dr. Manoj   ', time: '10:00 AM' },
    { name: 'Dr. Hari       ', time: '12:30 AM' },
    { name: 'Dr. Sneha   ', time: '01:00 PM' },
    { name: 'Dr. Salman ', time: '03:30 PM' },
    { name: 'Dr. Rafi       ', time: '05:00 PM' }];
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
                <Text style={styles.status}>{'Completed'}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: '94%',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
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
    color: '#fff',
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    color: '#fff',
  },
  status: {
    marginLeft: 60,
    borderRadius: 10,
    backgroundColor: '#0db10a',
    padding: 10,
    color: '#fff',
    fontSize: 20,
  },
});