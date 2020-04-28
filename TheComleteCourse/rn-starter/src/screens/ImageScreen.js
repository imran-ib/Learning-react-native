import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageScreen = () => {
  return (
    <>
      <ImageDetail
        title="Image of beach"
        source={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Image of forest"
        source={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Image of mountain"
        source={require("../../assets/mountain.jpg")}
      />
      <ImageDetail
        title="Image of beach"
        source={require("../../assets/beach.jpg")}
      />
    </>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});

const ImageDetail = (props) => {
  return (
    <>
      <Text>Title: {props.title} </Text>
      <Image source={props.source} />
    </>
  );
};
