import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal as DefaultModal} from 'react-native';
import PressableText from './PressableText';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <DefaultModal
        visible={modalVisible}
        transparent={true}
        animationType="fade">
        <View style={styles.modalView}>
          <Text>Hello</Text>
          <PressableText text="Close" onPress={() => setModalVisible(false)} />
        </View>
      </DefaultModal>
      <PressableText
        text="Check Sequence"
        onPress={() => setModalVisible(true)}
      />
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalView: {
    marginTop: 150,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});
