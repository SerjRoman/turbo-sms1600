import { StyleSheet } from "react-native";

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
    imageForm:{
        alignItems:"center"
    },
    photoText:{
        fontWeight:500
    },
	buttonBlock: {
		alignSelf: "center",
	},
});
