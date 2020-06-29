import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import HomePage from "./screens/HomePage";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
