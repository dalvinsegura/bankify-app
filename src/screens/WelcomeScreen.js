import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { asyncStorageItems } from "../utils/enums";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { getIsFirstTimeOnApp } = useAuth();

  useEffect(() => {
    const checkIsFirstTimeOnApp = async () => {
      const isFirstTimeOnApp = await getIsFirstTimeOnApp();
      if (isFirstTimeOnApp == false) {
        console.log(isFirstTimeOnApp);
        navigation.replace("SignInScreen");
      }
    };
    checkIsFirstTimeOnApp();
  }, []);

  const onPressGetStarter = async () => {
    navigation.replace("SignUpScreen");
    await AsyncStorage.setItem(
      asyncStorageItems.isFirstTimeOnApp,
      JSON.stringify(false)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.mobileAppImage}
        source={require("../assets/mobile-app.png")}
      />

      <Text style={styles.welcomeText}>Welcome to Bankify!</Text>
      <Text style={styles.description}>
        Your reliable way to managing, transfering and increasing the value of
        your personal and business finance.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onPressGetStarter}>
          Get Starter
        </Text>
      </TouchableOpacity>

      <Image
        style={styles.logo}
        source={require("../assets/bankify-logo-white.png")}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181f3d",
    paddingHorizontal: 40,
  },
  mobileAppImage: {
    width: "100%",
    height: "30%",
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 600,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    fontWeight: 400,
    color: "#c4c4c4c4",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E42A61",
    paddingHorizontal: 80,
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  logo: {
    width: "40%",
    height: undefined,
    aspectRatio: 5.7 / 1.1,
    position: "absolute",
    bottom: 40,
  },
});
