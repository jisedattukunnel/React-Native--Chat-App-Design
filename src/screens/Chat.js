// import * as React from 'react';
// import {View, StyleSheet, Button, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Demo from '../components/Demo';

// import {useNavigation} from '@react-navigation/native';

// function Home() {
//   const navigation = useNavigation();

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontFamily: 'Poppins-Bold', fontSize: 50}}>
//         Home Screen
//       </Text>
//       <Demo />
//       <Icon name="settings" size={30} color="black" />
//       <Button
//         title="Demo"
//         onPress={() => {
//           navigation.navigate('Demo');
//         }}
//       />
//     </View>
//   );
// }

// export default Home;

// const styles = StyleSheet.create({});

import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllChats from '../components/AllChats';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DemoScreen from './DemoScreen';
import Route from './Route';

function Chat() {
  const Users = [
    {
      name: 'Jis',
      msg: 'Hello',
    },
    {
      name: 'Abi',
      msg: 'Hello',
    },
    {
      name: 'Alice',
      msg: 'Hei',
    },
    {
      name: 'Bob',
      msg: 'Hi',
    },
    {
      name: 'Sam',
      msg: 'Hi',
    },
    {
      name: 'Riyas',
      msg: 'Hi',
    },
    {
      name: 'John',
      msg: 'Hi',
    },
    {
      name: 'Doe',
      msg: 'Hi',
    },
    {
      name: 'Thammem',
      msg: 'Hi',
    },
    {
      name: 'Sharafiya',
      msg: 'Hi',
    },
    {
      name: 'Ajmal',
      msg: 'Hi',
    },
  ];

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        {Users.map(itm => (
          <AllChats key={itm.name} name={itm.name} msg={itm.msg} />
        ))}

        {/* <AllChats name={names[0]} />
        <AllChats name={names[0]} />
        <AllChats name={names[0]} />
        <AllChats name={names[0]} />
        <AllChats name={names[0]} />
        <AllChats name={names[1]} />
        <AllChats name={names[1]} />
        <AllChats name={names[0]} />
        <AllChats name={names[1]} />
        <AllChats name={names[3]} />
        <AllChats name={names[1]} />
        <AllChats name={names[3]} />
        <AllChats name={names[3]} />
        <AllChats name={names[4]} />
        <AllChats name={names[3]} />
        <AllChats name={names[3]} />
        <AllChats name={names[3]} />
        <AllChats name={names[3]} /> */}
      </ScrollView>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({});
