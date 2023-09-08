import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Logo from "../static/assets/logo_alt.svg";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: handle login
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const navigateToRegister = () => {
    // Navigate to the RegisterScreen when clicked
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Logo width={Dimensions.get("window").width * 0.6} height={Dimensions.get("window").height * 0.4} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="#B3B3B3"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholderTextColor="#B3B3B3"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>Não está cadastrado? Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6", // Modern background color
    paddingHorizontal: 20, // Add some horizontal padding
  },
  input: {
    width: "100%", // Occupy the full width
    height: 40,
    borderWidth: 1,
    borderColor: "#E4E4E4", // Input border color
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: "#333333", // Input text color
    backgroundColor: "#FFFFFF", // Input background color
  },
  loginButton: {
    backgroundColor: "#4285F4", // Button background color
    paddingVertical: 10, // Vertical padding
    width: "100%", // Occupy the full width
    borderRadius: 5,
  },
  loginButtonText: {
    color: "#FFFFFF", // Button text color
    fontSize: 16,
    textAlign: "center",
  },
  registerText: {
    marginTop: 10,
    color: "#4285F4", // Text color for the "Criar conta" link
    textDecorationLine: "underline",
  },
});

