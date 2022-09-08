import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Header,
  HeroSection,
  Card,
  textStyles,
  Screen,
  Section,
  Footer,
} from "../components";

export default function About() {
  return (
    <ScrollView>
      <Header isAbout={true} />

      <View style={styles.container}>
        <Section
          title="Background & BA Degree"
          text="The skills and views I’ve gained during my BA (Engineering and Computer Science) are essential to UX design. After graduating, I got interested in graphic design and worked on freelance projects, which led me to UX Design and took the best courses of Google, Idxf, and DesignLab. Completing those comprehensive courses helped me become a confident UX designer."
        />
        <Text style={styles.text}>About Page</Text>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 830,
    alignSelf: "center",
  },
  text: {
    paddingTop: 300,
    fontSize: 24,
    marginBottom: 24,
  },
});
