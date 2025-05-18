import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
	container: {
        backgroundColor: COLORS.bisquePrimary,
        gap: 5,
        paddingBottom: 10,
    },
    headerTop: {
        flexDirection: "row",
        paddingHorizontal: 5,

    },
    headerLeft: {
        flex: 1,
    },
    title: {
        flex: 4,
        fontSize: 32,
        fontWeight: 400,
        textAlign: "center",
    },
    headerRight: {
        flex: 1
    },
    headerBottom : {
    }
});
