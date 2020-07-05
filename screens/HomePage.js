import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "../Constants";
import Card from "../components/Card";

export default function HomePage() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  return (
    <View>
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
            color={Constants.primaryTextColor}
            title="ADD"
            onPress={() =>
              setItems((prev) => {
                setText("");
                return [...prev, text];
              })
            }
          />
        </View>
        {/* <StatusBar style="auto" /> */}
      </View>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={({ item }) => <Card id={item} title={item} />}
        />
      </SafeAreaView>
      {/* <View style={styles.RoomcardsContainer}>
        {items.length > 0 &&
          items.map((item, index) => (
            <View key={index} text={item}>
              <Card text={item} />
            </View>
          ))}
      </View> */}
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
  RoomcardsContainer: {
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "center",
    flexWrap: "wrap",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    marginLeft: 40,
  },
});
