import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";
import CupertinoButtonInfo2 from "../components/CupertinoButtonInfo2";

function Maininterrface(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <Text style={styles.hopee}>HOPEE</Text>
        </View>
        <Icon name="home" style={styles.icon}></Icon>
      </View>
      <View style={styles.cupertinoButtonInfoStack}>
        <CupertinoButtonInfo
          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LuckyDraw")}
          style={styles.button3}
        ></TouchableOpacity>
      </View>
      <View style={styles.cupertinoButtonBlueTextColorStack}>
        <CupertinoButtonBlueTextColor
          style={styles.cupertinoButtonBlueTextColor}
        ></CupertinoButtonBlueTextColor>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginWindow")}
          style={styles.button2}
        ></TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("KameiCalculator")}
        style={styles.button}
      >
        <CupertinoButtonInfo2
          style={styles.cupertinoButtonInfo2}
        ></CupertinoButtonInfo2>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(199,199,199,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect: {
    width: 241,
    height: 67,
    backgroundColor: "rgba(0,199,159,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  hopee: {
    fontFamily: "roboto-700",
    color: "rgba(255,248,248,1)",
    fontSize: 35,
    width: 111,
    height: 41,
    marginTop: 13,
    marginLeft: 73
  },
  icon: {
    color: "rgba(1,4,13,1)",
    fontSize: 40,
    marginLeft: 11,
    marginTop: 6
  },
  rectRow: {
    height: 67,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 49,
    marginRight: 19
  },
  cupertinoButtonInfo: {
    height: 44,
    position: "absolute",
    left: 20,
    top: 16,
    backgroundColor: "rgba(0,199,159,1)",
    overflow: "visible",
    right: 31,
    borderWidth: 1,
    borderColor: "#000000"
  },
  button3: {
    top: 0,
    left: 0,
    width: 245,
    height: 86,
    position: "absolute"
  },
  cupertinoButtonInfoStack: {
    height: 86,
    marginTop: 101,
    marginLeft: 65,
    marginRight: 50
  },
  cupertinoButtonBlueTextColor: {
    height: 44,
    width: 100,
    position: "absolute",
    left: 16,
    top: 12,
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
    borderColor: "#000000"
  },
  button2: {
    top: 0,
    left: 0,
    width: 129,
    height: 68,
    position: "absolute"
  },
  cupertinoButtonBlueTextColorStack: {
    width: 129,
    height: 68,
    marginTop: 258,
    marginLeft: 122
  },
  button: {
    width: 353,
    height: 57,
    marginTop: -266,
    marginLeft: 5
  },
  cupertinoButtonInfo2: {
    height: 42,
    backgroundColor: "rgba(0,199,159,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 7,
    marginLeft: 81,
    marginRight: 96
  }
});

export default Maininterrface;
