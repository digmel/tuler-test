import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Case Studies
      </Text>

      <Text
        style={styles.link}
        accessibilityRole="link"
        href={`/glutenFreeAppPage`}
      >
        Gluten Free App
      </Text>

      <Text
        style={styles.link}
        accessibilityRole="link"
        href={`/reduceFoodWasteAppPage`}
      >
        Reduce Food Waste App
      </Text>

      <Text
        style={styles.link}
        accessibilityRole="link"
        href={`/firstAidAppPage`}
      >
        First Aid App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
    marginBottom: 30,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});
