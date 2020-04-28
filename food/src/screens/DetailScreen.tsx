import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  console.log("DetailScreen -> id", id);
  return (
    <View>
      <Text>DetailScreen: {id}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
