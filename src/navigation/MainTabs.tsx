import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabsParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import ExploreScreen from "../screens/main/Explore";
import SearchScreen from "../screens/main/Search";
import AdvertiseScreen from "../screens/main/Advertise";
import Icon from "react-native-vector-icons/FontAwesome";

const MainTabs = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabsNavigation() {
  return (
    <NavigationContainer>
      <MainTabs.Navigator initialRouteName="Explore">
        <MainTabs.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
            tabBarLabel: "Explorar",
          }}
        />

        <MainTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <MainTabs.Screen
          name="Advertise"
          component={AdvertiseScreen}
          options={{ headerShown: false }}
        />
      </MainTabs.Navigator>
    </NavigationContainer>
  );
}
