import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bisquePrimary,
	},
	main: {
		flexGrow: 1,
		backgroundColor: COLORS.white,
		gap: 10,
	},
	bottom: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 8,
		backgroundColor: COLORS.bisquePrimary,
	},
	input: {
		width: 280,
		fontSize: 16,
		backgroundColor: COLORS.darkMmm,
		borderRadius: 16,
		height: 40,
		padding: 5,
	},
	message: {
		backgroundColor: "#DDD2C7",
		width: "auto",
		height: "auto",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 5,
		gap: 5,
		borderBottomLeftRadius: 10,
		maxWidth: 350,
	},
});
