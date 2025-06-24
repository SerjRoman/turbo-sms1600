import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	contactList: {
		backgroundColor: COLORS.white,
	},
    container: {
		flex: 1,
		paddingTop: 30,
		alignItems: "center",
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
