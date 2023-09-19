import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const MenuScreen: React.FC<MainTabsScreenProps<"Menu">> = ({ navigation }) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, menu</Text>
    </View>
  );
};

export default MenuScreen;
