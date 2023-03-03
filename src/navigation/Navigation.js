import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../screens/LoadingScreen";
import useAuth from "../hooks/useAuth";
import SignInScreen from "../screens/signin/SignInScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const { getIsLoading, getIsFirstTimeOnApp, updateIsLoading, dataAuth } =
    useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    (async () => {
      const isLoggedIn = JSON.parse(await AsyncStorage.getItem("isLoggedIn"));
      setIsLoggedIn(isLoggedIn);

      if (isLoggedIn !== undefined) {
        updateIsLoading(false);
      }
    })();
  }, [getIsLoading]);

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
