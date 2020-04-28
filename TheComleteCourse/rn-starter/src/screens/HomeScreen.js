import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <>
      <Text style={styles.text}>HomeScreen Updated</Text>
      <Button
        onPress={() => props.navigation.navigate("Component")}
        title="View Demo Component"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="View Lists "
      />
      <Button
        onPress={() => props.navigation.navigate("Images")}
        title="View Images"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Add Color"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Counter")}>
        <Text>Couter</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 5,
  },
});

export default HomeScreen;
