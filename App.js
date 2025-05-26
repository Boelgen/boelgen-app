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
import AboutScreen from "./screens/AboutScreen";
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

// Global variable to track the previous tab
let previousTab = null;
// Custom back button component - FIXED VERSION
const CustomBackButton = ({ navigation }) => (
  <TouchableOpacity 
    onPress={() => {
      // Simply go back in the current stack instead of navigating to tabs
      navigation.goBack();
    }}
    style={{ marginLeft: 10 }}
  >
    <Ionicons name="chevron-back" size={24} color="#fff" />
  </TouchableOpacity>
);

// Alternative approach if you want to maintain the previous tab tracking:
const CustomBackButtonWithTabTracking = ({ navigation }) => (
  <TouchableOpacity 
    onPress={() => {
      if (previousTab && navigation.canGoBack()) {
        // Only use tab navigation if we can't go back in current stack
        navigation.goBack();
      } else if (previousTab) {
        // Navigate to the previous tab's main screen
        switch (previousTab) {
          case "Hjem":
            navigation.navigate("Hjem", { screen: "Home" });
            break;
          case "Kalender":
            navigation.navigate("Kalender", { screen: "Calendar" });
            break;
          case "Søg":
            navigation.navigate("Søg", { screen: "Search" });
            break;
          case "Mere":
            navigation.navigate("Mere", { screen: "More" });
            break;
          default:
            navigation.goBack();
        }
      } else {
        navigation.goBack();
      }
    }}
    style={{ marginLeft: 10 }}
  >
    <Ionicons name="chevron-back" size={24} color="#fff" />
  </TouchableOpacity>
);

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          headerShown: false
        }} 
      />
      <HomeStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route, navigation }) => ({
          title: route.params.event.title.length > 20
            ? route.params.event.title.substring(0, 20) + "..."
            : route.params.event.title,
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })}
      />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ 
          headerShown: false
        }}
      />
      <CalendarStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route, navigation }) => ({
          title: route.params.event.title.length > 20
            ? route.params.event.title.substring(0, 20) + "..."
            : route.params.event.title,
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })}
      />
    </CalendarStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ 
          headerShown: false
        }}
      />
      <SearchStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route, navigation }) => ({
          title: route.params.event.title.length > 20
            ? route.params.event.title.substring(0, 20) + "..."
            : route.params.event.title,
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })}
      />
    </SearchStack.Navigator>
  );
}

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen 
        name="More" 
        component={MoreScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <MoreStack.Screen 
        name="Activities" 
        component={ActivitiesScreen} 
        options={({ navigation }) => ({
          title: "Aktiviteter",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Workshop" 
        component={WorkshopScreen} 
        options={({ navigation }) => ({
          title: "Workshops",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="About" 
        component={AboutScreen} 
        options={({ navigation }) => ({
          title: "Om os",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Nyhedsbrev" 
        component={NewsLetterScreen} 
        options={({ navigation }) => ({
          title: "Nyhedsbrev",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Lecture" 
        component={LectureScreen} 
        options={({ navigation }) => ({
          title: "Offentlige Foredrag",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Jazz" 
        component={JazzScreen} 
        options={({ navigation }) => ({
          title: "Hornbæk Jazzklub",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="FilmClub" 
        component={FilmClubScreen} 
        options={({ navigation }) => ({
          title: "Filmklub",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Idea" 
        component={IdeaScreen} 
        options={({ navigation }) => ({
          title: "Idéer",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Knitting" 
        component={KnittingScreen} 
        options={({ navigation }) => ({
          title: "Strikning",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="MediaStudio" 
        component={MediaStudioScreen} 
        options={({ navigation }) => ({
          title: "Multimedie",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Meeting" 
        component={MeetingRoomScreen} 
        options={({ navigation }) => ({
          title: "Møder",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="RecordingStudio" 
        component={RecordingStudioScreen} 
        options={({ navigation }) => ({
          title: "Lydstudie",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="ReadingClub" 
        component={ReadingClubScreen} 
        options={({ navigation }) => ({
          title: "Læseklub",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Volunteer" 
        component={VolunteerScreen} 
        options={({ navigation }) => ({
          title: "Frivillig",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Chatbot" 
        component={ChatbotScreen} 
        options={({ navigation }) => ({
          title: "Chatbot",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen 
        name="Information" 
        component={InformationScreen} 
        options={({ navigation }) => ({
          title: "Information",
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })} 
      />
      <MoreStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route, navigation }) => ({
          title: route.params.event.title.length > 20
            ? route.params.event.title.substring(0, 20) + "..."
            : route.params.event.title,
          headerStyle: {
            backgroundColor: "#1e73be",
          },
          headerTintColor: "#fff",
          headerLeft: () => <CustomBackButton navigation={navigation} />
        })}
      />
    </MoreStack.Navigator>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = React.useState("Hjem");

  return (
    <NavigationContainer
      onStateChange={(state) => {
        if (state) {
          const currentRouteName = state.routes[state.index]?.name;
          if (currentRouteName !== currentTab) {
            previousTab = currentTab; // Store the previous tab
            setCurrentTab(currentRouteName); // Update current tab
          }
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
          unmountOnBlur: true
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
                screen: "Home"
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
                screen: "Calendar"
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
        <Tab.Screen name="Chat" component={ChatbotScreen} />
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