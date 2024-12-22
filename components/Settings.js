import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Settings({ navigation }) {
  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this cool app!',

      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via ${result.activityType}`);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };


  const openSocialMediaLink = (url) => {
    Linking.openURL(url)
      .then(() => {
        console.log(`Opened URL: ${url}`);
      })
      .catch((error) => {
        console.error(`Error opening URL: ${url}`, error);
      });
  };

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >

        <View style={styles.seg}>
          <Text style={styles.blue}>Profile</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Personal Details');
            }}>
            <Text style={styles.pad}>Personal details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Change Password');
            }}>
            <Text style={styles.pad}>Change password</Text>
          </TouchableOpacity>
          <Text style={styles.pad}>Notifications</Text>
          <Text style={styles.pad}>Email notifications</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Logout');
            }}>
            <Text style={styles.pad}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seg}>
          <Text style={styles.blue}>Languages</Text>
          <Text style={styles.pad}>Primary language</Text>
          <Text style={styles.pad}>Other languages</Text>
        </View>
        <View style={styles.seg}>
          <Text style={styles.blue}>Support and feedback</Text>
          <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('Faq');
          }}>
            <Icon name="question-circle" color="#add633" size={25} style={styles.icon} />
            <Text style={styles.itemText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('Feedback');
          }}>
            <Icon name="comments" color="#e0301e" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Send us feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('Privacy Policy');
          }} >
            <Icon name="info" color="#000000" size={25} style={styles.icont} />
            <Text style={styles.itemText}>Terms & Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seg}>
          <Text style={styles.blue}>Community</Text>
          <TouchableOpacity style={styles.item} onPress={() => {
            navigation.navigate('Rating');
          }}>
            <Icon name="star" color="#ffb234" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Rate ChairMate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={shareApp}>
            <Icon name="share-alt-square" color="#000000" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seg}>
          <Text style={styles.blue}>Connect with us</Text>
          <TouchableOpacity style={styles.item} onPress={() => openSocialMediaLink('https://www.facebook.com/profile.php?id=61550883153970&mibextid=ZbWKwL')}>
            <Icon name="facebook-square" color="#3b5998" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => openSocialMediaLink('https://twitter.com/Autochair1234?t=wfQrkqDAHYSLJ3RI40NFbg&s=08')}>
            <Icon name="twitter" color="#00acee" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => openSocialMediaLink('https://www.youtube.com/@AutoChair-1234')}>
            <Icon name="youtube" color="#c4302b" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Youtube</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => openSocialMediaLink('https://instagram.com/auto_chair?utm_source=qr&igshid=OGIxMTE0OTdkZA==')}>
            <Icon name="instagram" color="#962fbf" size={25} style={styles.icon} />
            <Text style={styles.itemText}>Instagram</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    padding: 10,
    paddingRight: 20,
    fontWeight: "600",
    color: 'black',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5
  },
  itemText: {
    fontWeight: "600",
    color: 'black',
    fontSize: 20
  },
  blue:
  {
    color: '#0A66C2',
    padding: 10,
    fontSize: 20,
    marginLeft: 10
  },
  pad: {
    color: 'black',
    fontWeight: '600',
    padding: 10,
    marginLeft: 10,
    fontSize: 20
  },
  icont: {
    marginRight: 15,
    marginLeft: 5
  },
});

export default Settings;
