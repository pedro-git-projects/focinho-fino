import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useTheme } from "../../state/theme";
import Logo from "../../static/assets/logo_alt.svg";
import NavigableText from "../../components/NavigableText";

export default function LoginScreen({ navigation }) {
  const { darkMode, toggleDarkMode } = useTheme();

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
    <View className={`flex justify-center items-center h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>

      <Logo
        width={Dimensions.get("window").width * 0.6}
        height={Dimensions.get("window").height * 0.4}
      />


     {
      // <TouchableOpacity 
      //   className="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded"  
      //   onPress={toggleDarkMode}>
      //   <Text className="text-white font-bold">Toggle Dark Mode</Text>
      // </TouchableOpacity>
      }

      <TextInput
        className="bg-white border border-gray-300 rounded py-2 px-4 mb-4 w-5/6"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        className="bg-white border border-gray-300 rounded py-2 px-4 mb-4 w-5/6"
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity 
        className="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded"  
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

