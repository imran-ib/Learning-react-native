import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, setTerm, onSubmit }: any) => {
  const [Values, setValues] = useState("");
  return (
    <View style={styles.background}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyles}
        placeholder="Search"
        onChangeText={(text) => setTerm(text)}
        defaultValue={Values}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
  background: {
    marginTop: 15,
    margin: 10,
    borderRadius: 10,
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  inputStyles: {
    fontSize: 18,
    flex: 1,
  },
});
