import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.TextStyles}>ComponentsScreen Component</Text>
      <Text style={styles.MyStyles}>My Name is Imran Irshad</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  TextStyles: {
    fontSize: 30,
    color: "red",
  },
  MyStyles: {
    color: "green",
  },
});
