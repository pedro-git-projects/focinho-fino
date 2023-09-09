import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import PostDetails from "./src/screens/PostDetails";
import NotFound from "./src/screens/NotFound";
import LoginScreen from "./src/screens/Login";
import {
  RootStackParamList,
  SetupStackParamList,
  HomeTabParamList,
} from "./src/navigation/types";
import SplashScreen from "./src/screens/Splash";
import Register from "./src/screens/Register";

const Stack = createStackNavigator<RootStackParamList>();
const SetupStack = createStackNavigator<SetupStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={HomeStack} />
      <Tab.Screen name="Latest" component={PostDetails} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated, and update setIsAuthenticated accordingly
    // For example, you can use AsyncStorage, a token check, or any other method.
    // Once you determine authentication, update setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
  }, []);

  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <SetupStack.Navigator initialRouteName="Splash">
          <SetupStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <SetupStack.Screen name="Login" component={LoginScreen} />
          <SetupStack.Screen name="Register" component={Register} />
        </SetupStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
