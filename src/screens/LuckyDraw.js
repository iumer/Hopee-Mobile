import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";
import MaterialRadio1 from "../components/MaterialRadio1";

function LuckyDraw(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Row}>
        <View style={styles.rect1}>
          <Text style={styles.hopee1}>HOPEE</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Maininterrface")}
          style={styles.button}
        >
          <Icon name="home" style={styles.icon1}></Icon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Maininterrface")}
        style={styles.button2}
      >
        <CupertinoButtonBlueTextColor
          signOut="Register"
          style={styles.cupertinoButtonBlueTextColor1}
        ></CupertinoButtonBlueTextColor>
      </TouchableOpacity>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}></View>
        <Image
          source={require("../assets/images/Picture_1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/Picture_11.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <View style={styles.set1Row}>
        <Text style={styles.set1}>Set 1</Text>
        <MaterialRadio1 style={styles.materialRadio1}></MaterialRadio1>
      </View>
      <View style={styles.set2Row}>
        <Text style={styles.set2}>Set 2</Text>
        <MaterialRadio1 style={styles.materialRadio2}></MaterialRadio1>
      </View>
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
    marginTop: 4
  },
  hopee1: {
    fontFamily: "roboto-700",
    color: "rgba(255,248,248,1)",
    fontSize: 35,
    width: 111,
    height: 41,
    marginTop: 18,
    marginLeft: 71
  },
  button: {
    width: 59,
    height: 76,
    marginLeft: 2
  },
  icon1: {
    color: "rgba(1,4,13,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 15,
    marginLeft: 10
  },
  rect1Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 51,
    marginRight: 7
  },
  button2: {
    width: 164,
    height: 85,
    marginTop: 444,
    marginLeft: 92
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
    marginTop: 22,
    marginLeft: 38
  },
  rect2: {
    top: 0,
    left: 23,
    width: 362,
    height: 278,
    position: "absolute",
    backgroundColor: "rgba(0,199,159,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    top: 16,
    left: 0,
    width: 231,
    height: 234,
    position: "absolute"
  },
  image2: {
    top: 19,
    left: 202,
    width: 189,
    height: 230,
    position: "absolute"
  },
  rect2Stack: {
    width: 391,
    height: 278,
    marginTop: -493,
    marginLeft: -24
  },
  set1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 32
  },
  materialRadio1: {
    height: 40,
    width: 40,
    marginLeft: 15
  },
  set1Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 122,
    marginRight: 111
  },
  set2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 31,
    marginTop: 3
  },
  materialRadio2: {
    height: 40,
    width: 40,
    marginLeft: 21
  },
  set2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 118,
    marginRight: 111
  }
});

export default LuckyDraw;
