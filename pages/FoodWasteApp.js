import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../components";

export default function FoodWasteApp() {
  return (
    <Screen isProject={true}>
      <View style={styles.container}>
        <Text style={styles.text}>FoodWasteApp Page</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 300,
    fontSize: 24,
    marginBottom: 24,
  },
});
