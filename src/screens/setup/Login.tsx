import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";
import { useTheme } from "../../state/theme";
import NavigableText from "../../components/NavigableText";
import { textInput } from "../../styles/input";
import { blueBtn } from "../../styles/buttons";
import { generateContainerStyles } from "../../styles/containers";

export default function LoginScreen({ navigation }) {
  const { darkMode, toggleDarkMode } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  
  const containerClassNames = generateContainerStyles(darkMode) 

  const handleLogin = () => {
    // TODO: handle login
    setLoginFailed(true);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  console.log(containerClassNames)

  return (
    <View className={containerClassNames}>

    <Image
        source={require("../../static/assets/alt_logo.png")}
        style={{
          width: Dimensions.get("window").width * 0.6,
          height: Dimensions.get("window").height * 0.4,
          resizeMode: "contain",
          tintColor: darkMode ? "#FCF55F" : "black"
        }}
    />

     {
      <TouchableOpacity 
        className="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded"  
        onPress={toggleDarkMode}>
        <Text className="text-white font-bold">Toggle Dark Mode</Text>
      </TouchableOpacity>
      }

      <TextInput
        className={textInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        className={textInput}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity 
        className={blueBtn}  
        onPress={handleLogin}>
        <Text className="text-white font-bold">Entrar</Text>
      </TouchableOpacity>

      {/* Conditional rendering based on loginFailed state */}
      {loginFailed && (
        <Text className="mt-2">
          <NavigableText
            text="Esqueceu a senha? Clique aqui para recuperar"
            textColor="#FF5733"
            screenName="Forgot"
            navigation={navigation}
          />
        </Text>
      )}
      <View className="mt-2">
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

