import { View ,Text } from "react-native";
import { styles } from "./link-form.styles";
import { Link } from "expo-router";



export function Linkbar (){
    return(
            <View style={styles.container}>  
                <Text style={styles.defaultText}>Already have an account? </Text>
            </View>
    )
}