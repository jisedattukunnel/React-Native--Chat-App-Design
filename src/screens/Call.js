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
import AllCalls from '../components/AllCalls';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DemoScreen from './DemoScreen';
import Route from './Route';

function Call() {
  const Users = [
    {
      name: 'Jis',
      time: '12:24 PM',
      missed: true,
    },
    {
      name: 'Alice',
      time: '10:25 PM',
      missed: false,
    },
    {
      name: 'Bob',
      time: '07:12 AM',
      missed: true,
    },
    {
      name: 'Sam',
      time: '8:58 PM',
      missed: false,
    },
    {
      name: 'Riyas',
      time: '12:24 PM',
      missed: true,
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        {Users.map(itm => (
          <AllCalls
            key={itm.name}
            name={itm.name}
            time={itm.time}
            missedCall={itm.missed}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Call;

const styles = StyleSheet.create({});
