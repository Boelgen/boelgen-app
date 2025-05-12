import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function InformationScreen() {
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
      <View style={styles.content}>
        <Text style={styles.heading}>KONTAKT</Text>
      </View>
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Leder</Text>
      <Image
        source={require("../assets/boelgen_udita.jpg")}
        style={styles.profile}
        resizeMode="contain"
      />
      <View style={styles.contactContainer}>
        <Text style={[styles.paragraph, styles.contactName]}>Udita Budde</Text>
        <Text style={styles.paragraph}>Tlf. 2531 3450</Text>
        <Text style={[styles.paragraph, styles.contactEmail]}>
          Ucb62@helsingor.dk
        </Text>
      </View>

      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
        Festivalleder og Talentudvikler
      </Text>
      <Image
        source={require("../assets/boelgen_kasper.jpg")}
        style={styles.profile}
        resizeMode="contain"
      />
      <View style={styles.contactContainer}>
        <Text style={[styles.paragraph, styles.contactName]}>
          Casper Skovgaard
        </Text>
        <Text style={styles.paragraph}>Tlf. 2679 2595</Text>
        <Text style={[styles.paragraph, styles.contactEmail]}>
          casper@uneed.dk
        </Text>
      </View>

      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Multimedie</Text>
      <Image
        source={require("../assets/boelgen_palle.jpg")}
        style={styles.profile}
        resizeMode="contain"
      />
      <View style={styles.contactContainer}>
        <Text style={[styles.paragraph, styles.contactName]}>
          Palle Knudsen
        </Text>
        <Text style={styles.paragraph}>Tlf. 2531 3452</Text>
        <Text style={[styles.paragraph, styles.contactEmail]}>
          palknudsen@hotmail.com
        </Text>
      </View>

      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Multimedie</Text>
      <Image
        source={require("../assets/boelgen_gitte.jpg")}
        style={styles.profile}
        resizeMode="contain"
      />
      <View style={styles.contactContainer}>
        <Text style={[styles.paragraph, styles.contactName]}>Gitte Dahl</Text>
        <Text style={styles.paragraph}>Tlf. 2531 3453</Text>
        <Text style={[styles.paragraph, styles.contactEmail]}>
          Gsc62@helsingor.dk
        </Text>
      </View>

      <Image
        source={require("../assets/boelgen_praktisk.png")}
        style={styles.banner}
        resizeMode="contain"
      />
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
  contactContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  contactName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  contactEmail: {
    color: "#1e73be",
    textDecorationLine: "underline",
  },
  profile: {
    width: 150, // Set the width of the image
    height: 150, // Set the height of the image (same as width)
    borderRadius: 50, // Half of the width/height to make it circular
    borderWidth: 2, // Optional: Add a border
    borderColor: "#ddd", // Optional: Border color
    marginBottom: 16, // Add spacing below the image
  },
});
