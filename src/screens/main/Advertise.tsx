import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const AdvertiseScreen: React.FC<MainTabsScreenProps<"Explore">> = ({
  navigation,
}) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, advertise</Text>
    </View>
  );
};

export default AdvertiseScreen;
