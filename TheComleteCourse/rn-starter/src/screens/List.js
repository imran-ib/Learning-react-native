import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListOfNames = [
  { name: "Imran", age: "30", key: 1 },
  { name: "Irshad", age: "25", key: 2 },
  { name: "John", age: "30", key: 3 },
  { name: "Jane", age: "30", key: 4 },
  { name: "Smith", age: "30", key: 5 },
  { name: "Rachel", age: "40", key: 6 },
  { name: "Jannifer", age: "30", key: 7 },
  { name: "Micheal", age: "60", key: 8 },
  { name: "James", age: "30", key: 9 },
  { name: "Tom", age: "30", key: 10 },
  { name: "Brad", age: "30", key: 11 },
  { name: "Nicole", age: "30", key: 12 },
  { name: "Berry", age: "30", key: 13 },
];

const List = () => {
  return (
    <View>
      <FlatList
        data={ListOfNames}
        renderItem={({ item }) => {
          return (
            <Text style={styles.listStyles}>
              Name: {item.name} Age:{item.age}{" "}
            </Text>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listStyles: {
    marginBottom: 50,
  },
});
