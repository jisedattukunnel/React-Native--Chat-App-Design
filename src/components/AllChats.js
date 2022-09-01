import {StyleSheet, Button, Image, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
import Demo from './Demo';
import ChatWindow from '../screens/ChatWindow';

function AllChats(props) {
  const names = props.name;
  const navigation = useNavigation();
  return (
    <View
      onPress={() => navigation.navigate('ChatWindow')}
      style={styles.chatContainer}>
      <View style={styles.chatInner}>
        <Image
          style={[styles.profilePic, {width: 50, height: 50}]}
          source={require('./../images/amsn_192x192.png')}
        />

        <View style={{marginLeft: 20}}>
          <Text
            onPress={() => navigation.navigate('ChatWindow')}
            style={styles.personName}>
            {props.name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="checkmark-done-sharp"
              style={{marginRight: 10, fontSize: 20, color: 'blue'}}
            />
            <Text style={styles.lastMessage}>{props.msg}</Text>
            <Text style={styles.msgTime}>10:22 AM</Text>
          </View>
        </View>
        <Icon />
      </View>
    </View>
  );
}

export default AllChats;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: '#EAEAEA',
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
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  lastMessage: {
    width: '65%',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },

  msgTime: {
    fontSize: 12,
  },
});
