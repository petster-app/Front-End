import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Slider
} from "react-native";
import SignUp from "./SignUp";
import firebase from "../components/firebase";
import InputScreen from "./InputScreen";

export default function SignIn(props) {
  const [email, setEmail] = useState("evanbc1@gmail.com");
  const [password, setPassword] = useState("1234Asdf");

  async function handleLogin() {
    try {
      await firebase.login(email, password);
      await setPassword("");
      props.navigation.navigate("InputScreen");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.signUp}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  login: {
    color: "#00CDBC"
  },
  loginContainer: {
    margin: 15
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 50
  },
  text: {
    textAlign: "center",
    fontFamily: "Nunito-Bold"
  },
  bodyText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Nunito",
    width: 300
  },
  textInput: {
    height: 30,
    width: "90%",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#00CDBC",
    borderRadius: 40,
    width: 310,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  signUp: {
    fontSize: 30,
    fontFamily: "Nunito-Bold",
    color: "white"
  }
});
