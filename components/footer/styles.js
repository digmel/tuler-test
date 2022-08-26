import { StyleSheet } from "react-native";
import { colors } from "..";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 104,
    backgroundColor: colors.grayLight,
    paddingHorizontal: 160,
    justifyContent: "space-between",
    borderTopColor: colors.gray,
    borderWidth: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightContainer: {
    width: "357",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    marginHorizontal: 44,
  },
});
