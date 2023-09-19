import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useTheme } from "../../state/theme";
import { generateContainerStyles } from "../../styles/containers";
import { textInput } from "../../styles/input";
import { blueBtn, blueBtnText } from "../../styles/buttons";
import { titleText } from "../../styles/text";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("tosador"); // Default to "tosador"
  const { darkMode } = useTheme();

  const containerClassName = generateContainerStyles(darkMode);

  const handleRegister = () => {
    // TODO: Handle user registration
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);
  };

  return (
    <View className={containerClassName}>
      <Text className={titleText}>Cadastro</Text>

      <TextInput
        className={textInput}
        placeholder="Nome"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        className={textInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        className={textInput}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
        value={password}
        secureTextEntry
      />

      <View className="flex w-5/6 bg-slate-200">
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
        >
          <Picker.Item label="Tosador" value="tosador" />
          <Picker.Item label="Cliente" value="cliente" />
        </Picker>
      </View>

      <TouchableOpacity onPress={handleRegister} className={blueBtn + " mt-5"}>
        <Text className={blueBtnText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
