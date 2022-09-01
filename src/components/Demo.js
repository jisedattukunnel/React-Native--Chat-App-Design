import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sample from './Sample';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Demo = () => {
  return (
    <View style={styles.chatContainer}>
      <View style={styles.chatInner}>
        <Image
          style={[styles.profilePic, {width: 50, height: 50}]}
          source={require('./../images/amsn_192x192.png')}
        />

        <View style={{marginLeft: 20}}>
          <Text style={styles.personName}>Persom 1</Text>
          <Text style={styles.lastMessage}>Hello, How are you ?</Text>
        </View>
        <Icon />
      </View>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'white',
    borderBottomColor: 'grey',
    marginTop: 5,
    height: 80,
    width: '100%',
  },
  chatInner: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    flex: 1,
  },
  profilePic: {
    marginLeft: 10,
  },
  personName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  lastMessage: {
    fontFamily: 'Poppins-Regular',
  },
});
