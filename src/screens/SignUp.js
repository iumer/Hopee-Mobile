import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";
import MaterialRadio from "../components/MaterialRadio";

function SignUp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <Text style={styles.hopee1}>HOPEE</Text>
      </View>
      <Text style={styles.enterName}>Enter Name</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("LoginWindow")}
        style={styles.button}
      >
        <CupertinoButtonBlueTextColor
          signOut="Sign Up"
          style={styles.cupertinoButtonBlueTextColor1}
        ></CupertinoButtonBlueTextColor>
      </TouchableOpacity>
      <TextInput
        placeholder="  Enter Name"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        style={styles.placeholder1}
      ></TextInput>
      <Text style={styles.enterEmail}>Enter Email</Text>
      <TextInput
        placeholder="  Enter Email"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        style={styles.placeholder2}
      ></TextInput>
      <Text style={styles.enterPassword}>Enter Password</Text>
      <View style={styles.placeholder3StackStackStack}>
        <View style={styles.placeholder3StackStack}>
          <View style={styles.placeholder3Stack}>
            <TextInput
              placeholder="  Enter Password"
              keyboardAppearance="light"
              clearButtonMode="while-editing"
              textBreakStrategy="highQuality"
              secureTextEntry={true}
              style={styles.placeholder3}
            ></TextInput>
            <Text style={styles.enterGender}>Enter Gender:</Text>
          </View>
          <View style={styles.materialRadioStack}>
            <MaterialRadio style={styles.materialRadio}></MaterialRadio>
            <MaterialRadio style={styles.materialRadio1}></MaterialRadio>
            <MaterialRadio style={styles.materialRadio2}></MaterialRadio>
          </View>
        </View>
        <View style={styles.maleStack}>
          <Text style={styles.male}>Male</Text>
          <Text style={styles.female}>Female</Text>
        </View>
        <Text style={styles.other}>Other</Text>
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
    marginTop: 46,
    marginLeft: 65
  },
  hopee1: {
    fontFamily: "roboto-700",
    color: "rgba(255,248,248,1)",
    fontSize: 35,
    width: 111,
    height: 41,
    marginTop: 11,
    marginLeft: 74
  },
  enterName: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 21,
    marginLeft: 27
  },
  button: {
    width: 119,
    height: 59,
    overflow: "hidden",
    marginTop: 384,
    marginLeft: 126
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
    marginTop: 7,
    marginLeft: 10
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -437,
    marginLeft: 42
  },
  enterEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 9,
    marginLeft: 24
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 4,
    marginLeft: 42
  },
  enterPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: 5,
    marginLeft: 21
  },
  placeholder3: {
    top: 0,
    left: 21,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  enterGender: {
    top: 46,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32
  },
  placeholder3Stack: {
    top: 0,
    left: 0,
    width: 300,
    height: 84,
    position: "absolute"
  },
  materialRadio: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 0,
    top: 0
  },
  materialRadio1: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 0,
    top: 27
  },
  materialRadio2: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 0,
    top: 48
  },
  materialRadioStack: {
    top: 83,
    left: 214,
    width: 40,
    height: 88,
    position: "absolute"
  },
  placeholder3StackStack: {
    top: 0,
    left: 0,
    width: 300,
    height: 171,
    position: "absolute"
  },
  male: {
    top: 0,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 26
  },
  female: {
    top: 29,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 22
  },
  maleStack: {
    top: 85,
    left: 128,
    width: 73,
    height: 54,
    position: "absolute"
  },
  other: {
    top: 140,
    left: 142,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 23
  },
  placeholder3StackStackStack: {
    width: 300,
    height: 171,
    marginTop: 6,
    marginLeft: 21
  }
});

export default SignUp;
