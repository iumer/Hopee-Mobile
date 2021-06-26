import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialToast3 from "../components/MaterialToast3";
import Icon from "react-native-vector-icons/Entypo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <MaterialToast3 style={styles.materialToast3}></MaterialToast3>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Maininterrface")}
        style={styles.button}
      >
        <Icon name="home" style={styles.icon1}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(199,199,199,1)"
  },
  materialToast3: {
    width: 289,
    height: 149,
    marginTop: 237,
    marginLeft: 21
  },
  button: {
    width: 76,
    height: 83,
    marginTop: -349,
    marginLeft: 142
  },
  icon1: {
    color: "rgba(1,4,13,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 20,
    marginLeft: 23
  }
});

export default Untitled;
