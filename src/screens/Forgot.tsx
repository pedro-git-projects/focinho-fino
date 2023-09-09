import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = React.useState(""); // State for the email

  const handleSendEmail = () => {
    // TODO: Handle sending the recovery email
    console.log("Sending recovery email to:", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <Text style={styles.description}>
        Digite o seu endereço de email para recuperar a senha.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="#B3B3B3"
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
        <Text style={styles.sendButtonText}>Enviar email de recuperação</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
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
  sendButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});
