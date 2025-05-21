import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity,  ScrollView, } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useFocusEffect } from "@react-navigation/native";


export default function CalendarScreen({ navigation }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/events`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || `HTTP error! status: ${response.status}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error.message);
        setLoading(false);
      });
  }, []);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const resetSelectedDate = useCallback(() => {
    setSelectedStartDate(null);
  }, []);

  useFocusEffect(
    useCallback(() => {
      resetSelectedDate();
    }, [resetSelectedDate])
  );

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
  };

  const selectedEvents = selectedStartDate
    ? getEventsForDate(selectedStartDate)
    : [];

  const formatDate = (date) => {
    if (!date) return "";

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("da-DK", options).format(date);
  };

  const handleEventPress = (event) => {
    navigation.navigate("EventScreen", { event });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const customDatesStyles = events.map((event) => ({
    date: new Date(event.date),
    style: { backgroundColor: "#e750a1" },
    textStyle: { color: "white" },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bølgens kalender</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        todayBackgroundColor="#ffffff"
        todayTextStyle={{ fontWeight: "bold", color: "black" }}
        selectedDayColor="#1e73be"
        selectedDayTextColor="#ffffff"
        scrollable={false} // Disable scrolling for the calendar
        startFromMonday={true}
        weekdays={["Man", "Tirs", "Ons", "Tors", "Fre", "Lør", "Søn"]}
        months={[
          "Januar",
          "Februar",
          "Marts",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "December",
        ]}
        previousTitle="Forrige"
        nextTitle="Næste"
        customDatesStyles={customDatesStyles}
      />
      <View style={styles.selectedDateContainer}>
        <Text>{formatDate(selectedStartDate)}</Text>
        {selectedEvents.length > 0 ? (
          <ScrollView style={styles.eventsScrollView}>
            {selectedEvents.map((event) => (
              <TouchableOpacity
                key={event.event_id.toString()}
                style={styles.eventCard}
                onPress={() => handleEventPress(event)}
                activeOpacity={0.7}
              >
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
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventContent}>
                  <Text style={styles.eventTitle} numberOfLines={2}>
                    {event.title}
                  </Text>
                  <Text style={styles.eventDescription} numberOfLines={2}>
                    {event.description}
                  </Text>
                  <Text style={styles.eventPrice}>Pris: {event.price}</Text>
                  <View style={styles.readMoreButton}>
                    <Text style={styles.readMoreButtonText}>LÆS MERE</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <Text>Valgte dag er tom.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  selectedDateContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  eventsScrollView: {
    flex: 1,
  },
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  dateBadge: {
    backgroundColor: "#1e73be",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  dateDay: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  dateMonth: {
    color: "#fff",
    fontSize: 12,
  },
  eventImage: {
    width: 80,
    height: 80,
  },
  eventContent: {
    flex: 1,
    padding: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: 14,
    color: "#666",
  },
  eventPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
  readMoreButton: {
    backgroundColor: "#1e73be",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    alignItems: "center",
  },
  readMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
