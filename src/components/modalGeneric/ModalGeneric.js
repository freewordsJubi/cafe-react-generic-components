import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import genericStyle from "../styles/genericStyle";
import ButtonGeneric from '../buttonGeneric/ButtonGeneric';
const ModalGeneric = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={props.style}>
      <Modal
        animationType={props.animationType}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={props.styleContentModal}>
          <View style={props.styleModalView}>
            <Text style={props.styleModalTitle}>{props.titleModal}</Text>
            {props.children}
            {
              props.buttonClose === true &&
              <ButtonGeneric
                style={props.styleButtonClose}
                callBackPress={() => setModalVisible(!modalVisible)}
                title={props.textButtonClose}
                styleTitle={props.styleTextButtonClose}
              />}
          </View>
        </View>
      </Modal>

      {props.buttonOpen === true &&
        <ButtonGeneric
          style={props.styleButtonOpen}
          styleImg={props.styleImg}
          source={props.source}
          callBackPress={() => setModalVisible(!modalVisible)}
          title={props.textOpenButton}
          styleTitle={props.styleTextButtonOpen}
        />
      }
    </View>
  );
};

ModalGeneric.defaultProps = {
  style: genericStyle.containerModal,
  styleContentModal: genericStyle.containerModal,
  styleModalView:genericStyle.modalView,
  buttonClose: true,
  buttonOpen: true,
  textButtonClose: 'Close',
  styleButtonClose:  genericStyle.button,
  styleButtonOpen: genericStyle.button,
  styleTextButtonClose: genericStyle.text,
  styleTextButtonOpen: genericStyle.text,
  styleModalTitle: genericStyle.textTitle
}

export default ModalGeneric;