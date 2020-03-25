import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import firebase from "../components/firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SignOut(props) {
  async function handleLogout() {
    console.log("logged out");
    await firebase.logout();
    props.navigation.navigate("HomeScreen");
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          margin: 30
        }}
      >
        <Text style={{ width: 35 }}></Text>
        <IconOcticons
          name="person"
          color="rgb(239,89,68)"
          size={50}
        ></IconOcticons>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SearchScreen")}
        >
          <ArrowIcon
            name="arrow-right"
            color="rgb(184,184,184)"
            size={35}
          ></ArrowIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.paw}>
        <Icon name="paw" color="rgb(239,89,68)" size={50}></Icon>
      </View>
      <Text
        style={{
          fontSize: 21,
          fontFamily: "Nunito-Bold",
          marginBottom: 50,
          marginTop: 10
        }}
      >
        Hi,{" "}
        <Text style={{ textTransform: "capitalize" }}>
          {firebase.getCurrentName().toUpperCase()}
        </Text>{" "}
        !
      </Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("FavoritesScreen")}
      >
        <View style={styles.button}>
          <View style={styles.buttonContent}>
            <Icon name="heart" color="rgb(239,89,68)" size={20}></Icon>
            <Text style={styles.text}>Favorites</Text>
            <Text></Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* 
      <View style={styles.button}>
        <View style={styles.buttonContent}>
          <IconIonicons
            name="ios-notifications-outline"
            color="rgb(239,89,68)"
            size={20}
          ></IconIonicons>
          <Text style={styles.text}>Notifications</Text>
          <Text></Text>
        </View>
      </View> */}

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <View style={styles.buttonContent}>
          <IconMaterialCommunityIcons
            name="logout"
            color="rgb(239,89,68)"
            size={20}
          ></IconMaterialCommunityIcons>
          <Text style={styles.text}>Logout</Text>
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(248,248,248)"
  },
  paw: {
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 150,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgb(255,255,255)",
    width: 340,
    height: 50,
    borderRadius: 40,
    marginBottom: 30,
    fontSize: 14,
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    color: "rgb(239,89,68)",
    fontSize: 14,
    fontFamily: "Nunito-Bold",
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonContent: {
    color: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
