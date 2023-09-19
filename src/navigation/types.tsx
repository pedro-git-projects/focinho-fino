import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type SetupStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
};

export type SetupStackScreenProps<T extends keyof SetupStackParamList> =
  StackScreenProps<SetupStackParamList, T>;

export type MainTabsParamList = {
  Explore: undefined;
  Message: undefined;
  Advertise: undefined;
  Advertisements: undefined;
  Menu: undefined;
};

export type MainTabsScreenProps<T extends keyof MainTabsParamList> =
  BottomTabScreenProps<MainTabsParamList, T>;
