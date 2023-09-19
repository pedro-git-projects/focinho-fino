import type { StackScreenProps } from "@react-navigation/stack";

declare global {
  namespace ReactNavigation {
    interface SetupParamList extends SetupStackParamList {}
  }
}

export type SetupStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Forgot: undefined;
};

export type SetupStackScreenProps<T extends keyof SetupStackParamList> =
  StackScreenProps<SetupStackParamList, T>;
