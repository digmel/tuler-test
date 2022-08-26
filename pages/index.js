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
        <Card />
        <Card />
        <Card />
      </Screen>
      <Footer />
    </ScrollView>
  );
}
