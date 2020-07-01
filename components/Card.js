import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "../Constants";

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Constants.primaryColor,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 10,
    width: 100,
    alignItems: "center",
  },
  cardText: {
    color: "white",
    fontSize: 15,
  },
});
