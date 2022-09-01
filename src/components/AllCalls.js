import {StyleSheet, Button, Image, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
import Demo from './Demo';
import DemoScreen from '../screens/DemoScreen';

function AllCalls(props) {
  const imageUri = {
    uri: './../images/',
  };
  const image = {
    uri: './../images/cs-user_192x192.png',
  };
  const navigation = useNavigation();
  return (
    <View style={styles.chatContainer}>
      <View style={styles.chatInner}>
        {/* <Text>{imageUri.uri + props.name}</Text> */}
        <Image
          source={require('./../images/cs-user_192x192.png')}
          overlayColor="red"
          style={[styles.profilePic, {width: 50, height: 50}]}
        />

        <View style={{marginLeft: 20}}>
          <Text
            onPress={() => navigation.navigate('Demo')}
            style={styles.personName}>
            {props.name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={[
                props.missedCall ? {color: 'red'} : {color: 'green'},
                styles.callLogo,
              ]}
              name="return-down-back"
            />
            <Text
              style={[
                props.missedCall ? {color: 'red'} : {color: 'black'},
                {width: '40%'},
              ]}>
              {props.time}
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 100, flexDirection: 'row'}}>
          <Icon style={styles.callIcon} name="call-sharp" />
        </View>
        <Icon />
      </View>
    </View>
  );
}

export default AllCalls;

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
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  lastMessage: {
    fontFamily: 'Poppins-Regular',
  },

  msgTime: {
    fontSize: 12,
  },
  callIcon: {
    fontSize: 25,
    color: '#458046',
    flex: 2,
    flexDirection: 'row',
    marginLeft: -30,
  },
  callLogo: {fontSize: 20, fontWeight: '900', marginRight: 20},
});

const Stack = createNativeStackNavigator();
<Stack.Navigator>
  <Stack.Screen name="Demo" component={Demo} />
</Stack.Navigator>;
