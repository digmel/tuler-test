import {
  Header,
  HeroSection,
  Card,
  textStyles,
  Screen,
  Footer,
} from "../components";
import { ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Header />
      <HeroSection />
      <Screen>
        <View style={{ paddingTop: 70 }}>
          <Text style={textStyles.h2}>Case Studies</Text>
        </View>

        <Card
          imagePath="/assets/gluten-hero.svg"
          imageWidth={639}
          imageHeight={500}
          label="1-WEEK UX/UI CHALLENGE"
          title="Gluten-Free Restaurant Finder"
          description="The app allows users to find restaurant based on their preferences."
        />
        <Card
          imagePath="/assets/waste-hero.svg"
          imageWidth={509}
          imageHeight={500}
          label="RESEARCH / PRODUCT DESIGN"
          title="Reduce Food Waste by Sharing It"
          description="Using the app people reduce food waste while helping others as well."
        />
        <Card
          imagePath="/assets/first-aid-hero.svg"
          imageWidth={786}
          imageHeight={500}
          label="RESEARCH / PRODUCT DESIGN"
          title="First Aid App"
          description="Learn how to handle yourself and casualties during an emergency."
        />
      </Screen>
      <Footer />
    </ScrollView>
  );
}
