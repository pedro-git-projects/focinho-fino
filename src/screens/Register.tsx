import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("tosador"); // Default to "tosador"

  const handleRegister = () => {
    // TODO: Handle user registration
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor="#B3B3B3"
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

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={userType}
          style={styles.picker}
          onValueChange={(itemValue) => setUserType(itemValue)}
        >
          <Picker.Item label="Tosador" value="tosador" />
          <Picker.Item label="Cliente" value="cliente" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrar</Text>
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
    marginBottom: 20,
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
  pickerContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 30,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

