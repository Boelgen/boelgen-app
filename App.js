import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import the screens
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";

// Import MoreStack
import MoreStack from "./stack/MoreStack";

const Tab = createBottomTabNavigator();

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
            backgroundColor: "#1e73be",
          },
          tabBarStyle: {
            backgroundColor: "#FFFF",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Hjem" component={HomeScreen} />
        <Tab.Screen name="Kalender" component={CalendarScreen} />
        <Tab.Screen name="Søg" component={SearchScreen} />
        <Tab.Screen name="Om os" component={AboutScreen} />
        <Tab.Screen name="Mere" component={MoreStack} options={{ headerShown: false }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
