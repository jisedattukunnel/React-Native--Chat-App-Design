import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Demo from '../components/Demo';
import DemoScreen from './DemoScreen';
const Stack = createNativeStackNavigator();
function Route({navigation}) {
  //   const navigation = useNavigation();

  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
      </Stack.Navigator>
      ;
    </View>
  );
}

export default Route;

const styles = StyleSheet.create({});
