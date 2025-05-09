import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventScreen from "./EventScreen";

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Gå til Events"
        onPress={() => navigation.navigate("Event")}
        color="#1e73be"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
