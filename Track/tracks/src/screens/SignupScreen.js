import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpSreen = () => {
  const { state, signup } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();

  console.log("SignUpSreen -> state", state);
  navigation.setOptions({
    headerShown: false,
  });

  console.log("SignUpSreen -> signup", signup);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup For Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setemail}
          label="Email"
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setpassword}
          label="password"
        />
      </Spacer>
      {state.ErrorMessage ? (
        <Spacer>
          <Text style={styles.ErrorMessage}>{state.ErrorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          onPress={() => {
            signup({ email, password });
          }}
          title="Singup"
        />
      </Spacer>
    </View>
  );
};

export default SignUpSreen;

const styles = StyleSheet.create({
  ErrorMessage: {
    color: "red",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});
