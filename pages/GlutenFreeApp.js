import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Header,
  HeroSection,
  Card,
  textStyles,
  Screen,
  Footer,
} from "../components";

export default function GlutenFreeApp() {
  return (
    <ScrollView>
      <Header isProject={true} />
      <View style={styles.container}>
        <Text style={styles.text}>GlutenFreeApp Page</Text>
      </View>
      <Footer />
    </ScrollView>
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
