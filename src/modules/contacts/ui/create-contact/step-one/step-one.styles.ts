import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        padding: 10,
        alignItems: "center",
    },
    blockSearchUser: {
        padding: 10,
    },
    blockFoundUser: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    inputSearch: {
        width: "100%",
        height: 40
    },
    foundUserUsername: {
        fontSize: 22
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    error: {
        color: "red",
        fontSize: 24
    }
})