import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Gå til Nyhedsbrev"
        onPress={() => navigation.navigate("Nyhedsbrev")}
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
