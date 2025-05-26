import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import EventCard from "../components/EventCard";

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
          <EventCard
            event={item}
            onPress={() => navigation.navigate("EventScreen", { event: item })}
          />
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
});
