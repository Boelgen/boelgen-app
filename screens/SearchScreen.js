import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  Linking,
} from "react-native";

export default function SearchScreen() {
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

  // Helper: Group events by month
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

  // Helper: Filter events from today
  const filterEventsFromToday = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });
  };

  // Sort events by date before grouping
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
              <View style={styles.eventCard} key={event.event_id.toString()}>
                <View style={{ position: "relative" }}>
                  <Image
                    source={{ uri: event.image }}
                    style={styles.eventImage}
                  />
                  <View style={styles.dateBadge}>
                    <Text style={styles.dateDay}>
                      {new Date(event.date).getDate()}
                    </Text>
                    <Text style={styles.dateMonth}>
                      {new Date(event.date)
                        .toLocaleString("da-DK", { month: "short" })
                        .toUpperCase()}
                    </Text>
                  </View>
                </View>
                <View style={styles.eventContent}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text
                    style={styles.eventDescription}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                  >
                    {event.description}
                  </Text>
                  <Text style={styles.eventPrice}>Pris: {event.price}</Text>
                  <Text
                    style={styles.readMoreButton}
                    onPress={() => Linking.openURL(event.ticket_link)}
                  >
                    LÆS MERE
                  </Text>
                </View>
              </View>
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
  eventImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  eventContent: {
    backgroundColor: "#f2f2f2",
    width: "90%",
    alignSelf: "center",
    marginTop: -32,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    zIndex: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
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
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
    fontWeight: "bold",
    overflow: "hidden",
    alignSelf: "flex-start",
    borderRadius: 4,
    marginTop: 8,
  },
});
