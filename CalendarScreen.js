import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function CalendarScreen() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/events`)
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

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  const getEventsForDate = (date) => {
    return events.filter((event) => new Date(event.date).toDateString() === date.toDateString());
  };

  const selectedEvents = selectedStartDate ? getEventsForDate(selectedStartDate) : [];

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const customDatesStyles = events.map(event => ({
    date: new Date(event.date),
    style: { backgroundColor: "green" },
    textStyle: { color: "white" },
  }));
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bølgens kalender</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        todayBackgroundColor="#171717"
        selectedDayColor="#1e73be"
        selectedDayTextColor="#ffffff"
        startFromMonday={true}
        weekdays={["Man", "Tirs", "Ons", "Tors", "Fre", "Lør", "Søn"]}
        months={[
          "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December",
        ]}
        previousTitle="Forrige"
        nextTitle="Næste"
        customDatesStyles={customDatesStyles}
      />
      <View style={styles.selectedDateContainer}>
        <Text>Valgte dag er {startDate}</Text>
        {selectedEvents.length > 0 ? (
          selectedEvents.map((event, index) => (
            <View key={index} style={styles.eventContainer}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text>{event.description}</Text>
            </View>
          ))
        ) : (
          <Text>No events on this date.</Text>
        )}
      </View>
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
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  selectedDateContainer: {
    marginTop: 20,
  },
  eventContainer: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  eventTitle: {
    fontWeight: "bold",
  },
});
