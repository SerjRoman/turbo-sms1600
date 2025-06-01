import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
	inputBox: {
		height:"auto",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 16,
		backgroundColor: COLORS.bisquePrimary,
		borderWidth: 1,
		borderColor: COLORS.black,
	},

    searchInputBox: {
        height:"auto",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 16,
		backgroundColor: COLORS.grey,
		borderWidth: 1,
		borderColor: COLORS.black,
    },

	input: {
        flex: 1,
        height: '100%',
		width: '100%'
    },
	label: {
		fontWeight: 500,
		fontSize: 16,
	},
	errorBox: {
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
	},
	errMsg: {
		color: COLORS.error,
		fontSize: 16,
	},
});
