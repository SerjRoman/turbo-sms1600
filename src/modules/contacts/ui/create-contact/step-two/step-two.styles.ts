import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },

    contactName: {
        width: "100%",
        height: 70,
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingTop: 30,
        // paddingBottom: 20,  
    },

    contactSurname: {
        width: "100%",
        height: 70,
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 20,
    },

    imageUserContainer: {
        width: 201,
        height: 205,
        flexDirection: "column",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        // paddingLeft: 100.5,
        // paddingRight: 100.5,
    }, 

    imageBlock: {
        
    },

    imageText: {
        fontSize: 32
    },
    imageIcon: {
        position: "absolute",
        flexDirection: "column",
        alignItems: "center"
    }

})