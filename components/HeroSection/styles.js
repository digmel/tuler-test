import { StyleSheet } from "react-native";
import { colors } from "..";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 100,
  },
  contentStart: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  contentEnd: {
    flex: 1,
  },
});
