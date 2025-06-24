import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
        backgroundColor:COLORS.white,
	},

	item: {
		backgroundColor: COLORS.white,
		padding: 20,
		borderBottomColor: COLORS.grey,
        borderBottomWidth:2
	},
	title: {
		fontSize: 32,
	},
});
