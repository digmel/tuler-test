import { Header, HeroSection, Card } from "../components";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <Header />
      <HeroSection />
      <Card />
    </ScrollView>
  );
}
