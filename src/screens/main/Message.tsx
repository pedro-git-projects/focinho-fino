import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const MessageScreen: React.FC<MainTabsScreenProps<"Message">> = ({
  navigation,
}) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, message </Text>
    </View>
  );
};

export default MessageScreen;
