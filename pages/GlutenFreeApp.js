import { StyleSheet, Text, View } from "react-native";
import { ProjectHero, Screen } from "../components";

export default function GlutenFreeApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://eleneux.com/"
        imagePath="/assets/gluten-hero.svg"
        imageWidth={662}
        imageHeight={525}
        title="Gluten-Free Restaurant Finder"
        description="The app allows users to find restaurant based on their preferences."
      />
      <View style={styles.container}>
        <Text style={styles.text}>GlutenFreeApp Page</Text>
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
