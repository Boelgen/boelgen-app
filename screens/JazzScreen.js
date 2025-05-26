import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native";

export default function JazzScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJazzEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/events/filter?q=jazz`
        );
        const data = await response.json();
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(data);
      } catch (error) {
        console.error("Error fetching jazz events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJazzEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1e73be" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.event_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.eventCard}
            onPress={() => navigation.navigate("EventScreen", { event: item })}
          >
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: item.image }}
                style={styles.eventImage}
              />
              <View style={styles.dateBadge}>
                <Text style={styles.dateDay}>
                  {new Date(item.date).getDate()}
                </Text>
                <Text style={styles.dateMonth}>
                  {new Date(item.date)
                    .toLocaleString("da-DK", { month: "short" })
                    .toUpperCase()}
                </Text>
              </View>
            </View>
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDate}>{item.date}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <Text style={styles.eventPrice}>Pris: {item.price}</Text>
              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => navigation.navigate("EventScreen", { event: item })}
              >
                <Text style={styles.readMoreButtonText}>LÆS MERE</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  eventCard: {
    backgroundColor: "transparent",
    marginVertical: 16,
    width: "92%",
    alignSelf: "center",
    padding: 0,
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowOpacity: 0.1,
    elevation: 3,
    flexDirection: "column",
    alignItems: "stretch",
  },
  eventImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  dateBadge: {
    position: "absolute",
    backgroundColor: "rgba(198, 37, 115, 0.9)",
    paddingVertical: 18,
    paddingHorizontal: 14,
    minWidth: 54,
    minHeight: 54,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  dateDay: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 32,
  },
  dateMonth: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 14,
    textTransform: "uppercase",
  },
  eventContent: {
    backgroundColor: "#f2f2f2",
    width: "90%",
    alignSelf: "center",
    marginTop: -32,
    padding: 16,
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowOpacity: 0.1,
    elevation: 3,
    zIndex: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 15,
    color: "rgba(198, 37, 115, 0.9)",
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: 14,
    color: "#666",
  },
  eventPrice: {
    fontSize: 16,
    color: "green",
    marginBottom: 8,
  },
    readMoreButton: {
    backgroundColor: "#e53935",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    borderRadius: 4,
    marginTop: 8,
  },
  readMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
