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
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [inputsFocused, setInputsFocused] = useState({
    isNameFocused: false,
    isEmailFocused: false,
    isPasswordFocused: false,
  });

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSignUp() {
    createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
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
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.description}>
        Complete theses field for creating a new account and have access to you
        internetbanking.
      </Text>

      <View
        style={
          inputsFocused.isNameFocused
            ? { ...styles.inputBox, borderColor: "#30cdff", borderWidth: 1 }
            : styles.inputBox
        }
      >
        <Icon name="user" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoComplete="name"
          placeholderTextColor="#c4c4c4"
          onChangeText={(text) => setSignUpForm({ ...signUpForm, name: text })}
          onFocus={() =>
            setInputsFocused({ ...inputsFocused, isNameFocused: true })
          }
          onBlur={() =>
            setInputsFocused({ ...inputsFocused, isNameFocused: false })
          }
        />
      </View>
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
          onChangeText={(text) => setSignUpForm({ ...signUpForm, email: text })}
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
            setSignUpForm({ ...signUpForm, password: text })
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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText} onPress={() => {}}>
          Sign-up
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Do you have an account?{" "}
        <Text
          style={styles.loginButton}
          onPress={() => navigation.replace("SignInScreen")}
        >
          Sign-in
        </Text>
      </Text>
      <Image
        style={styles.logo}
        source={require("../../assets/bankify-logo-white.png")}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
