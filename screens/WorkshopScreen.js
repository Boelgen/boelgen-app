import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WORKSHOPS = [
  { title: "Multimedieværksted", screen: "MediaStudio", icon: "camera" },
  { title: "Lydstudie og talentudvikling", screen: "RecordingStudio", icon: "musical-notes" },
];

export default function WorkshopScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.menuList}>
          {WORKSHOPS.map((item) => (
            <TouchableOpacity
              key={item.screen}
              style={styles.menuButton}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color="#fff"
                style={{ marginRight: 16 }}
              />
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
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
    width: "90%",
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
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1e73be",
    marginBottom: 32,
    letterSpacing: 1,
  },
  menuList: {
    width: "100%",
    alignItems: "center",
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e73be",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 18,
    width: 300,
    boxShadowColor: "#1e73be",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowOpacity: 0.08,
    boxShadowRadius: 4,
    elevation: 2,
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
