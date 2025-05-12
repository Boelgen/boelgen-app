import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function NewsLetterScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Banner */}
      <Image
        source={require("../assets/boelgen_banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Nyhedsbrev</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Kulturelle arrangementer:</Text>
          <Text style={styles.sectionText}>
            Få adgang til information og nyheder om vores kommende koncerter,
            teaterforestillinger, udstillinger og meget mere. Vær blandt de
            første til at vide, hvad der sker på Kulturhuset Bølgen.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Lokale Nyheder:</Text>
          <Text style={styles.sectionText}>
            Hold dig ajour med lokale kulturinitiativer og begivenheder. Vi
            dækker ikke kun det, der sker på Kulturhuset Bølgen, men også det
            øvrige pulserende kulturliv i vores nærområde.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Kultur i Dine Hænder:</Text>
          <Text style={styles.sectionText}>
            Med vores nyhedsbrev bringer vi kulturen direkte til din indbakke.
            Ingen grund til at gå glip af en begivenhed igen. Du kan vælge,
            hvornår og hvor du vil fordybe dig i Bølgens kulturelle nyheder.
          </Text>
        </View>

        <Text style={styles.subHeading}>
          Politik om udsendelser og afmelding:
        </Text>
        <Text style={styles.sectionText}>
          Ved at tilmelde dig Bølgens nyhedsbrev giver du samtykke til at
          modtage 1-2 nyhedsbreve pr. måned. Vi ønsker ikke at spamme vores
          modtagere, men blot informere med nyheder fra Bølgen, samt orientere
          om de arrangementer der afholdes. Når du tilmelder dig til
          nyhedsbrevet fra Bølgen, giver du os samtykke til at sende dig
          nyheder, tilbud, information og invitationer til arrangementer mv.
        </Text>
        <Text style={styles.sectionText}>
          Du kan i <Text style={styles.link}>vores persondatapolitik</Text> læse
          mere om hvordan vi behandler dine personoplysninger, samt hvilke
          rettigheder du har.
        </Text>
        <Text style={styles.sectionText}>
          Vi respekterer dit valg og ønsker. Hvis du ønsker at afmelde
          nyhedsbrevet, finder du nemt en afmeldingsmulighed i bunden af hver
          e-mail. Vi vil savne dig, men vi ønsker, at din oplevelse med os er
          lige så fleksibel, som det passer dig.
        </Text>
        <Text style={styles.sectionText}>
          Tilmeld dig Kulturhuset Bølgens Nyhedsbrev i dag og vær en del af
          vores kulturelle fællesskab! Få nemt og bekvemt adgang til bl.a.
          nyheder, informationer og invitationer til arrangementerne.
        </Text>
        <Text style={styles.signature}>
          Sammen dykker vi ned i en verden af kultur og oplevelser.
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
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify",
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  link: {
    color: "#1e73be",
    textDecorationLine: "underline",
  },
  signature: {
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 16,
    textAlign: "center",
  },
});
