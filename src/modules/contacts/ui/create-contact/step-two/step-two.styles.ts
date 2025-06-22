import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "column",
		gap: 20,
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 10,
	},

	contactName: {
		width: "100%",
		paddingTop: 30,
	},
    imageUserContainer: {
        width: 200,
        height: 200,
        alignItems: 'center',
        position: 'relative'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 25,
        opacity: 0.5
    },
    imageIcon: {
        position: 'absolute',
        top: 61,
        left: 61
    },
	imageText: {
		fontSize: 32,
	},

	input: {
		width: "100%",
		height: 40,
	},
});
