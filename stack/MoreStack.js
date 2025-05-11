import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import FilmClubScreen from "../screens/FilmClubScreen";
import IdeaScreen from "../screens/IdeaScreen";
import KnittingScreen from "../screens/KnittingScreen";
import MediaStudioScreen from "../screens/MediaStudioScreen";
import MeetingRoomScreen from "../screens/MeetingRoomScreen";
import RecordingStudioScreen from "../screens/RecordingStudioScreen";
import ReadingClubScreen from "../screens/ReadingClubScreen";
import VolunteerScreen from "../screens/VolunteerScreen";

const Stack = createStackNavigator();

function MoreMenu() {
  const navigation = useNavigation();
  const options = [
    { name: "Film Club", screen: "Film Club" },
    { name: "Idea", screen: "Idea" },
    { name: "Knitting", screen: "Knitting" },
    { name: "Media Studio", screen: "Media Studio" },
    { name: "Meeting Room", screen: "Meeting Room" },
    { name: "Recording Studio", screen: "Recording Studio" },
    { name: "Reading Club", screen: "Reading Club" },
    { name: "Volunteer", screen: "Volunteer" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mere</Text>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.menuText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoreMenu" component={MoreMenu} />
      <Stack.Screen name="Film Club" component={FilmClubScreen} />
      <Stack.Screen name="Idea" component={IdeaScreen} />
      <Stack.Screen name="Knitting" component={KnittingScreen} />
      <Stack.Screen name="Media Studio" component={MediaStudioScreen} />
      <Stack.Screen name="Meeting Room" component={MeetingRoomScreen} />
      <Stack.Screen name="Recording Studio" component={RecordingStudioScreen} />
      <Stack.Screen name="Reading Club" component={ReadingClubScreen} />
      <Stack.Screen name="Volunteer" component={VolunteerScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  menuItem: { padding: 10, backgroundColor: "#1e73be", marginVertical: 5, borderRadius: 5 },
  menuText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
