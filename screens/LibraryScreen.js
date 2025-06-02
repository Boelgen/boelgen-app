import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function LibraryScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >   
      <Image
        source={require("../assets/boelgen_banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/boelgen_2.jpg")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>VELKOMMEN TIL KULTURHUSET BØLGEN</Text>
      </View>
      <View style={styles.content}></View>
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
        Helsingør Hovedbibliotek
      </Text>
      <Text style={styles.paragraph}>
        Her kan du gå direkte ind og reservere eller bestille dine bøger, cd’ere
        eller dvd. Bestillingerne kan afhentes i Bølgens bilioteksservice.
        Hjemmeside: Helsingør Hovedbibliotek
      </Text>
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
        Computer og internet
      </Text>
      <Text style={styles.paragraph}>
        På Bølgen er der mulighed for at benytte vores internetforbindelser samt
        tekstbehandlingscomputere gratis. Du kan altid få hjælp, hvis du er i
        tvivl om hvordan man benytter udstyret. Der findes trådløst internet så
        man kan tage sin egen bærbare med på Bølgen og komme på internettet.
      </Text>
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
        Kopimaskine
      </Text>
      <Text style={styles.signature}>
        Der er mulighed for at benytte vores kopimaskine. Priser: Oplyses i
        Bølgens bibliotek
      </Text>
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
  signature: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
});
