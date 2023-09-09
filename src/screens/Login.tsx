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
import NavigableText from "../components/NavigableText";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
    // TODO: handle login
    setLoginFailed(true)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>

      <Logo
        width={Dimensions.get("window").width * 0.6}
        height={Dimensions.get("window").height * 0.4}
      />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6", 
    paddingHorizontal: 20, 
  },
  input: {
    width: "100%", 
    height: 40,
    borderWidth: 1,
    borderColor: "#E4E4E4", 
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: "#333333", 
    backgroundColor: "#FFFFFF", 
  },
  loginButton: {
    backgroundColor: "#4285F4", 
    paddingVertical: 10, 
    width: "100%", 
    borderRadius: 5,
  },
  loginButtonText: {
    color: "#FFFFFF", 
    fontSize: 16,
    textAlign: "center",
  },
});
