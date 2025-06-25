import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	keyboardAvoidingView: {
		flex: 1,
	},
	bottom: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 8,
		backgroundColor: COLORS.bisquePrimary,
	},
	input: {
		// flex: 1,
		width: 280,
		fontSize: 16,
		backgroundColor: COLORS.darkMmm,
		paddingHorizontal: 10,
		borderRadius: 8,
		marginHorizontal: 8,
		height: 40,
	},
});
