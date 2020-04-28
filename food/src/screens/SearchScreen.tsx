import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResturantList from "../components/ResturantList";
import useApi from "../hooks/useApi";

const SearchScreen = ({ navigation }: any) => {
  const [term, setTerm] = useState("pasta");
  const [res, onSubmitHandler] = useApi();

  const FilterByPrice = (price: any) => {
    return res.filter((res: any) => {
      return res.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onSubmit={() => onSubmitHandler(term)}
      />
      <ScrollView>
        <ResturantList
          navigation={navigation}
          results={FilterByPrice("$")}
          title="Const Effective"
        />
        <ResturantList
          navigation={navigation}
          results={FilterByPrice("$$")}
          title="Bit Pricy"
        />
        <ResturantList
          navigation={navigation}
          results={FilterByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
