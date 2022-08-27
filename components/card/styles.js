import { StyleSheet } from "react-native";
import { colors } from "../../components";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    backgroundColor: colors.light,
    height: 652,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 24,
    flexDirection: "row",
  },
  leftContainer: {
    flexBasis: "55%",
    justifyContent: "center",
    paddingHorizontal: 36,
  },
  rightContainer: {
    justifyContent: "center",
    flexBasis: "45%",
    paddingEnd: 80,
  },
  link: {
    paddingTop: 100,
    alignSelf: "flex-end",
  },
  divider: {
    paddingVertical: 20,
  },
});
