import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function MoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Gå til Workshops"
        onPress={() => navigation.navigate("Workshop")}
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
