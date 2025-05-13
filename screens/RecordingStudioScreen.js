import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";
import { WebView } from 'react-native-webview';

export default function RecordingStudioScreen() {
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>LYDSTUDIE OG TALENTUDVIKLING</Text>
        <Image
          source={require("../assets/boelgen_kasper.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Skal du lave en demo-cd med din musik? Har du drømt om at lave den der mindfullness/meditations cd? Skal du indsynge en sang til dine bedste venner? Skal du holde Polterabend?
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Skal du …?
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Du kan booke Bølgens Lydstudie til dit projekt.
        </Text>
        <Text style={styles.paragraph}>
          Studiet er udstyret med 24 kanals højkvalitets lydkort, der arbejdes i Pro Tools, Cubase og Logic software med masser af plug-ins, virkelig gode mikrofoner, instrumenter, forstærkere og trommesæt o.s.v.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Ring og aftal pris.
        </Text>
      </View>
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          javaScriptEnabled={true}
          source={{ uri: 'https://www.youtube.com/embed/cVv2XigO2Zs' }}
        />
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
  content: {
    padding: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16/9,
    marginTop: 16,
  },
  video: {
    flex: 1,
  },
});