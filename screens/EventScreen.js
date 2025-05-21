import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Linking, ScrollView, TouchableOpacity, Dimensions, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EventScreen({ route, navigation }) {
  const { event } = route.params;
  const [imageSize, setImageSize] = useState({ width: Dimensions.get("window").width, height: 200 });
  const deviceWidth = Dimensions.get("window").width;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:
        event.title.length > 20 ? event.title.substring(0, 20) + "..." : event.title,
    });
  }, [navigation, event.title]);

  useEffect(() => {
    if (event.image) {
      Image.getSize(event.image, (width, height) => {
        const aspectRatio = width / height;
        const calculatedHeight = deviceWidth / aspectRatio;
        
        const finalHeight = Math.min(calculatedHeight, deviceWidth * 0.75);
        
        setImageSize({ width: deviceWidth, height: finalHeight });
      }, (error) => {
        console.error("Error getting image size:", error);
        setImageSize({ width: deviceWidth, height: deviceWidth * 0.6 });
      });
    }
  }, [event.image, deviceWidth]);

  const hasContent = (value) => {
    return value !== null && value !== undefined && value !== '' && value !== 'NULL';
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: event.image }}
        style={[styles.eventImage, { width: imageSize.width, height: imageSize.height }]}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.eventDate}>
            {new Date(event.date).toLocaleDateString("da-DK", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
          {event.time && <Text style={styles.eventTime}>{event.time}</Text>}
        </View>
        {(event.is_cancelled === 1 || event.is_cancelled === true) && (
          <View style={styles.cancelledBadge}>
            <Text style={styles.cancelledText}>AFLYST</Text>
          </View>
        )}
        <Text style={styles.eventTitle}>{event.title}</Text>
        <View style={styles.separator} />
        <Text style={styles.eventDescription}>{event.description}</Text>
        {event.location && (
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={20} color="#1e73be" />
            <Text style={styles.locationText}>{event.location}</Text>
          </View>
        )}
        {event.price && (
          <View style={styles.priceContainer}>
            <Ionicons name="pricetag" size={20} color="#1e73be" />
            <Text style={styles.priceText}>Pris: {event.price}</Text>
          </View>
        )}
        {hasContent(event.additional_information) && (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Yderligere information</Text>
            <Text style={styles.additionalInfoText}>{event.additional_information}</Text>
          </View>
        )}
        {event.ticket_link && (
          <TouchableOpacity
            style={styles.ticketButton}
            onPress={() => Linking.openURL(event.ticket_link)}
          >
            <Ionicons name="ticket-outline" size={20} color="white" />
            <Text style={styles.ticketButtonText}>Køb billetter</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  eventImage: {
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  dateContainer: {
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    color: "#1e73be",
    fontWeight: "500",
  },
  eventTime: {
    fontSize: 16,
    color: "#1e73be",
    marginTop: 2,
  },
  cancelledBadge: {
    backgroundColor: "#e74c3c",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 10,
  },
  cancelledText: {
    color: "white",
    fontWeight: "bold",
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 16,
  },
  eventDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  priceText: {
    fontSize: 16,
    marginLeft: 8,
  },
  additionalInfoContainer: {
    marginBottom: 20,
    backgroundColor: "#f0f8ff",
    padding: 16,
    borderRadius: 8,
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  additionalInfoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  ticketButton: {
    backgroundColor: "#1e73be",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  ticketButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});