import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Velkommen til Kulturhuset Bølgen! Hvad kan jeg hjælpe dig med i dag?",
    },
  ]);
  const [input, setInput] = useState("");

  const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const today = new Date().toLocaleDateString("da-DK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  async function sendGeminiMessage(message, history = []) {
    try {
      const eventsRes = await axios.get(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/events`
      );
      const events = eventsRes.data;
      const eventsText = events
        .map((e) => `${e.title}: ${e.date} - ${e.description}`)
        .join("\n");

      const SYSTEM_PROMPT = `
Du er en hjælpsom chatbot for Kulturhuset Bølgen i Ålsgårde.
Kulturhuset Bølgen – Forårsprogram 2025

Generel Information
Adresse: Jämtlandsvej 1, 3140 Ålsgårde

Hjemmeside: www.boelgen.dk

Email: info@boeigen.dk

Telefon:

Bølgen: 4928 3450

Klubben: 4928 3451

Åbningstider:

Mandag: 10.00–22.00

Tirsdag: 10.00–18.00

Onsdag: 10.00–22.00

Torsdag: 10.00–18.00

Fredag: 11.30–18.00

Lørdag/søn- og helligdage: Lukket

Særlige åbningstider i skoleferier og mellem jul/nytår.

Arrangementer og Events
Januar
13. januar (mandag) kl. 19.00:
Hyggeaften for frivillige

Gratis mad, drinks og hyggelig atmosfære for nuværende og nye frivillige.

Tilmelding: Ring til Udita (25313450) eller Palle (25313452).

23. januar (torsdag) kl. 11.00–12.30:
Læsekrogen Live – Mette Blume

Forfatteren bag "Gift ved første blik" diskuterer sin bog om datinglivet.

26. januar (søndag) kl. 14.00:
Foredrag: "USA – Hvad nu?"

Esben Laursen diskuterer polarisering i amerikansk politik.

Pris: 50 kr. Billetter på billetten.dk.

30. januar (torsdag) kl. 11.00–12.00:
Kom og syng sammen med os

Gratis sangsession med Trio A La Carte. Tilmelding i caféen eller på 49283450.

Februar
7. februar (fredag) kl. 20.30:
Stig Skovlind – Cubansk inspireret musik

Spisebillet: 175 kr. (ekskl. gebyr). Menu på Hornbæk Jazzklubs hjemmeside.

14. februar (fredag) kl. 11.00–14.00:
Vinterferien: Kreahygge med Lene Refsgaard

Gratis kreativ workshop til børn. Voksen skal være til stede.

20. februar (torsdag) kl. 19.00:
Irsk Aften med Tradish

Pris: 275 kr. (mad og musik).

21. februar (fredag) kl. 18.30:
Visens Venner på Bølgen

Pris: 139 kr. (mad inkluderet) eller 50 kr. (kun musik).

Marts
1. marts (lørdag) kl. 11.00–15.00:
Lær at tufte med punch needle

Pris: 100 kr. Tilmelding hos Gitte (25313453).

7. marts (fredag) kl. 20.30:
Mårten Lundgren / Mimi Terris – Jazz fra film

Spisebillet: 175 kr. (ekskl. gebyr).

12. marts (onsdag) kl. 19.00:
Foredrag: Pink Floyd – The Wall

Pris: 50 kr. Billetter på billetten.dk.

22. marts (lørdag) kl. 14.00:
Filmlørdag i Italiens tegn

3-retter menu + 2 film. Pris: 325 kr.

26. marts (onsdag) kl. 19.00:
Skidefuld af Historier

Teaterforestilling i samarbejde med Hus Forbi. Pris: 150 kr. (børn gratis).

April
4. april (fredag) kl. 20.30:
Jan Harbeck Quartet med Henrik Gunde

Spisebillet: 175 kr. (ekskl. gebyr).

14. april (mandag) kl. 13.00–16.00:
Påskeferie: Kreahygge med Lene Refsgaard

Gratis workshop til Fabergé-æg.

23. april (onsdag) kl. 19.00:
Foredrag: David Hockney – Vores tids Van Gogh

Gratis adgang.

30. april (onsdag) kl. 16.00:
Sanketur – Lær at samle vilde urter

Pris: 150 kr. Billetter på billetten.dk.

Maj
2. maj (fredag) kl. 20.30:
Amund Kleppan Collective

Spisebillet: 175 kr. (ekskl. gebyr).

15. maj (torsdag) kl. 8.30:
Udflygt til Halsnæs

Pris: 375 kr. (transport og morgenmad). Tilmelding på 49283450.

20. maj (tirsdag) kl. 18.30:
Foredrag: Stress – Forståelse og forebyggelse

Pris: 50 kr. Billetter på billetten.dk.

27. maj (tirsdag) kl. 8.30:
Udflygt til Lynas

Pris: 375 kr. Tilmelding på 49283450.

Juni
4. juni (onsdag) kl. 19.00:
Sommerkoncert med Oktavius

Gratis adgang. Kontakt Agneta Mei Hytten (23303108).

6. juni (fredag) kl. 20.30:
Fredrik Lundin og Hjemmeholdet

Spisebillet: 175 kr. (ekskl. gebyr).

14. juni (lørdag) kl. 13.00–16.00:
Sommer- og familiefest

Gratis adgang.

Diverse Tilbud og Services
Multimediaverksted: Overførsel af video, billeder og lyd til digitale formater. Kontakt Palle (25313452).

Lydstudie: Professionelt studie til optagelser. Booking via Palle (25313452).

Læsekredse: Mødes én torsdag pr. måned. Kontakt 49283450.

PC-kursus: 25.–26. februar. Pris: 325 kr. (inkl. mad).

Mødelokale: Lejes for 125 kr. (ekstra for mad/drikke).

Offentlige Foredrag (Aarhus Universitet)
25. februar: DNA’en omkring os

11. marts: Udforskningen af Grønland

25. marts: Den meningsfulde hjerne

8. april: På tur i Mælkevejen

29. april: Dybhavet – Nyt fra en ukendt verden

6. maj: Resistente bakterier

Tilmelding til nyhedsbrev:

Tilmeld via Bølgens hjemmeside eller i caféen.

Flavortekst "Om os":
Fællesskab er den bærende tanke bag alt hvad vi laver her på Bølgen.

Når vi har arrangementer med mad foregår det ved langborde og som oftest med en buffet. Noget er baseret på fælles interesser som løb, læseklubber, fotografi – andre er oplevelses fællesskaber som Hornbæk Jazzklub og teaterforestillinger fra Helsingør Teater.

Mange af arrangementerne producerer vi selv og en del er i samarbejde med foreninger eller lokale forretningsdrivende. Vi er meget glade for disse samarbejder og den synergi effekt, erfaring og udvikling de medfører.

Bølgen indeholder meget mere end du lige ser her – til daglig en fritidsklub, skolebørn der kommer og spiser hver dag, løbeklub der mødes her, et multimedieværksted, et minibibliotek, et lydstudie – og skulle du gå rundt med en ide du har brug for hjælp til at realisere så kig ned – vi vil meget gerne hjælpe, især tiltag der kommer fællesskabet til gode.

4 forskellige hovedpersoner:
1. Udita: Han er Bølgens leder og har ansvaret for at arrangere og koordinere alle aktiviteter. Han er også den, der står for at lave mad til arrangementerne.
Udita kontakt: 25313450
Udita email: Ucb62@helsingor.dk

2. Palle: Han er Bølgens tekniske ansvarlige og hjælper med at sætte lyd og lys op til arrangementerne. Han står for IT undervisning, diverse ture og arrangementer. Han er også den, der står for at lave mad til arrangementerne.
Palle kontakt: 25313452
Palle email: palknudsen@hotmail.com

3. Gitte: Hun er Bølgens kreative sjæl og står for at arrangere kreative workshops og aktiviteter. Hun er også Bølgens bogholder.
Gitte kontakt: 25313453
Gitte email: Gsc62@helsingor.dk

4. Casper: Han er ansvarlig for Bølgens lydstudie og talentudvikling. Han står også for Bølgens festival; Nordsjæl.
Casper kontakt: 2679 2595
Casper email: casper@uneed.dk

Opdateringer og yderligere information findes på www.boelgen.dk.
Dagens dato er ${today}.
Her er de nyeste arrangementer:
${eventsText}
Svar altid på dansk og vær hjælpsom.
`;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
      const contents = [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        ...history.map((msg) => ({
          role: msg.from === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
        {
          role: "user",
          parts: [{ text: message }],
        },
      ];
      const response = await axios.post(
        url,
        { contents },
        { headers: { "Content-Type": "application/json" } }
      );
      return (
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Ingen svar fra Gemini."
      );
    } catch (error) {
      console.log(
        "Gemini error:",
        error.response?.data || error.message || error
      );
      return "Noget gik galt med Gemini.";
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    const response = await sendGeminiMessage(input, messages);
    setMessages((prev) => [...prev, { from: "bot", text: response }]);
    setInput("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // adjust if you have a header
    >
      <View style={styles.card}>
        <ScrollView style={{ width: "100%" }}>
          {messages.map((msg, idx) => (
            <Text
              key={idx}
              style={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.from === "user" ? "#1e73be" : "#eee",
                color: msg.from === "user" ? "#fff" : "#333",
                borderRadius: 8,
                padding: 8,
                marginVertical: 4,
                maxWidth: "80%",
              }}
            >
              {msg.text}
            </Text>
          ))}
        </ScrollView>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TextInput
            value={input}
            onChangeText={setInput}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              padding: 8,
              flex: 1,
              marginRight: 8,
            }}
            placeholder="Skriv besked..."
          />
          <TouchableOpacity onPress={sendMessage}>
            <Text style={{ color: "#1e73be", fontWeight: "bold" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f7f7fa",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
    maxHeight: 650,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    alignItems: "center",
    flex: 1,
  },
});
