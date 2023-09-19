import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import Logo from "../../static/assets/logo_alt.svg";
import { StackScreenProps } from "@react-navigation/stack";
import { SetupStackParamList } from "../../navigation/types";

type SplashScreenProps = StackScreenProps<SetupStackParamList, "Splash">;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace("Login");
    });
  }, [navigation, logoOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Logo
          width={Dimensions.get("window").width * 0.6}
          height={Dimensions.get("window").height * 0.4}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  logoContainer: {
    alignItems: "center",
  },
});

export default SplashScreen;
