
import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
	contactList: {
		flex: 1,
		padding: 5,
		backgroundColor: COLORS.white,
	},
	item: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: COLORS.white,
		gap: 5,
		padding: 5,
		borderBottomColor: COLORS.grey,
		borderBottomWidth: 2,
	},
	title: {
		fontSize: 22,
	},
	avatar: {
		borderRadius: 9999,
	},
});
