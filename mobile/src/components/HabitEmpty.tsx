import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function HabitEmpty() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text className="text-zinc-400 text-base">
        Nenhum hábito a ser mostrado.{" "}
      </Text>
      <Text
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate("new")}
      >
        Cadastre um para esse dia
      </Text>
    </View>
  );
}
