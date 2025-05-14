import { StyleSheet, View, Button } from "react-native";

export default function MoreScreen({ navigation }) {
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
      <Button
        title="Gå til Nyhedsbrev"
        onPress={() => navigation.navigate("Nyhedsbrev")}
        color="#1e73be"
      />
      <Button
        title="Offentlige Foredrag"
        onPress={() => navigation.navigate("Lecture")}
        color="#1e73be"
      />
      <Button
        title="Hornbæk Jazzklub"
        onPress={() => navigation.navigate("Jazz")}
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
