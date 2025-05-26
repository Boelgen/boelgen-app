import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import EventCard from "../components/EventCard";

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/events/search?query=${query}`
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    } else {
      setEvents([]);
    }
  };

  const groupEventsByMonth = (events) => {
    const groupedEvents = {};
    events.forEach((event) => {
      const month = new Date(event.date)
        .toLocaleString("da-DK", { month: "long" })
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
    today.setHours(0, 0, 0, 0);
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });
  };

  const filteredEvents = filterEventsFromToday(
    [...events].sort((a, b) => new Date(a.date) - new Date(b.date))
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          marginTop: 50,
          padding: 10,
          borderRadius: 8,
          backgroundColor: "#f0f0f0",
          height: 60,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginBottom: 20,
        }}
        placeholder="Søg..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={Object.entries(groupEventsByMonth(filteredEvents))}
        keyExtractor={(item, index) => index.toString()}
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
                onPress={() => navigation.navigate("EventScreen", { event })}
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
    alignItems: "center",
    justifyContent: "center",
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
