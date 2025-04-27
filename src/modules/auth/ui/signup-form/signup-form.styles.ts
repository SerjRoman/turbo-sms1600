import { StyleSheet } from "react-native";
// import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 2,
		gap: 25,
	},
	formLabel: {
		fontSize: 30,
		fontWeight: 400,
	},
	form: {
		padding: 10,
	},
	buttonBlock: {
		alignSelf: "center",
		flexDirection: "row",
		gap: 10
	},
	selectImgContainer: {
		width: 100,
		height: 130,
		gap: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	selectImgText: {
		fontWeight: 500,
		fontSize: 14,
	},
	selectImgIcon: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-20%, -20%)",
	},
	imgContainer: {
		position: "relative",
		width: 75,
		height: 75,
		borderRadius: 25,
		opacity: 50,
	},
});
