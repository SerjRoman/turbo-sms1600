import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 30
    },

    contactField: {
        width: "100%",
        height: 70,

        paddingTop: 30

    },

    contactSurname: {
        width: "100%",
        height: 70
    },

    imageUserContainer: {
        width: 201,
        height: 205,
        flexDirection: "column",
        padding: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    imageBlock: {
        width: 150,
        height: 150
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 25
    },

    imageText: {
        fontSize: 32
    },
    imageIcon: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        // opacity: "50%",
        flexDirection: "column",
        alignItems: "center"

    },
    
});
