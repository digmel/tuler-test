import { StyleSheet } from "react-native";
import { colors } from "..";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.grayLight,
    borderTopColor: colors.gray,
    borderWidth: 1,
    height: 100,
  },
  copyrights: {
    marginStart: 16,
    paddingStart: 16,
    borderLeftColor: colors.grayDark,
    borderLeftWidth: 1.5,
  },
});
