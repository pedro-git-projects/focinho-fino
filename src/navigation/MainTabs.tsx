import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabsParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "../screens/main/Search";
import AdvertiseScreen from "../screens/main/Advertise";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../screens/main/Home";
import MessageScreen from "../screens/main/Message";
import MenuScreen from "../screens/main/Menu";

const MainTabs = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabsNavigation() {
  return (
    <NavigationContainer>
      <MainTabs.Navigator initialRouteName="Explore">
        <MainTabs.Screen
          name="Explore"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            tabBarLabel: "Início",
          }}
        />

        <MainTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
            tabBarLabel: "Buscar",
          }}
        />
        <MainTabs.Screen
          name="Advertise"
          component={AdvertiseScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus-circle" color={color} size={size} />
            ),
            tabBarLabel: "Anunciar",
          }}
        />

        <MainTabs.Screen
          name="Message"
          component={MessageScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="comments-o" color={color} size={size} />
            ),
            tabBarLabel: "Mensagens",
          }}
        />

        <MainTabs.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="bars" color={color} size={size} />
            ),
            tabBarLabel: "Menu",
          }}
        />
      </MainTabs.Navigator>
    </NavigationContainer>
  );
}
