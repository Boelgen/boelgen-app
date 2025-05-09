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
import MoreScreen from "./screens/MoreScreen";
import LectureScreen from "./screens/LectureScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoreHome"
        component={MoreScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Lecture"
        component={LectureScreen}
        options={{ title: "Offentlige Foredrag" }}
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
            } else if (route.name === "Om os") {
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
        <Tab.Screen name="Om os" component={AboutScreen} />
        <Tab.Screen name="Mere" component={MoreStack} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
