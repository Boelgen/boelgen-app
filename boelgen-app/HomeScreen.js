import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

function HomeScreen() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/events')   // the backend location - change
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.eventType}>{item.type}</Text>
      <Text style={styles.eventDate}>{item.date.toString()}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
      <Text style={styles.eventPrice}>{item.price} DKK</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.event_id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventItem: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventType: {
    fontSize: 16,
    color: 'gray',
  },
  eventDate: {
    fontSize: 14,
    color: 'gray',
  },
  eventDescription: {
    fontSize: 14,
  },
  eventPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default HomeScreen;