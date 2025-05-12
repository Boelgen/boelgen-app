import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function FilmClubScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:filmboelgen@hotmail.com');
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
        source={require("../assets/filmklub.jpg")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>BØLGENS FILMKLUB</Text>
        <Image
          source={require("../assets/boelgen_palle.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Bølgens filmklub præsenterer – vanen tro – hele 8 fantastiske film her i efteråret.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Der vises film:
        </Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>20. januar</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>17. februar</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>24. februar</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>3. marts</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>28. april</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>5. maj</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>19. maj</Text>
        <Text style={[styles.date, { fontWeight: "bold" }]}>12. maj</Text>

        <Text style={styles.paragraph}>
          Det koster kun kr. 100 om året for medlemskab af klubben – ønsker du kun at se enkelte film eller har gæster med, så koster det kr. 40 i midlertidigt medlemskab. Filmene starter altid kl. 19, og før alle film serveres 2 lækre retter, der kun koster kr. 125,-{" "}
          <Text style={[styles.highlight, { color: "#ff3b3b" }]}>
            MAN SKAL MELDE SIG TIL SPISNING.
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          Program for filmene kan du hente hernede eller sende mail til{" "}
          <Text style={styles.link} onPress={handleEmailPress}>
            filmboelgen@hotmail.com
          </Text> – så får du film, handlinger og trailere lige i din indbakke!
        </Text>
        <Text style={styles.paragraph}>
          Man tilmelder sig spisning på samme mail eller ringer på{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('49283450')}>
            49283450
          </Text> /{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('25313452')}>
            25313452
          </Text>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    textAlign: "center",
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  banner: {
    width: "100%",
    height: 200,
    marginTop: 16,
  },
  content: {
    padding: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
  date: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  highlight: {
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
