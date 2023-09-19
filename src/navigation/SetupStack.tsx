import { createStackNavigator } from "@react-navigation/stack"
import { SetupStackParamList } from "./types"
import { NavigationContainer } from "@react-navigation/native"
import SplashScreen from "../screens/setup/Splash"
import LoginScreen from "../screens/setup/Login"
import RegisterScreen from "../screens/setup/Register"
import ForgotScreen from "../screens/setup/Forgot"
import { useTheme } from "../state/theme"

const SetupStack = createStackNavigator<SetupStackParamList>();

export default function SetupNavigation() {
    const { darkMode } = useTheme()
    return (
        <NavigationContainer
            theme={{colors: {background: darkMode ? "black": "white"}}}>
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
    )
}


