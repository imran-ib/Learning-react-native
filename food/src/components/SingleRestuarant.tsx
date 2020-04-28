import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SingleRestuarant = ({ item }: any) => {
  return (
    <View style={styles.constainer}>
      <Image style={styles.ImageStyles} source={{ uri: item.image_url }} />
      <Text style={styles.titleStyles}>{item.name}</Text>
      <Text>
        {item.rating} Stars , {item.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

export default SingleRestuarant;

const styles = StyleSheet.create({
  constainer: {
    marginLeft: 15,
  },
  ImageStyles: {
    width: 250,
    height: 150,
    borderRadius: 4,
  },
  titleStyles: {
    fontWeight: "bold",
    marginTop: 10,
  },
});
