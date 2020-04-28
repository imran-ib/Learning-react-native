import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./components/Spacer";
import { useNavigation } from "@react-navigation/native";

const SignUpSreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Spacer>
        <Text h3>Signup For Tracker</Text>
      </Spacer>
      <Spacer>
        <Input label="Email" />
      </Spacer>
      <Spacer>
        <Input label="Password" />
      </Spacer>
      <Spacer>
        <Button title="Singup" />
      </Spacer>
    </View>
  );
};

export default SignUpSreen;

const styles = StyleSheet.create({});
