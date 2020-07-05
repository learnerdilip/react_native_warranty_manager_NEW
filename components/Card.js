import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "../Constants";

export default function Card(props) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={styles.cardText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "lavender",
    marginVertical: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  cardText: {
    color: Constants.primaryTextColor,
    fontSize: 15,
  },
});
