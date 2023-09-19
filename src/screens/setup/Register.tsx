import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../state/theme";
import { generateContainerStyles } from "../../styles/containers";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("tosador"); // Default to "tosador"
  const { darkMode } = useTheme();

  const containerClassName = generateContainerStyles(darkMode)


  const handleRegister = () => {
    // TODO: Handle user registration
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);
  };

  return (
    <View className={containerClassName}>
      <Text >Cadastro</Text>

      <TextInput
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholderTextColor="#B3B3B3"
      />

      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="#B3B3B3"
      />

      <TextInput
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholderTextColor="#B3B3B3"
      />

      <View className="flex w-5/6" >
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
        >
          <Picker.Item label="Tosador" value="tosador" />
          <Picker.Item label="Cliente" value="cliente" />
        </Picker>
      </View>

      <TouchableOpacity  onPress={handleRegister}>
        <Text >Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}


