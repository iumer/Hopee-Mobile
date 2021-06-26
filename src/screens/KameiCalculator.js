import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";

function KameiCalculator(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.rect1Row}>
        <View style={styles.rect1}>
          <Text style={styles.hopee1}>HOPEE</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Maininterrface")}
          style={styles.button2}
        >
          <Icon name="home" style={styles.icon1}></Icon>
        </TouchableOpacity>
      </View>
      <Text style={styles.itemName}>Item Name:</Text>
      <TextInput
        placeholder="  Enter Item"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        style={styles.placeholder1}
      ></TextInput>
      <Text style={styles.itemPrice}>Item Price:</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled")}
        style={styles.button}
      >
        <CupertinoButtonBlueTextColor
          signOut="Calculate"
          style={styles.cupertinoButtonBlueTextColor1}
        ></CupertinoButtonBlueTextColor>
      </TouchableOpacity>
      <TextInput
        placeholder="  Enter Price"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        style={styles.placeholder2}
      ></TextInput>
      <Text style={styles.selectTimePeriod}>Select Time period:</Text>
      <MaterialCheckboxWithLabel
        style={styles.materialCheckboxWithLabel}
      ></MaterialCheckboxWithLabel>
      <MaterialCheckboxWithLabel
        style={styles.materialCheckboxWithLabel1}
      ></MaterialCheckboxWithLabel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(199,199,199,1)"
  },
  rect1: {
    width: 241,
    height: 67,
    backgroundColor: "rgba(0,199,159,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 6
  },
  hopee1: {
    fontFamily: "roboto-700",
    color: "rgba(255,248,248,1)",
    fontSize: 35,
    width: 111,
    height: 41,
    marginTop: 13,
    marginLeft: 68
  },
  button2: {
    width: 46,
    height: 68,
    marginLeft: 7
  },
  icon1: {
    color: "rgba(1,4,13,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 14,
    marginLeft: 3
  },
  rect1Row: {
    height: 73,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 52,
    marginRight: 14
  },
  itemName: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 49,
    marginLeft: 33
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 10,
    marginLeft: 33
  },
  itemPrice: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 16,
    marginLeft: 32
  },
  button: {
    width: 130,
    height: 71,
    marginTop: 246,
    marginLeft: 111
  },
  cupertinoButtonBlueTextColor1: {
    height: 44,
    width: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    backgroundColor: "rgba(0,199,159,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 13,
    marginLeft: 15
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -303,
    marginLeft: 33
  },
  selectTimePeriod: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 19,
    marginLeft: 32
  },
  materialCheckboxWithLabel: {
    height: 40,
    width: 90,
    marginTop: 23,
    marginLeft: 119
  },
  materialCheckboxWithLabel1: {
    height: 40,
    width: 90,
    marginLeft: 119
  }
});

export default KameiCalculator;
