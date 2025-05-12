import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
} from "react-native";

export default function HomeScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/events`
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.event_id.toString()} // Use `event_id` as the unique key
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
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
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <Text style={styles.eventPrice}>Pris: {item.price} DKK</Text>
              <Text
                style={styles.readMoreButton}
                onPress={() => Linking.openURL(item.ticket_link)}
              >
                LÆS MERE
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  eventItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  eventImage: {
    width: "100%",
    height: 180,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  eventPrice: {
    fontSize: 16,
    color: "green",
    marginBottom: 8,
  },
  eventLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  readMoreButton: {
    backgroundColor: "#e53935",
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
    fontWeight: "bold",
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  eventContent: {
    backgroundColor: "#f2f2f2",
    width: "90%", // slightly smaller than image
    alignSelf: "center",
    marginTop: -32, // overlap the image
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    zIndex: 2,
  },
  dateMonth: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 14,
    textTransform: "uppercase",
  },
  dateDay: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 32,
  },
  dateBadge: {
    position: "absolute",
    left: 16,
    backgroundColor: "rgba(198, 37, 115, 0.9)",
    paddingVertical: 18, // Reduced to fit text better
    paddingHorizontal: 14, // Increased for width
    minWidth: 54, // Ensures enough width
    minHeight: 54, // Ensures enough height
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  eventCard: {
    backgroundColor: "transparent",
    marginVertical: 16,
    width: "92%",
    alignSelf: "center",
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    flexDirection: "column",
    alignItems: "stretch",
  },
});
