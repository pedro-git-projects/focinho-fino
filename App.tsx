import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamList, RootStackParamList } from "./src/navigation/types";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import PostDetails from "./src/screens/PostDetails";
import NotFound from "./src/screens/NotFound";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import LoginScreen from "./src/screens/Login";

const Tab = createBottomTabNavigator<HomeTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={Home} />
      <Tab.Screen name="Latest" component={PostDetails} />
    </Tab.Navigator>
  );
}

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {}, []);

  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={
              { headerShown: false } // Hide the title bar for Login screen
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
