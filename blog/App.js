import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/BlogContext";
import HomeScreen from "./src/screens/HomeScreen";
import ShowPost from "./src/screens/ShowPost";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Blog",

              // headerRight: () => <Feather name="plus" size={30} />,
            }}
          />
          <Stack.Screen name="SinglePost" component={ShowPost} />
          <Stack.Screen name="CreateScreen" component={CreateScreen} />
          <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
