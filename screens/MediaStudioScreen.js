import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function MediaStudioScreen() {
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>MULTIMEDIEVÆRKSTED</Text>
        <Image
          source={require("../assets/boelgen_palle.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.subheading, { fontWeight: "bold" }]}>
          RED DINE MINDER FØR DE FORSVINDER
        </Text>
        <Text style={styles.paragraph}>
          I Bølgens multimedieværksted overfører vi dine videobånd (alle formater), lysbilleder, negativer, papirbillede, cassettebånd, spolebånd, LP plader samt smalfilm til dvd og/eller USB.
        </Text>
        <Text style={styles.paragraph}>
          Vi har fået meget ros gennem tiden og også professionelle har benyttet sig af vores service.
        </Text>
        <Text style={styles.paragraph}>
          Herudover kan du også låne et godt video camera til din fest/ferie – komme ned og få hjælp til at klippe det hele sammen bagefter – vi arbejder i Adobe Premiere.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Ring til Palle på{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('25313452')}>
            25313452
          </Text> og spørg ind til netop dit projekt og få en god pris.
        </Text>
      </View>
      <Image
        source={require("../assets/medie.jpg")}
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
  subheading: {
    fontSize: 16,
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
