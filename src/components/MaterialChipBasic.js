import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.chipText}>
        You need to save{"\n"}3333.33 Rs/Month
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    paddingLeft: 12,
    paddingRight: 12
  },
  chipText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)"
  }
});

export default MaterialChipBasic;
