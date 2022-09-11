import { StyleSheet } from "react-native";
import { colors } from "../../components";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    height: 489,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 24,
    flexDirection: "row",
    marginBottom: 24,
    paddingVertical: 48,
    paddingEnd: 100,
    paddingStart: 50,
  },
  containerStart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerEnd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginStart: 70,
  },
  link: {
    paddingTop: 80,
    alignSelf: "flex-end",
  },
  divider: {
    paddingVertical: 16,
  },
});
