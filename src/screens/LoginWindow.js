import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import CupertinoButtonBlueTextColor from "../components/CupertinoButtonBlueTextColor";

function LoginWindow(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <Text style={styles.hopee1}>HOPEE</Text>
      </View>
      <TextInput
        placeholder="  Enter Email"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        style={styles.placeholder}
      ></TextInput>
      <Text style={styles.email}>Email</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Maininterrface")}
        style={styles.button2}
      >
        <CupertinoButtonBlueTextColor
          signOut="Sign Out"
          signOut="Sign In"
          style={styles.cupertinoButtonBlueTextColor1}
        ></CupertinoButtonBlueTextColor>
      </TouchableOpacity>
      <TextInput
        placeholder="  Enter Password"
        keyboardAppearance="light"
        clearButtonMode="while-editing"
        textBreakStrategy="highQuality"
        secureTextEntry={true}
        style={styles.placeholder1}
      ></TextInput>
      <Text style={styles.password}>Password</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("SignUp")}
        style={styles.button}
      >
        <Text style={styles.password1}>Not a User?{"\n"}Sign Up then!</Text>
      </TouchableOpacity>
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
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 96,
    marginLeft: 42
  },
  email: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: -91,
    marginLeft: 41
  },
  button2: {
    width: 130,
    height: 60,
    overflow: "hidden",
    marginTop: 202,
    marginLeft: 109
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
    marginLeft: 15
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 47,
    width: 279,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -134,
    marginLeft: 42
  },
  password: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 32,
    marginTop: -97,
    marginLeft: 42
  },
  button: {
    width: 231,
    height: 100,
    marginTop: 178,
    marginLeft: 67
  },
  password1: {
    fontFamily: "roboto-regular",
    color: "rgba(0,199,159,1)",
    fontSize: 35,
    marginTop: 8,
    marginLeft: 16
  }
});

export default LoginWindow;
