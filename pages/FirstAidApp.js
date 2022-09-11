import { StyleSheet, Text, View } from "react-native";
import { Screen, ProjectHero } from "../components";

export default function FirstAidApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://eleneux.com/"
        imagePath="/assets/first-aid-hero-large.jpg"
        imageWidth={826}
        imageHeight={525}
        title="First Aid App"
        description="Learn how to handle yourself and casualties during an emergency."
      />
      <View style={styles.container}>
        <Text style={styles.text}>FirstAidApp Page</Text>
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
