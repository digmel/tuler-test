import { StyleSheet } from "react-native";
import { colors } from "../../components";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 101,
    backgroundColor: colors.light,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    paddingHorizontal: 160,
    paddingTop: 36,
    justifyContent: "space-between",
  },
  contentStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  contentEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-start",
  },
  menuItem: {
    width: 100,
    fontSize: 16,
    marginHorizontal: 44,
    alignItems: "center",
  },
});
