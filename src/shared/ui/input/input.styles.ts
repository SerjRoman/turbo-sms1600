import { StyleSheet } from "react-native";
import { COLORS } from "../../constats/";
export const styles = StyleSheet.create({
    input: {
        width: 349,
        height: 60,//хз какую брать, там разные
        borderRadius: 16,
        borderBottomWidth:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bisquePrimary,
    },
    withIconLeft: {

    },
    withIconRight: {

    },
    label: {
        color: "black",
        fontWeight:500,
        justifyContent: "center",
        alignItems: "center"
    }
});
