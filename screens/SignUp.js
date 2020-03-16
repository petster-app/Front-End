import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import SignIn from "./SignIn";
import firebase from "../components/firebase";

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    console.log("checkin input", firstName.length, firstName);
    if (
      firstName.length &&
      lastName.length &&
      email.length &&
      password.length
    ) {
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  }

  async function handleSignUp() {
    try {
      console.log("handle sign up", password);
      await firebase.register(name, email, password);
      const options = {
        method: "POST",
        body: JSON.stringify({ userName: email }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      };

      fetch(`https://petster3-back-end.herokuapp.com/users`, options);
      props.navigation.navigate("SignIn");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's get started</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First Name"
          label="First name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={firstName => {
            setFirstName(firstName);
            checkInput();
          }}
          value={firstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Last name"
          label="First name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={lastName => {
            setLastName(lastName);
            checkInput();
          }}
          value={lastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email address"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => {
            setEmail(email);
            checkInput();
          }}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password (6+ characters)"
          secureTextEntry
          autoCapitalize="none"
          style={styles.textInput}
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
          onPress={handleSignUp}
        >
          <Text style={styles.submit}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    alignSelf: "flex-start",
    fontFamily: "Nunito-Bold",
    fontSize: 50,
    width: "80%",
    marginTop: "2.5%"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    width: "80%"
  },
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: "5%",
    fontSize: 20,
    fontFamily: "Nunito",
    paddingBottom: 5
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginTop: "3%",
    color: "rgb(74,74,74)",
    fontSize: 16
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 15
  },
  buttonContainer: {
    marginBottom: "10%"
  },
  button: {
    borderRadius: 40,
    width: 340,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  }
});
