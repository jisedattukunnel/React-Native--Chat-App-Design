import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatInputText = () => {
  return (
    <View style={styles.chatArea}>
      <TextInput style={styles.chatInputText} editable maxLength={40} />
      <TouchableOpacity style={styles.sendButton}>
        <Icon style={styles.sendIcon} name="send-sharp" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInputText;

const styles = StyleSheet.create({
  chatArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatInputText: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 50,
    width: '80%',
    backgroundColor: 'white',
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
});
