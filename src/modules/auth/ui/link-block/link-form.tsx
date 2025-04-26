import { View ,Text } from "react-native";
import { styles } from "./link-form.styles";



export function Linkbar (){
    return(
            <View style={styles.container}>  
                <Text style={styles.defaultText}>Already have an account? </Text>
                <Text style={styles.linkText}>Login now </Text>
            </View>
    )
}