import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const { dataAuth } = useAuth();
  const navigation = useNavigation();
  console.log("Account: ", dataAuth);

  const logout = async () => {
    await AsyncStorage.setItem("isLoggedIn", JSON.stringify("false"));
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Click me" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
