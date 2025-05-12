import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";

export default function KnitScreen() {
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image
        source={{ uri: 'https://boelgen.dk/wp-content/uploads/2025/01/strik_2025.jpg' }}
        style={styles.banner}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.heading}>STRIK OG HÆKLING</Text>
        <Text style={styles.paragraph}>
          Strik og hækling, eller måske noget helt andet håndarbejde du har lyst til at sysle med.
        </Text>
        <Text style={styles.paragraph}>
          Du er meget velkommen til at komme og hygge med te / kaffe og lidt sødt. Vi hjælper og inspirerer hinanden.
        </Text>
        <Text style={styles.paragraph}>
          Hver anden torsdag kl. 15 – 17.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Første gang 23. januar, derefter 6. februar, 20. februar, 6. marts, 20. marts, 3. april, 24. april, 8. maj, 22. maj.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Tilmelding hos Gitte{" "}
          <Text style={styles.link} onPress={() => handlePhonePress('25313453')}>
            25313453
          </Text>
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>
          Pris kr. 100
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
