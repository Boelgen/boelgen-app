import React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";

export default function WorkshopScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Multimedie"
        onPress={() => navigation.navigate("MediaStudio")}
        color="#1e73be"
      />
      <Button
        title="Lydstudie"
        onPress={() => navigation.navigate("RecordingStudio")}
        color="#1e73be"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
});
