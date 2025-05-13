import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function MeetingRoomScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={require("../assets/meeting.jpg")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>MØDELOKALE</Text>
        <Text style={styles.paragraph}>
          Almennyttige foreninger kan gratis låne vores mødelokale når det er ledigt.
        </Text>
        <Text style={styles.paragraph}>
          Andre foreninger er velkomne til at låne Bølgens mødelokale i åbningstiden for 250 kr.
        </Text>
        <Text style={styles.paragraph}>
          Skal I have kaffe/te og kage eller ostemadder koster det yderligere 50 kr. pr. person.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
});
