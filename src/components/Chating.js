import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Chating = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{padding: 5, backgroundColor: 'red'}}>
          <View style={styles.messageSend}>
            <Text style={styles.sendTxt}>Hello, How are !</Text>
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
        </View>
      </ScrollView>
      <View>
        <View style={styles.chatArea}>
          <TextInput style={styles.chatInputText} />
          <TouchableOpacity style={styles.sendButton}>
            <Icon style={styles.sendIcon} name="send-sharp" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chating;

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
    paddingRight: 10,
    paddingLeft: 15,
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  recTxt: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    maxWidth: '100%',
    minWidth: '10%',
    backgroundColor: '#004da6',
    color: 'white',
    paddingRight: 15,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    padding: 10,
    borderRadius: 15,
  },
  chatInputText: {fontSize: 50},
});
