import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatInputText from '../components/ChatInputText';
import Chating from '../components/ChatInputText';
import {useNavigation} from '@react-navigation/native';

const ChatWindow = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: 5, backgroundColor: 'lightgrey'}}>
          <View style={styles.messageSend}>
            <Text style={styles.sendTxt}>
              Hello, How are you !{' '}
              <Icon
                style={{
                  color: 'blue',
                  fontSize: 25,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                }}
                name="checkmark-done-sharp"
              />
            </Text>
          </View>
          <View style={styles.messageReceived}>
            <Text style={styles.recTxt}>Hi, I am good. How are you?</Text>
          </View>
          <View style={styles.messageSend}>
            <Text style={styles.sendTxt}>
              In a study analyzing the impact of warmth perception thanks to
              colors over a website, results have shown that a better-perceived
              warmth of website design will impact the ability of a user to come
              back to the solution.
              <Icon
                style={{
                  color: 'blue',
                  fontSize: 25,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                }}
                name="checkmark-done-sharp"
              />
            </Text>
          </View>

          <View style={styles.messageReceived}>
            <Text style={styles.recTxt}>
              The final statement of this study should make us think again about
              our brand identity: it seems more interesting to compare hue and
              brightness than to compare warm and cold colors when trying to
              understand what consumers recall and what leads to a purchase.
            </Text>
          </View>
          <View style={styles.messageSend}>
            <Text style={styles.sendTxt}>
              Hello, How are you !
              <Icon
                style={{
                  color: 'blue',
                  fontSize: 25,
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end',
                }}
                name="checkmark-done-sharp"
              />
            </Text>
          </View>
          <View style={styles.messageReceived}>
            <Text style={styles.recTxt}>Hi, I am good. How are you?</Text>
          </View>
          <View style={[styles.messageSend, {flexDirection: 'row'}]}>
            <Text style={styles.sendTxt}>
              In a study analyzing the impact of warmth perception thanks to
              colors over a website, results have shown that a better-perceived
              warmth of website design will impact the ability of a user to come
              back to the solution.
            </Text>
            <Icon
              style={{
                color: 'blue',
                fontSize: 25,
                padding: 20,
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
              }}
              name="checkmark-done-sharp"
            />
          </View>

          <View style={styles.messageReceived}>
            <Text style={styles.recTxt}>
              The final statement of this study should make us think again about
              our brand identity: it seems more interesting to compare hue and
              brightness than to compare warm and cold colors when trying to
              understand what consumers recall and what leads to a purchase.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View scrollEnabled={false} style={styles.chatArea}>
        <TextInput
          style={styles.chatInputText}
          placeholder="Message"
          editable
          maxLength={40}
          options={{
            title: 'Chats',
          }}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon style={styles.sendIcon} name="send-sharp" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({
  chatArea: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'lightgrey',
  },
  chatInputText: {
    borderWidth: 0,

    margin: 10,
    borderRadius: 50,
    width: '80%',
    backgroundColor: 'white',
    paddingLeft: 20,
    fontSize: 18,
  },
  sendIcon: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: '#458046',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageReceived: {
    justifyContent: 'space-between',
    marginRight: 80,
    padding: 8,
  },
  messageSend: {
    justifyContent: 'space-between',
    marginLeft: 80,
    padding: 8,
  },
  sendTxt: {
    alignSelf: 'flex-end',
    maxWidth: '100%',
    minWidth: '10%',
    backgroundColor: '#12492f',
    paddingRight: 10,
    paddingLeft: 15,
    fontSize: 15,
    padding: 10,
    color: 'white',
    borderRadius: 15,
    fontFamily: 'Poppins',
  },
  recTxt: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    maxWidth: '100%',
    minWidth: '10%',
    backgroundColor: 'white',
    color: 'black',
    paddingRight: 15,
    fontFamily: 'Poppins',
    fontSize: 15,
    padding: 10,
    borderRadius: 15,
  },
});
