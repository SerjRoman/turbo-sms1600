import { StyleSheet } from "react-native";
import { COLORS } from "../../constats/";

export const styles = StyleSheet.create({
  inputBox: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: COLORS.bisqueSecondary,
  },
  input: {
  },
  label: {
    fontWeight: 500,
    fontSize: 16
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  errMsg: {
    color: COLORS.error,
    fontSize: 16,
  }
});
