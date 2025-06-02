import React from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

// Import the screens
import HomeScreen from "./screens/HomeScreen";
import CalendarScreen from "./screens/CalendarScreen";
import SearchScreen from "./screens/SearchScreen";
import LibraryScreen from "./screens/LibraryScreen";
import WorkshopScreen from "./screens/WorkshopScreen";
import MoreScreen from "./screens/MoreScreen";
import InformationScreen from "./screens/InformationScreen";
import JazzScreen from "./screens/JazzScreen";
import LectureScreen from "./screens/LectureScreen";
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
import EventScreen from "./screens/EventScreen";
import ChatbotScreen from "./screens/ChatbotScreen";

// Create navigators
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CalendarStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();

function screenOptionsWithBackButton({ navigation, route }) {
  // show back arrow for non-main tab screens
  const isMainTabScreen = route.name === "Home" || route.name === "Calendar" || route.name === "Search" || route.name === "More";
  
  return {
    headerShown: true,
    headerLeft: !isMainTabScreen ? () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={{ marginLeft: 10 }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
    ) : undefined,
    headerStyle: {
      backgroundColor: "#1e73be",
    },
    headerTintColor: "#fff",
  };
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={screenOptionsWithBackButton}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Hjem" }} 
      />
      <HomeStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route }) => ({
          title:
            route.params?.event?.title?.length > 20
              ? route.params.event.title.substring(0, 20) + "..."
              : route.params?.event?.title || "Event",
        })}
      />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator
      screenOptions={screenOptionsWithBackButton}
    >
      <CalendarStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ title: "Kalender" }}
      />
      <CalendarStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route }) => ({
          title:
            route.params?.event?.title?.length > 20
              ? route.params.event.title.substring(0, 20) + "..."
              : route.params?.event?.title || "Event",
        })}
      />
    </CalendarStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={screenOptionsWithBackButton}
    >
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Søg" }}
      />
      <SearchStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route }) => ({
          title:
            route.params?.event?.title?.length > 20
              ? route.params.event.title.substring(0, 20) + "..."
              : route.params?.event?.title || "Event",
        })}
      />
    </SearchStack.Navigator>
  );
}

function MoreStackScreen() {
  return (
    <MoreStack.Navigator
      screenOptions={screenOptionsWithBackButton}
    >
      <MoreStack.Screen name="More" component={MoreScreen} options={{ title: "Mere" }} />
      <MoreStack.Screen name="Activities" component={ActivitiesScreen} options={{ title: "Aktiviteter" }} />
      <MoreStack.Screen name="Workshop" component={WorkshopScreen} options={{ title: "Workshops" }} />
      <MoreStack.Screen name="Library" component={LibraryScreen} options={{ title: "Bibliotek" }} />
      <MoreStack.Screen name="Nyhedsbrev" component={NewsLetterScreen} options={{ title: "Nyhedsbrev" }} />
      <MoreStack.Screen name="Lecture" component={LectureScreen} options={{ title: "Offentlige Foredrag" }} />
      <MoreStack.Screen name="Jazz" component={JazzScreen} options={{ title: "Hornbæk Jazzklub" }} />
      <MoreStack.Screen name="FilmClub" component={FilmClubScreen} options={{ title: "Filmklub" }} />
      <MoreStack.Screen name="Idea" component={IdeaScreen} options={{ title: "Idéer" }} />
      <MoreStack.Screen name="Knitting" component={KnittingScreen} options={{ title: "Strik og hækling" }} />
      <MoreStack.Screen name="MediaStudio" component={MediaStudioScreen} options={{ title: "Multimedieværksted" }} />
      <MoreStack.Screen name="Meeting" component={MeetingRoomScreen} options={{ title: "Mødelokale" }} />
      <MoreStack.Screen name="RecordingStudio" component={RecordingStudioScreen} options={{ title: "Lydstudie og talentudvikling" }} />
      <MoreStack.Screen name="ReadingClub" component={ReadingClubScreen} options={{ title: "Læsekredse" }} />
      <MoreStack.Screen name="Volunteer" component={VolunteerScreen} options={{ title: "Frivillige / Bølgevenner" }} />
      <MoreStack.Screen name="Chatbot" component={ChatbotScreen} options={{ title: "Chatbot" }} />
      <MoreStack.Screen name="Information" component={InformationScreen} options={{ title: "Information" }} />
      <MoreStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route }) => ({
          title:
            route.params?.event?.title?.length > 20
              ? route.params.event.title.substring(0, 20) + "..."
              : route.params?.event?.title || "Event",
        })}
      />
    </MoreStack.Navigator>
  );
}

export default function App() {
  const [previousRoute, setPreviousRoute] = React.useState(null);

  return (
    <NavigationContainer
      onStateChange={(state) => {
        // Keeps track to detect tab changes
        if (state) {
          const currentRouteName = state.routes[state.index]?.name;
          setPreviousRoute((prev) => {
            if (prev !== currentRouteName) {
              return currentRouteName;
            }
            return prev;
          });
        }
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (route.name === "Hjem") {
              iconName = "home";
            } else if (route.name === "Kalender") {
              iconName = "calendar";
            } else if (route.name === "Søg") {
              iconName = "search";
            } else if (route.name === "Chat") {
              iconName = "chatbubble";
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
          unmountOnBlur: true,  // reset screen state when switching tabs
          headerShown: false, // Hide tab navigator headers sincethey're handled in stacks
        })}
      >
        <Tab.Screen 
          name="Hjem" 
          component={HomeStackScreen} 
          options={{
            title: "Hjem",
            unmountOnBlur: true,
          }}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate("Hjem", {
                screen: "Home"  // when pressing Home tab, it goes to the Home screen
              });
            },
          })}
        />
        <Tab.Screen 
          name="Kalender" 
          component={CalendarStackScreen} 
          options={{
            title: "Kalender",
            unmountOnBlur: true,
          }}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate("Kalender", {
                screen: "Calendar"  // when pressing Home tab, it goes to the Home screen
              });
            },
          })}
        />
        <Tab.Screen 
          name="Søg" 
          component={SearchStackScreen} 
          options={{
            title: "Søg",
            unmountOnBlur: true,
          }}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate("Søg", {
                screen: "Search"
              });
            },
          })}
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatbotScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1e73be",
            },
            headerTintColor: "#fff",
            title: "Chat",
          }}
        />
        <Tab.Screen 
          name="Mere" 
          component={MoreStackScreen} 
          options={{
            title: "Mere",
            unmountOnBlur: true,
          }}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate("Mere", {
                screen: "More"
              });
            },
          })}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
