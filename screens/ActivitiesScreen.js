import React from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";

export default function ActivitiesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Om os"
        onPress={() => navigation.navigate("About")}
        color="#1e73be"
      />
      <Button
        title="Filmklub"
        onPress={() => navigation.navigate("FilmClub")}
        color="#1e73be"
      />
      <Button
        title="Strikning"
        onPress={() => navigation.navigate("Knitting")}
        color="#1e73be"
      />
      <Button
        title="Læseklub"
        onPress={() => navigation.navigate("Reading")}
        color="#1e73be"
      />
      <Button
        title="Møder"
        onPress={() => navigation.navigate("Meeting")}
        color="#1e73be"
      />
      <Button
        title="Idéer"
        onPress={() => navigation.navigate("Idea")}
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
