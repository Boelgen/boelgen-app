import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useFocusEffect } from "@react-navigation/native";
import EventCard from "../components/EventCard";

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
    let formattedDate = new Intl.DateTimeFormat("da-DK", options).format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
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

  const CustomButton = ({ title, onPress }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#1e73be",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#ffffff", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={onDateChange}
        todayBackgroundColor="#ffffff"
        todayTextStyle={{ fontWeight: "bold", color: "black" }}
        selectedDayColor="#1e73be"
        selectedDayTextColor="#ffffff"
        scrollable={false}
        startFromMonday={true}
        weekdays={["Man", "Tirs", "Ons", "Tors", "Fre", "Lør", "Søn"]}
        months={["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]}
        previousTitle="Forrige"
        nextTitle="Næste"
        previousComponent={
          <CustomButton title="Forrige" onPress={() => this.refCalendar.handleOnPressPrevious()} />
        }
        nextComponent={
          <CustomButton title="Næste" onPress={() => this.refCalendar.handleOnPressNext()} />
        }
        customDatesStyles={customDatesStyles}
        ref={(ref) => (this.refCalendar = ref)}
      />
      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>{formatDate(selectedStartDate)}</Text>
        {selectedEvents.length > 0 && (
          <ScrollView style={styles.eventsScrollView}>
            {selectedEvents.map((event) => (
              <EventCard
                key={event.event_id.toString()}
                event={event}
                onPress={() => handleEventPress(event)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  selectedDateContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  selectedDateText: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  eventsScrollView: {
    flex: 1,
  },
});
