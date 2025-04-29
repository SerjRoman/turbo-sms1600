import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 2,
		gap: 25,
	},
	formTitle: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 36,
		fontWeight: 400,
	},

	form: {
		gap: 20,
		padding: 20,
	},
	imageForm: {
		alignItems: "center",
	},
	photoText: {
		fontWeight: 500,
	},
	buttonBlock: {
		alignSelf: "center",
	},
	icon: {
		position: "absolute",
		width: 35,
		height: 35,
	},
	image: {
		borderRadius: 25,
		width: 75,
		height: 75
	},
	button: {
		borderRadius: 25,
		backgroundColor: COLORS.pinkPrimary, 
		width: 75,
		height: 75,
		alignItems: "center",
		justifyContent: "center",
	},
});
