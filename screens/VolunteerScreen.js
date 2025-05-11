import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function VolunteerScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:ucb62@helsingor.dk');
  };

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={require("../assets/frivillig.jpg")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={[styles.heading, { fontWeight: "bold" }]}>
          Frivillige / Bølgevenner
        </Text>
        <Text style={styles.paragraph}>
          Har du lyst til at være frivillig ved arrangementer i vores lille kulturhus? Vi søger personer, som har lyst til at hjælpe ved arrangementer med f.eks. borddækning, servering, kundebetjening i vores cafe, opvask m.m.
        </Text>
        <Text style={styles.paragraph}>
          Vi har i øjeblikket en gruppe af frivillige på omkring 45 – og du vil blive taget godt imod og møde nogle dejlige mennesker.
        </Text>
        <Text style={styles.paragraph}>
          Arbejdet bærer jo lønnen i sig selv – og så altid godt selskab og 2 årlige hyggeaftener med hele gruppen af frivillige. Du kan ringe på{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('49283450')}>
            49283450
          </Text> og høre nærmere, dumpe ind af døren eller sende en mail til{" "}
          <Text style={styles.link} onPress={handleEmailPress}>
            ucb62@helsingor.dk
          </Text>
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Vi glæder os til at se dig.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    marginBottom: 16,
    textAlign: "center",
    color: "#00ccff",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
    color: "#00ccff",
  },
  link: {
    color: "#00ccff",
    textDecorationLine: "underline",
  },
});
