import { FontWeight } from './../../../../node_modules/lightningcss/node/ast.d';
import { StyleSheet } from "react-native";
import { COLORS } from "../../constats";

export const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: COLORS.bisqueSecondary,
        height: 60,
        borderRadius: 16,
        gap: 10
    },
    iconLeft: {
        paddingLeft: 5,
    },
    iconRight: {
        paddingRight: 5,
    },
    label: {
        fontWeight: 500,
        fontSize: 16,
    }
})