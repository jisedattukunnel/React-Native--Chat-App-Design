import {
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  return (
    <View style={{flex: 1, padding: 20}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.nameEditForm}>
              <Text style={{marginBottom: 30}}>Enter Your Name</Text>
              <TextInput placeholder="Name" style={styles.input} />
            </View>
            <Pressable>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-evenly',
                  alignItems: 'flex-end',
                  paddingLeft: 40,
                  paddingRight: 40,
                  direction: 'rtl',
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{color: 'black'}}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{color: 'black'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.proImage}>
        <Image source={require('./../images/elki-icon_192x192.png')} />
      </View>

      <View style={styles.editFirstRow}>
        <View>
          <Icon style={styles.icons} name="person-sharp" />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 25,
              marginLeft: 20,
            }}>
            Jis
          </Text>
          <Text style={{marginLeft: 20}}>
            Hello user, this is not your username
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon style={styles.icons} name="pencil-sharp" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.editFirstRow}>
        <View>
          <Icon style={styles.icons} name="call-sharp" />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 15,
              marginLeft: 20,
            }}>
            +91 85479 83028
          </Text>
        </View>
        <View>
          <Icon style={styles.icons} name="pencil-sharp" />
        </View>
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    padding: 5,
  },
  proImage: {
    alignItems: 'center',
    marginTop: 30,
  },
  editFirstRow: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icons: {
    fontSize: 25,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: 230,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  nameEditForm: {
    padding: 40,
  },
});
