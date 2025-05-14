import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function ReadingClubScreen() {
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>BØLGENS LÆSEKREDSE</Text>
        <Image
          source={require("../assets/boelgen_gitte.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Er du en læsehest og kan du lide at diskutere litteraturen med andre…. så meld dig på en af Bølgens læsekredse.
        </Text>
        <Text style={styles.paragraph}>
          Hvert hold mødes én torsdag i måneden kl. 10.00 til ca. 11.30. Vi beslutter i fællesskab, hvad vi skal læse i løbet af året og er ca. 12 personer på et hold.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Kontakt Gitte, hvis du har lyst til at vide mere om læsekredsene:{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('49283456')}>
            49283456
          </Text>
        </Text>
      </View>
      <Image
        source={require("../assets/boger.jpg")}
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
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
