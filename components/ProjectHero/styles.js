import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 64,
  },
  containerStart: {
    flexBasis: "55%",
    justifyContent: "center",
    paddingEnd: 36,
    alignItems: "flex-start",
  },
  containerEnd: {
    justifyContent: "center",
    flexBasis: "45%",
    alignItems: "flex-end",
  },
});
