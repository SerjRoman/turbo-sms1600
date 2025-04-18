import { StyleSheet } from "react-native";
import { COLORS } from "../../constats/";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",  
        alignItems: "center",  
        borderWidth: 3,       
        borderRadius: 16,       
        backgroundColor: COLORS.bisquePrimary,
        width:350
    },
    input: {
        flex: 1,               
        fontSize: 16,
        backgroundColor: COLORS.bisquePrimary,
    }
  })