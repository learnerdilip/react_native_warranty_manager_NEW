import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "../Constants";

export default function HomePage() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputText}>
        <TextInput
          value={text}
          onChangeText={(enteredText) => setText(enteredText)}
          placeholder=" Enter room name..."
        />
      </View>
      <View style={styles.inputButton}>
        <Button
          color={Constants.primaryColor}
          title="ADD"
          onPress={() => setItems((prev) => [...prev, text])}
        />
      </View>
      {/* <View>
        {items.length > 0 &&
          items.map((item, index) => <Text key={index}>{item}</Text>)}
      </View> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 25,
    // marginStart: "10%",
  },
  inputText: {
    width: "50%",
    borderBottomWidth: 2,
    marginHorizontal: 5,
  },
  inputButton: {
    width: "20%",
    marginHorizontal: 5,
  },
});
