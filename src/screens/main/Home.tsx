import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const HomeScreen: React.FC<MainTabsScreenProps<"Explore">> = ({
  navigation,
}) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, Home</Text>
    </View>
  );
};

export default HomeScreen;
