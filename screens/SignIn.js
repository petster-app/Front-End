import React, { useState, useEffect } from "react";
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
  const [inputComplete, setInputComplete] = useState(false);
  const [buttonColor, setButtonColor] = useState("rgb(202,202,202)");

  useEffect(() => {
    if (inputComplete) {
      setButtonColor("rgb(239,89,68)");
    } else {
      setButtonColor("rgb(202,202,202)");
    }
  }, [inputComplete]);

  function checkInput() {
    if (email.length && password.length) {
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  }

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
      <Text style={styles.header}>Log in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => {
            setEmail(email);
            checkInput();
          }}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => {
            setPassword(password);
            checkInput();
          }}
          value={password}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={handleLogin}
        >
          <Text style={styles.submit}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    width: "80%"
  },
  header: {
    alignSelf: "flex-start",
    fontFamily: "Nunito-Bold",
    fontSize: 50,
    width: "80%",
    marginBottom: 10,
    marginTop: 50
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
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: 60,
    paddingBottom: 5,
    fontSize: 20,
    fontFamily: "Nunito"
  },
  buttonContainer: {
    marginTop: 380
  },
  button: {
    borderRadius: 40,
    width: 340,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 15
  }
});
