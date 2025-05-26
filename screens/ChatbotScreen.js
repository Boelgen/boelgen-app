import React, { useState } from "react";
import prompt from "../prompt";
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
import Markdown from "react-native-markdown-display";

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
${prompt}
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
          {messages.map((msg, idx) =>
            msg.from === "bot" ? (
              <Markdown
                key={idx}
                style={{
                  body: {
                    alignSelf: "flex-start",
                    backgroundColor: "#eee",
                    color: "#333",
                    borderRadius: 8,
                    padding: 8,
                    marginVertical: 4,
                    maxWidth: "80%",
                  },
                }}
              >
                {msg.text}
              </Markdown>
            ) : (
              <Text
                key={idx}
                style={{
                  alignSelf: "flex-end",
                  backgroundColor: "#1e73be",
                  color: "#fff",
                  borderRadius: 8,
                  padding: 8,
                  marginVertical: 4,
                  maxWidth: "80%",
                }}
              >
                {msg.text}
              </Text>
            )
          )}
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
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 8 },
    boxShadowOpacity: 0.12,
    boxShadowRadius: 16,
    elevation: 8,
    alignItems: "center",
    flex: 1,
  },
});
