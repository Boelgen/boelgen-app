import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function IdeaScreen() {
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
        source={require("../assets/ide.jpg")}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>GODE IDEER?</Text>
        <Text style={styles.paragraph}>
          Går du rundt og tumler med et projekt, en ide eller et arrangement som du gerne vil søsætte men måske mangler inspiration, eller fysiske rammer til, så kontakt os.
        </Text>
        <Text style={styles.paragraph}>
          Vi vil rigtig gerne støtte op initiativer der kan komme os alle til gode.
        </Text>
        <Text style={styles.paragraph}>
          Du kan ringe til Udita på{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('25313450')}>
            25313450
          </Text> eller maile på:{" "}
          <Text style={styles.link} onPress={handleEmailPress}>
            ucb62@helsingor.dk
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
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
