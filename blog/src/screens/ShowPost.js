import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowPost = ({ route, navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditScreen", { id: id })}>
        <Feather name="edit" size={30} />
      </TouchableOpacity>
    ),
  });

  const item = state.find((item) => item.id === id);

  return (
    <View>
      <Text>
        {item.title}: {id}
      </Text>
      <Text>
        {item.content}: {id}
      </Text>
    </View>
  );
};

export default ShowPost;

const styles = StyleSheet.create({});
