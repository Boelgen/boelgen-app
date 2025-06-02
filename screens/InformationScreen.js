  import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";

  export default function InformationScreenen({ navigation }) {
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

        <Button
          title="Vil du være frivillig?"
          onPress={() => navigation.navigate("Mere", { screen: "Volunteer" })}
          color="#1e73be"
        />

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
