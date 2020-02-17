import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/main";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerStyle: { backgroundColor: "#DA552F" },
            headerTitleAlign: "center",
            headerTintColor: "#fff"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
