import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ViewStyle } from "react-native";
import { useTheme } from "../state/theme";
import { globalStyles } from "../../styles/theme";
import Logo from "../static/assets/logo_alt.svg";
import NavigableText from "../components/NavigableText";

export default function LoginScreen({ navigation }) {
  const { darkMode, toggleDarkMode } = useTheme();

  const inputStyle = {
    
    ...globalStyles[darkMode ? "dark" : "light"].loginScreen.input,
  };

  const loginButtonStyle = {
    ...globalStyles[darkMode ? "dark" : "light"].loginScreen.loginButton,
  };

  const styles = StyleSheet.create({
    input: {
      ...inputStyle as ViewStyle,
    },
    loginButton: {
      ...loginButtonStyle as ViewStyle,
    },
    loginButtonText: {
      ...globalStyles[darkMode ? "dark" : "light"].loginScreen.loginButtonText,
    },
    toggleButton: {
      backgroundColor:
        globalStyles[darkMode ? "dark" : "light"].container.backgroundColor,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    toggleButtonText: {
      color: globalStyles[darkMode ? "dark" : "light"].text.color,
    },
    container: {
        ...globalStyles[darkMode ? "dark" : "light"].container,
        justifyContent: "center",
        alignItems: "center",
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
    // TODO: handle login
    setLoginFailed(true);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Logo
        width={Dimensions.get("window").width * 0.6}
        height={Dimensions.get("window").height * 0.4}
      />


      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode}>
        <Text style={styles.toggleButtonText}>Toggle Dark Mode</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Conditional rendering based on loginFailed state */}
      {loginFailed && (
        <Text style={{ marginTop: 10 }}>
          <NavigableText
            text="Esqueceu a senha? Clique aqui para recuperar"
            textColor="#FF5733"
            screenName="Forgot"
            navigation={navigation}
          />
        </Text>
      )}
      <View style={{ marginTop: 10 }}>
        <NavigableText
          text="Não está cadastrado? Criar conta"
          textColor="#4285F4"
          screenName="Register"
          navigation={navigation}
        />
      </View>
    </View>
  );
}

