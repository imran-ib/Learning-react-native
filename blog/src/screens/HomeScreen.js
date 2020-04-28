import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const { state, DeleteBlogPost } = useContext(Context);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SinglePost", { id: item.id })
              }>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {" "}
                  {item.title} id: {item.id}{" "}
                </Text>
                <TouchableOpacity onPress={() => DeleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 22,
  },
  icon: {
    fontSize: 18,
  },
});
