import { StyleSheet } from "react-native";
import { colors } from "..";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 74,
    backgroundColor: colors.light,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    paddingHorizontal: 120,
    justifyContent: "space-between",
  },
  contentStart: {
    paddingTop: 24,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  contentEnd: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    width: 100,
    fontSize: 16,
    marginRight: 88,
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
  },
});
