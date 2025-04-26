import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: 100,
		width: 100,
	},
	title: {
		fontSize: 32,
		color: COLORS.brownPrimaryLight,
	},
});
