import { StyleSheet } from "react-native";
import { colors } from "..";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 48,
    paddingStart: 32,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 24,
    marginBottom: 48,
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
