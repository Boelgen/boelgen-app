import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Button } from "react-native";
import { ActivitiesScreen } from "./ActivitiesScreen";

export default function MoreScreen({ navigation }{ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Gå til Workshops"
        onPress={() => navigation.navigate("Workshop")}
        color="#1e73be"
      />
      <Button
        title="Gå til Aktiviteter"
        onPress={() => navigation.navigate("Activities")}
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
