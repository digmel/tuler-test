import { StyleSheet } from "react-native";
import { Colors } from "..";

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    height: 74,
    backgroundColor: Colors.light,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    paddingEnd: 120,
    paddingStart: 100,
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
    backgroundColor: Colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
  },
  dropdownMenuContainer: {
    flex: 1,
    zIndex: 10,
    width: 180,
    backgroundColor: Colors.light,
    borderRadius: 4,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  dropdownMenuItem: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
  },
  dropdownMenuItemHover: {
    backgroundColor: Colors.grayHover,
  },
});
