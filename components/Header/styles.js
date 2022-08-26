import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 101,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    paddingHorizontal: 160,
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 16,
    marginHorizontal: 44,
  },
});
