import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import LoadingScreen from "../screens/LoadingScreen";
import AccountInfoScreen from "../screens/overview/AccountInfoScreen";

import useAuth from "../hooks/useAuth";
import { asyncStorageItems, colorsPalette } from "../utils/enums";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const { getIsLoading, updateIsLoading, dataAuth } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = JSON.parse(
        await AsyncStorage.getItem(asyncStorageItems.isLoggedIn)
      );
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

        <Stack.Group>
          <Stack.Screen
            name="AccountInfoScreen"
            component={AccountInfoScreen}
            options={{
              headerTitle: "Account Info",
              headerLeft: () => (
                <FeatherIcon
                  name="chevron-left"
                  size={25}
                  color="#fff"
                  onPress={() => navigation.goBack()}
                />
              ),
              headerRight: () => (
                <FeatherIcon name="settings" size={25} color="#fff" />
              ),
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#fff",
                fontSize: 19,
                fontWeight: "600",
              },
              headerStyle: {
                backgroundColor: colorsPalette.darkBlue,
                color: "#fff",
              },
            }}
          />
        </Stack.Group>
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
