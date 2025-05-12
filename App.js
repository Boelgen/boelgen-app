// App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

// Import the screens
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";
import WorkshopScreen from "./screens/WorkshopScreen";
import MoreScreen from "./screens/MoreScreen";
import InformationScreen from "./screens/InformationScreen";
import JazzScreen from "./screens/JazzScreen";
import LectureScreen from "./screens/LectureScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsLetterScreen from "./screens/NewsLetterScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import FilmClubScreen from "./screens/FilmClubScreen";
import IdeaScreen from "./screens/IdeaScreen";
import KnittingScreen from "./screens/KnittingScreen";
import MediaStudioScreen from "./screens/MediaStudioScreen";
import MeetingRoomScreen from "./screens/MeetingRoomScreen";
import RecordingStudioScreen from "./screens/RecordingStudioScreen";
import ReadingClubScreen from "./screens/ReadingClubScreen";
import VolunteerScreen from "./screens/VolunteerScreen";
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mere"
        component={MoreScreen}
        options={{ title: "Mere" }}
      />
      <Stack.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{ title: "Aktiviteter" }}
      />
      <Stack.Screen
        name="Workshop"
        component={WorkshopScreen}
        options={{ title: "Workshops" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Om os" }}
      />
      <Stack.Screen
        name="Nyhedsbrev"
        component={NewsLetterScreen}
        options={{ title: "Nyhedsbrev" }}
      />
      <Stack.Screen
        name="Lecture"
        component={LectureScreen}
        options={{ title: "Offentlige Foredrag" }}
      />
      <Stack.Screen
        name="Jazz"
        component={JazzScreen}
        options={{ title: "Hornbæk Jazzklub" }}
      />
      <Stack.Screen
        name="FilmClub"
        component={FilmClubScreen}
        options={{ title: "Filmklub" }}
      />
      <Stack.Screen
        name="Idea"
        component={IdeaScreen}
        options={{ title: "Idéer" }}
      />
      <Stack.Screen
        name="Knitting"
        component={KnittingScreen}
        options={{ title: "Strikning" }}
      />
      <Stack.Screen
        name="MediaStudio"
        component={MediaStudioScreen}
        options={{ title: "Multimedie" }}
      />
      <Stack.Screen
        name="Meeting"
        component={MeetingRoomScreen}
        options={{ title: "Møder" }}
      />
      <Stack.Screen
        name="RecordingStudio"
        component={RecordingStudioScreen}
        options={{ title: "Lydstudie" }}
      />
      <Stack.Screen
        name="ReadingClub"
        component={ReadingClubScreen}
        options={{ title: "Læseklub" }}
      />
      <Stack.Screen
        name="Volunteer"
        component={VolunteerScreen}
        options={{ title: "Frivillig" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({  
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Hjem") {
              iconName = "home";
            } else if (route.name === "Kalender") {
              iconName = "calendar";
            } else if (route.name === "Søg") {
              iconName = "search";
            } else if (route.name === "Info") {
              iconName = "information-circle";
            } else if (route.name === "Mere") {
              iconName = "menu";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#1e73be",
          tabBarInactiveTintColor: "black",
          headerStyle: {
            backgroundColor: "#1e73be", // Change this to your desired header background color
          },
          tabBarStyle: {
            backgroundColor: "#FFFF", // Change this to your desired bottom tab background color
          },
          headerTintColor: "#fff", // Change this to your desired header text/icon color
        })}
      >
        <Tab.Screen name="Hjem" component={HomeScreen} />
        <Tab.Screen name="Kalender" component={CalendarScreen} />
        <Tab.Screen name="Søg" component={SearchScreen} />
        <Tab.Screen name="Info" component={InformationScreen} />
        <Tab.Screen name="Mere" component={MoreStack} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
