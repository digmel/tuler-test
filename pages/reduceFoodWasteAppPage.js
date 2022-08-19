import { StyleSheet, Text, View } from "react-native";

export default function ReduceFoodWasteAppPage() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Reduce Food Waste App Page
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/`}>
        Go Back
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
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});
