import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text>Kalender</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Søgning</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Om os/kontakt</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text>Mere/indstillinger</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Hjem') {
              iconName = 'home';
            } else if (route.name === 'Kalender') {
              iconName = 'calendar';
            } else if (route.name === 'Søg') {
              iconName = 'search';
            } else if (route.name === 'Om os') {
              iconName = 'information-circle';
            } else if (route.name === 'Mere') {
              iconName = 'menu';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Hjem" component={HomeScreen} />
        <Tab.Screen name="Kalender" component={CalendarScreen} />
        <Tab.Screen name="Søg" component={SearchScreen} />
        <Tab.Screen name="Om os" component={AboutScreen} />
        <Tab.Screen name="Mere" component={MoreScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
