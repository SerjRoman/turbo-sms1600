import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.bisquePrimary,
        gap: 5,
        paddingBottom: 10,
        paddingHorizontal:3
    },
    headerTop: {
        flexDirection: "row",
        alignItems:"center",
        alignContent:"center",
        paddingHorizontal: 5,
    },
    headerLeft: {

    },
    title: {
        flex: 4,
        fontSize: 32,
        fontWeight: 400,
        textAlign: "center",

    },
    headerRight: {

    },
    headerBottom : {
    }
});
