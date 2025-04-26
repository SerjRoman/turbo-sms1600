import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row"
    },
    text:{
        color: COLORS.grey
    },
    linkText: {
		color: COLORS.pinkPrimary,
    }
  });