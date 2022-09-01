// // In App.js in a new project

import * as React from 'react';
import {
  View,
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo from './src/components/Demo';
import Sample from './src/components/Sample';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from './src/screens/Home';
import Call from './src/screens/Call';
import Profile from './src/screens/Profile';
import Chat from './src/screens/Chat';
import DemoScreen from './src/screens/DemoScreen';
import ChatWindow from './src/screens/ChatWindow';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'chatbubble-ellipses-sharp'
//                 : 'chatbubble-ellipses-sharp';
//               // } else if (route.name === 'Settings') {
//               //   iconName = focused ? 'settings-sharp' : 'settings-sharp';
//             } else if (route.name === 'Call') {
//               iconName = focused ? 'call-sharp' : 'call-sharp';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person-sharp' : 'person-sharp';
//             }

//             return <Icon name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'blue',
//           tabBarInactiveTintColor: 'gray',
//         })}>
//         <Tab.Screen
//           name="Home"
//           options={{
//             title: 'Chats',
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontSize: 24,
//               fontWeight: '900',
//             },
//             headerRight: () => (
//               <View style={{flexDirection: 'row', marginRight: 10}}>
//                 <Icon
//                   style={{marginRight: 20, fontSize: 25}}
//                   name="search-sharp"
//                   onPress={() => alert('This is a button!')}
//                   title="Info"
//                   color="#fff"
//                 />
//                 <Icon
//                   style={{marginRight: 10, fontSize: 25}}
//                   name="settings"
//                   onPress={() => alert('This is a button!')}
//                   title="Info"
//                   color="#fff"
//                 />
//               </View>
//             ),
//             headerStyle: {
//               backgroundColor: '#458046',
//             },
//           }}
//           component={Home}
//           options={{tabBarBadge: 2}}
//         />

//         <Tab.Screen name="Call" options={{tabBarBadge: 3}} component={Call} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbubble-ellipses-sharp'
              : 'chatbubble-ellipses-sharp';
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'settings-sharp' : 'settings-sharp';
          } else if (route.name === 'Call') {
            iconName = focused ? 'call-sharp' : 'call-sharp';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-sharp' : 'person-sharp';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#458046',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chats',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '900',
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon
                style={{marginRight: 20, fontSize: 25}}
                name="search-sharp"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
              <Icon
                style={{marginRight: 10, fontSize: 25}}
                name="settings"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#458046',
          },
        }}
      />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          title: 'Calls',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '900',
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon
                style={{marginRight: 20, fontSize: 25}}
                name="search-sharp"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
              <Icon
                style={{marginRight: 10, fontSize: 25}}
                name="settings"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#458046',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '900',
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon
                style={{marginRight: 10, fontSize: 25}}
                name="settings"
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#458046',
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Demo" component={DemoScreen} />
        <Stack.Screen
          name="ChatWindow"
          component={ChatWindow}
          options={{
            title: 'Chat',
            headerTintColor: '#fff',

            headerTitleStyle: {
              fontSize: 24,
              fontWeight: '900',
            },

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="close-sharp" size={24} color="white" />
              </TouchableOpacity>
            ),

            headerRight: () => (
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Icon
                  style={{marginRight: 20, fontSize: 25}}
                  name="call-sharp"
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
                <Icon
                  style={{marginRight: 10, fontSize: 25}}
                  name="settings"
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#458046',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
