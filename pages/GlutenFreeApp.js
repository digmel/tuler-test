import { StyleSheet, Text, View } from "react-native";
import { ProjectHero, Screen, Section, textStyles } from "../components";

export default function GlutenFreeApp() {
  return (
    <Screen isProject={true}>
      <ProjectHero
        link="https://eleneux.com/"
        imagePath="/assets/gluten-hero-large.jpg"
        imageWidth={662}
        imageHeight={525}
        title="Gluten-Free Restaurant Finder"
        description="The app allows users to find restaurant based on their preferences."
      />

      <Text style={textStyles.h3}>Project Overview</Text>

      <View style={styles.container}>
        <Section
          width={486}
          title="Project Background"
          text="The research was initially done for this project and I was given essential insights from the user interviews. With that information in hand, I came up with solutions and created UI designs that were user-focused."
        />
        <Section
          width={415}
          title="The Goal"
          text="The goal was to create a user-friendly application to help them find gluten-free restaurants anywhere."
        />
        <Section title="My Role" text="UX/UI Designer" width={118} />
        <Section title="Duration" text="1-Week UX/UI Challenge" width={191} />
      </View>

      <Text style={textStyles.h3}>Design System</Text>

      <View style={styles.container}>
        <Section
          width={650}
          title="Colors"
          text="I chose a white background and metallic silver as a primary color. There is a lot of reading in the app so I needed color which would not be annoying for users eyes, which would be solid and clean. Also, the white and silver color is kind of kitchen colors, like a white dining table with white dishes, silver spoons, and forks, a white chefs uniform with silver pots and pans. So that is how I got the idea."
        />
        <Section
          width={650}
          title="Typeface & Icons"
          text="Used typeface - Cera Pro is very clean and easy to read. The letters are based on pure geometry and it has almost all language support so when the app is multilingual it will be easy to read for everyone around the world. Also, chosen tiny icons because of the minimalistic design approach."
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "stretch",
    // alignContent: "stretch",
  },
});
