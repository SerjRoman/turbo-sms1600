import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared/constants";

export const styles = StyleSheet.create({
    icon:{
        position:"absolute",
        width:35,
        height:35,
    },
    image:{
        borderRadius:25
    },
	button: {
        borderRadius:25,
		backgroundColor: COLORS.pinkPrimary, //не придумала як додати Антона на фон і шоб він потім на фото мінявся
		width: 75,
		height: 75,
		alignItems: "center",
		justifyContent: "center",
	},
   
  });