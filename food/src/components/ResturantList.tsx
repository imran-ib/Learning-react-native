import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SingleRestuarant from "./SingleRestuarant";

type ListProps = {
  title: string;
};

const ResturantList: React.FC<any> = ({ title, results, navigation }) => {
  return (
    <View>
      <Text style={styles.HeadingStyles}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailScreen", { id: item.id })
              }>
              <SingleRestuarant item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResturantList;

const styles = StyleSheet.create({
  HeadingStyles: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
});
