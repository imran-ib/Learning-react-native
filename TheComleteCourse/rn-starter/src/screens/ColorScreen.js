import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [Color, setColor] = useState([]);
  return (
    <View style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onPress={() => {
          setColor([...Color, RandRGB()]);
        }}
        title="Add Color"
      />
      <FlatList
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          />
        )}
        data={Color}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});

const RandRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red} , ${green} , ${blue})`;
};
