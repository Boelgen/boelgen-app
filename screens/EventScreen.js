import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function EventScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Gå til Jazz"
        onPress={() => navigation.navigate("Jazz")}
        color="#1e73be"
      />
      <Button
        title="Gå til Foredrag"
        onPress={() => navigation.navigate("Lecture")}
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
    gap: 16, // Adds spacing between buttons
  },
});
