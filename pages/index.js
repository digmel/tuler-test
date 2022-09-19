import { Card, textStyles, Screen, HomeHero } from "../components";
import { Text, View } from "react-native";
import { Platform } from "react-native";

export default function App() {
  console.log("platform", Platform.OS);
  return (
    <Screen isHome={true}>
      <View style={{ marginBottom: 20 }}>
        <Text style={textStyles.h3}>Overview</Text>
      </View>

      <HomeHero />

      <View style={{ marginBottom: 20 }}>
        <Text style={textStyles.h3}>Projects</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Card
          link="/GlutenFreeApp"
          image="gluten-hero.png"
          imageWidth={319}
          title="Gluten-Free Finder"
          description="The app guides people to Find & Save Gluten-Free restaurants worldwide"
        />
        <Card
          link="/FoodWasteApp"
          image="waste-hero.png"
          imageWidth={250}
          title="Reduce Food Waste"
          description="The app allows people to share Food & Grocery products to NGO communities"
        />
        <Card
          link="/FirstAidApp"
          image="first-aid-hero.png"
          imageWidth={385}
          title="Learn First Aid"
          description="The app provides basic information to Learn First Aid & Test your knowledge"
        />
      </View>
    </Screen>
  );
}
