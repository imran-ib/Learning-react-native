import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: action.payload };
    case "DEC":
      return { ...state, count: action.payload };

    default:
      throw new Error();
  }
};

const CouterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>{state.count}</Text>
      <Button
        title="Increament"
        onPress={() => dispatch({ type: "INC", payload: state.count + 1 })}
      />
      <Button
        title="Decreament"
        onPress={() => dispatch({ type: "DEC", payload: state.count - 1 })}
      />
    </View>
  );
};

export default CouterScreen;

const styles = StyleSheet.create({});
