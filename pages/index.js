import { Card, textStyles, Screen, HomeHero } from "../components";
import { Text, View } from "react-native";

export default function App({ isMobile }) {
  return (
    <Screen isHome={true} isMobile={isMobile}>
      <View style={{ marginBottom: 20 }}>
        {!isMobile && <Text style={textStyles.h3}>Overview</Text>}
      </View>

      <HomeHero />

      <View style={{ marginBottom: 20 }}>
        <Text style={textStyles.h3}>Projects</Text>
      </View>

      <View style={{ flexDirection: isMobile ? "column" : "row" }}>
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

      <View
        style={{
          flexDirection: isMobile ? "column" : "row",
          marginTop: isMobile ? 0 : 32,
        }}
      >
        <Card
          link="/"
          image="marikone-hero.png"
          imageWidth={415}
          title="Fashion Designer’s Portfolio"
          description="People can find Marikone’s collections and contact information on the website."
        />
        <Card
          link="/"
          image="hand4help-hero.png"
          imageWidth={350}
          title="Startup Info Website"
          description="Hand4help is an organization that produces high-tech hand prostheses."
        />
      </View>
    </Screen>
  );
}
