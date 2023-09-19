import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const ExploreScreen: React.FC<MainTabsScreenProps<"Explore">> = ({
  navigation,
}) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, exploring </Text>
    </View>
  );
};

export default ExploreScreen;