import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SetupStackParamList,
} from "./src/navigation/types";
import { ThemeProvider } from "./src/state/theme";
import { NativeWindStyleSheet } from "nativewind";
import SplashScreen from "./src/screens/setup/Splash";
import LoginScreen from "./src/screens/setup/Login";
import RegisterScreen from "./src/screens/setup/Register";
import ForgotScreen from "./src/screens/setup/Forgot";

NativeWindStyleSheet.setOutput({default: "native"})

const SetupStack = createStackNavigator<SetupStackParamList>();


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
    <ThemeProvider>
      <NavigationContainer>
        <SetupStack.Navigator initialRouteName="Splash">
          <SetupStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <SetupStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <SetupStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <SetupStack.Screen
            name="Forgot"
            component={ForgotScreen}
            options={{ headerShown: false }}
          />
        </SetupStack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    );
  }
}
