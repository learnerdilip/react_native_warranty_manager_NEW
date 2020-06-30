import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "gray",
  },
});
