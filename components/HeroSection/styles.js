import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 524,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 160,
    paddingVertical: 80,
  },
  leftContainer: {
    flexBasis: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rightContainer: {
    flexBasis: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageContainer: {
    width: 364,
    height: 364,
  },
  title: {
    fontSize: 80,
    fontWeight: 600,
    marginBottom: 24,
    color: "#2D2D2D",
  },
  subtitle: {
    fontSize: 36,
    fontWeight: 300,
    marginBottom: 24,
    color: "#2D2D2D",
  },
});
