import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.dateBadge}>
        <Text style={styles.dateDay}>{new Date(event.date).getDate()}</Text>
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
  );
};

const styles = StyleSheet.create({
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
    paddingVertical: 18,
    paddingHorizontal: 14,
    minWidth: 54,
    minHeight: 54,
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
    boxShadowColor: "#000",
    boxShadowOffset: { width: 0, height: 2 },
    boxShadowOpacity: 0.1,
    elevation: 3,
    flexDirection: "column",
    alignItems: "stretch",
  },
});

export default EventCard;
