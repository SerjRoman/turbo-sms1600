import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
    container: {
        width: 266,
        height:32,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
        marginBottom:10
        
    },
    defaultText: {
        fontSize: 24,
        color: COLORS.grey
    },
    linkText: {
        fontSize: 24,
        color: COLORS.brownPrimaryLight
    }
    
});
