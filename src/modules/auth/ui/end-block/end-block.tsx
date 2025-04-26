import { View, Text } from "react-native";
import { styles } from "../end-block/end-block.styles";

export function EndBlock() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Already have an account?</Text>
			<Text style={styles.linkText}>Login now</Text>
		</View>
	);
}
