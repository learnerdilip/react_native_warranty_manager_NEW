import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "../Constants";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> The Warranty App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    backgroundColor: Constants.primaryColor,
    height: 50,
  },
  headerText: {
    color: Constants.primaryTextColor,
    fontSize: 20,
  },
});

export default Header;
