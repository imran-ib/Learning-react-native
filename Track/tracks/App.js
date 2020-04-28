import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import CreateTrackScreen from "./src/screens/CreateTrackScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignUpSreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="CreateTrack" component={CreateTrackScreen} />
        <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
        <Tab.Screen name="TrackList" component={TrackListScreen} />
      </Tab.Navigator>
    </>
  );
}

export default function Auth() {
  const [isSignedIn, setisSignedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="SignUp" component={SignUpSreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
          </>
        ) : (
          <Stack.Screen name="Tabs" component={Tabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
