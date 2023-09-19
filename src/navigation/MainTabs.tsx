import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabsParamList } from "./types";
import { useTheme } from "../state/theme";
import { NavigationContainer } from "@react-navigation/native";
import ExploreScreen from "../screens/main/Explore";
import SearchScreen from "../screens/main/Search";

const MainTabs = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabsNavigation() {
  const { darkMode } = useTheme();
  return (
    <NavigationContainer
      theme={{ colors: { background: darkMode ? "black" : "white" } }}
    >
      <MainTabs.Navigator initialRouteName="Explore">
        <MainTabs.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ headerShown: false }}
        />

        <MainTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </MainTabs.Navigator>
    </NavigationContainer>
  );
}
