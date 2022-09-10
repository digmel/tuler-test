import { StyleSheet, Text, View } from "react-native";
import { Screen, ProjectHero } from "../components";

export default function FoodWasteApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://eleneux.com/"
        imagePath="/assets/waste-hero.svg"
        imageWidth={534}
        imageHeight={525}
        title="Reduce Food Waste by Sharing It"
        description="Using the app people reduce food waste while helping others as well."
      />
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
