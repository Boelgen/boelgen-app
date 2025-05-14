import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

// Create navigators
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Hjem" }} />
      <HomeStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={({ route }) => ({
          title:
            route.params.event.title.length > 20
              ? route.params.event.title.substring(0, 20) + "..."
              : route.params.event.title,
        })}
      />
    </HomeStack.Navigator>
  );
}

function MoreStackScreen() {
  return (
    <MoreStack.Navigator
        screenOptions={{
        headerShown: false
      }}>
      <MoreStack.Screen name="Mere" component={MoreScreen} options={{ title: "Mere" }} />
      <MoreStack.Screen name="Activities" component={ActivitiesScreen} options={{ title: "Aktiviteter" }} />
      <MoreStack.Screen name="Workshop" component={WorkshopScreen} options={{ title: "Workshops" }} />
      <MoreStack.Screen name="About" component={AboutScreen} options={{ title: "Om os" }} />
      <MoreStack.Screen name="Nyhedsbrev" component={NewsLetterScreen} options={{ title: "Nyhedsbrev" }} />
      <MoreStack.Screen name="Lecture" component={LectureScreen} options={{ title: "Offentlige Foredrag" }} />
      <MoreStack.Screen name="Jazz" component={JazzScreen} options={{ title: "Hornbæk Jazzklub" }} />
      <MoreStack.Screen name="FilmClub" component={FilmClubScreen} options={{ title: "Filmklub" }} />
      <MoreStack.Screen name="Idea" component={IdeaScreen} options={{ title: "Idéer" }} />
      <MoreStack.Screen name="Knitting" component={KnittingScreen} options={{ title: "Strikning" }} />
      <MoreStack.Screen name="MediaStudio" component={MediaStudioScreen} options={{ title: "Multimedie" }} />
      <MoreStack.Screen name="Meeting" component={MeetingRoomScreen} options={{ title: "Møder" }} />
      <MoreStack.Screen name="RecordingStudio" component={RecordingStudioScreen} options={{ title: "Lydstudie" }} />
      <MoreStack.Screen name="ReadingClub" component={ReadingClubScreen} options={{ title: "Læseklub" }} />
      <MoreStack.Screen name="Volunteer" component={VolunteerScreen} options={{ title: "Frivillig" }} />
    </MoreStack.Navigator>
  );
}

function TabNavigator() {
  return (
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
      <Tab.Screen name="Hjem" component={HomeStackScreen} />
      <Tab.Screen name="Kalender" component={CalendarScreen} />
      <Tab.Screen name="Søg" component={SearchScreen} />
      <Tab.Screen name="Info" component={InformationScreen} />
      <Tab.Screen name="Mere" component={MoreStackScreen} />
    </Tab.Navigator>
  );
}

// Root App Component
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
