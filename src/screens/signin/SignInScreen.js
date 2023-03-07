import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import useAuth from "../../hooks/useAuth";
import { async } from "@firebase/util";
import { asyncStorageItems } from "../../utils/enums";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [inputsFocused, setInputsFocused] = useState({
    isNameFocused: false,
    isEmailFocused: false,
    isPasswordFocused: false,
  });

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  function handleSignIn() {
    signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        (async () => {
          const isLoggedIn = JSON.parse(
            await AsyncStorage.getItem(asyncStorageItems.isLoggedIn)
          );
          await AsyncStorage.setItem(asyncStorageItems.isLoggedIn, "true");

          console.log(isLoggedIn);
        })();
        login(user.email);
        navigation.replace("TabNavigator");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Account details</Text>
      <Text style={styles.description}>
        Fill email and password to you internetbanking.
      </Text>

      <View
        style={
          inputsFocused.isEmailFocused
            ? { ...styles.inputBox, borderColor: "#30cdff", borderWidth: 1 }
            : styles.inputBox
        }
      >
        <Icon name="mail" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoComplete="email"
          autoCapitalize="none"
          placeholderTextColor="#c4c4c4"
          onChangeText={(text) => setSignInForm({ ...signInForm, email: text })}
          onFocus={() =>
            setInputsFocused({ ...inputsFocused, isEmailFocused: true })
          }
          onBlur={() =>
            setInputsFocused({ ...inputsFocused, isEmailFocused: false })
          }
        />
      </View>
      <View
        style={
          inputsFocused.isPasswordFocused
            ? { ...styles.inputBox, borderColor: "#30cdff", borderWidth: 1 }
            : styles.inputBox
        }
      >
        <Icon name="lock" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoComplete="password"
          autoCapitalize="none"
          placeholderTextColor="#c4c4c4"
          onChangeText={(text) =>
            setSignInForm({ ...signInForm, password: text })
          }
          onFocus={() =>
            setInputsFocused({ ...inputsFocused, isPasswordFocused: true })
          }
          onBlur={() =>
            setInputsFocused({ ...inputsFocused, isPasswordFocused: false })
          }
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText} onPress={() => {}}>
          Sign-In
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Don't you have an account?{" "}
        <Text
          style={styles.loginButton}
          onPress={() => navigation.replace("SignUpScreen")}
        >
          Sign-up
        </Text>
      </Text>

      <Image
        style={styles.logo}
        source={require("../../assets/bankify-logo-white.png")}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#131F3D",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    marginBottom: 15,
  },
  description: {
    fontSize: 12,
    fontWeight: 400,
    color: "#ffff",
    marginBottom: 15,
  },
  inputBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232c51",
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 5,
    marginBottom: 20,
  },
  iconInput: {
    fontSize: 20,
    color: "#c3deed",
    marginRight: 5,
  },
  input: {
    paddingLeft: 20,
    paddingRight: 30,
    color: "#fff",
  },

  button: {
    width: "100%",
    backgroundColor: "#E42A61",
    paddingVertical: 13,
    borderRadius: 6,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    marginTop: 30,
  },
  loginButton: {
    color: "#e42a61",
    fontWeight: "bold",
  },
  logo: {
    width: "40%",
    height: undefined,
    aspectRatio: 5.7 / 1.1,
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
  },
});
