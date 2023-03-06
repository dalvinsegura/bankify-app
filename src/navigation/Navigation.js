import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../screens/LoadingScreen";
import useAuth from "../hooks/useAuth";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { getIsLoading, updateIsLoading, dataAuth } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = JSON.parse(await AsyncStorage.getItem("isLoggedIn"));
      setIsLoggedIn(response);

      if (response !== undefined) {
        updateIsLoading(false);
      }
    })();
  }, [getIsLoading()]);

  if (getIsLoading()) {
    return (
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  if (isLoggedIn == true) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
