import { Text, View } from "react-native";
import { MainTabsScreenProps } from "../../navigation/types";

const SearchScreen: React.FC<MainTabsScreenProps<"Explore">> = ({
  navigation,
}) => {
  return (
    <View className="flex justify-center items-center h-full">
      <Text> Yay, search</Text>
    </View>
  );
};

export default SearchScreen;
