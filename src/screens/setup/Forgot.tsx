import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "../../state/theme";
import { generateContainerStyles } from "../../styles/containers";
import { descriptionText, titleText } from "../../styles/text";
import { textInput } from "../../styles/input";
import { blueBtn, blueBtnText } from "../../styles/buttons";

export default function ForgotScreen({ navigation }) {
  const [email, setEmail] = React.useState(""); // State for the email
  const { darkMode } = useTheme();
  const containerClassNames = generateContainerStyles(darkMode);

  const handleSendEmail = () => {
    // TODO: Handle sending the recovery email
    console.log("Sending recovery email to:", email);
  };

  return (
    <View className={containerClassNames}>
      <Text className={titleText}> Recuperar Senha</Text>

      <Image
        source={require("../../static/assets/unlock.png")}
        style={{
          width: Dimensions.get("window").width * 0.4,
          height: Dimensions.get("window").height * 0.4,
          resizeMode: "contain",
        }}
      />

      <Text className={descriptionText + " pb-5 w-5/6"}>
        Digite o seu endereço de email para recuperar a senha.
      </Text>

      <TextInput
        className={textInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        placeholderTextColor="#B3B3B3"
      />
      <TouchableOpacity className={blueBtn} onPress={handleSendEmail}>
        <Text className={blueBtnText}>Enviar email de recuperação</Text>
      </TouchableOpacity>
    </View>
  );
}
