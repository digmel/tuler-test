import { StyleSheet } from "react-native";
import { Colors } from "..";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.grayLight,
    borderTopColor: Colors.gray,
    borderWidth: 1,
    height: 100,
  },
  copyrights: {
    marginStart: 16,
    paddingStart: 16,
    borderLeftColor: Colors.grayDark,
    borderLeftWidth: 1.5,
  },
});
