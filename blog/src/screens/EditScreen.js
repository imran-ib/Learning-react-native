import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  const item = state.find((item) => item.id === id);

  const [title, settitle] = useState(item.title);

  const [content, setcontent] = useState(item.content);

  return (
    <View>
      <Text style={styles.haeding}>Edit Blog</Text>
      <Text style={styles.lable}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => settitle(text)}
      />
      <Text style={styles.lable}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setcontent(text)}
      />
      <Button
        onPress={() => {
          AddBlogPost(title, content, () => navigation.navigate("Home"));
        }}
        title="Edit Post"
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  lable: {
    fontSize: 24,
    marginLeft: 10,
  },
  haeding: {
    fontSize: 36,
    marginVertical: 20,
    textAlign: "center",
  },
});
