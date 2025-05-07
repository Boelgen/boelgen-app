import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text>Mere/indstillinger</Text>
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
