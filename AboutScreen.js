import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={require("./assets/boelgen_banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>VELKOMMEN TIL KULTURHUSET BØLGEN</Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Fællesskab er den bærende tanke bag alt hvad vi laver her på Bølgen.
        </Text>
        <Text style={styles.paragraph}>
          Når vi har arrangementer med mad foregår det ved langborde og som
          oftest med en buffet. Noget er baseret på fælles interesser som løb,
          læseklubber, fotografi – andre er oplevelses fællesskaber som Hornbæk
          Jazzklub og teaterforestillinger fra Helsingør Teater.
        </Text>
        <Text style={styles.paragraph}>
          Mange af arrangementerne producerer vi selv og en del er i samarbejde
          med foreninger eller lokale forretningsdrivende. Vi er meget glade for
          disse samarbejder og den synergi effekt, erfaring og udvikling de
          medfører.
        </Text>
        <Text style={styles.paragraph}>
          Bølgen indeholder meget mere end du lige ser her – til daglig en
          fritidsklub, skolebørn der kommer og spiser hver dag, en løbeklub der
          mødes her, et multimedieværksted, et minibibliotek, et lydstudie – og
          skulle du gå rundt med en ide du har brug for hjælp til at realisere
          så kig ned – vi vil meget gerne hjælpe, især tiltag der kommer
          fællesskabet til gode.
        </Text>
        <Text style={styles.paragraph}>
          Vi glæder os til et fantastisk efterår fyldt med oplevelse og
          indlevelse og håber du har lyst til at kigge forbi.
        </Text>
        <Text style={[styles.signature, { fontWeight: "bold" }]}>
          Alle os på Bølgen.
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
  signature: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    textAlign: "center",
  },
});
