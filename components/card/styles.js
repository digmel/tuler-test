import { StyleSheet } from "react-native";
import { colors } from "../../components";

export const styles = StyleSheet.create({
  container: {
    height: 485,
    width: 460,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 24,
    marginEnd: 29,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    alignContent: "center",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  divider: {
    paddingVertical: 16,
  },
});
