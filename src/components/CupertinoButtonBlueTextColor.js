import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonBlueTextColor(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.signOut}>{props.signOut || "Sign Out"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  signOut: {
    color: "rgba(255,255,255,1)",
    fontSize: 17
  }
});

export default CupertinoButtonBlueTextColor;
