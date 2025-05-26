import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import EventCard from "../components/EventCard";

export default function HomeScreen({ navigation }) {
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
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const groupEventsByMonth = (events) => {
    const groupedEvents = {};
    events.forEach((event) => {
      const month = new Date(event.date)
        .toLocaleString("da-DK", {
          month: "long",
        })
        .toUpperCase();
      if (!groupedEvents[month]) {
        groupedEvents[month] = [];
      }
      groupedEvents[month].push(event);
    });
    return groupedEvents;
  };

  const filterEventsFromToday = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Today set to midnight for comparison
    return events.filter(event => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0); // Event set to midnight to compare
      return eventDate >= today;
    });
  };

  const handleEventPress = (event) => {
    // Navigate to EventScreen in current tab stack
    navigation.navigate('EventScreen', { event });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1e73be" />
      </View>
    );
  }

  const filteredEvents = filterEventsFromToday(events);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(groupEventsByMonth(filteredEvents))}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={styles.monthHeader}>
              <View style={styles.redLine} />
              <Text style={styles.monthText}>{item[0]}</Text>
              <View style={styles.redLine} />
            </View>
            {item[1].map((event) => (
              <EventCard
                key={event.event_id.toString()}
                event={event}
                onPress={() => handleEventPress(event)}
              />
            ))}
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
  monthHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  redLine: {
    flex: 1,
    height: 1,
    marginHorizontal: 16,
    backgroundColor: "rgba(198, 37, 115, 0.9)",
  },
  monthText: {
    marginHorizontal: 10,
    fontSize: 36,
    fontWeight: "bold",
    color: "#1E72BE",
  },
});
