import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { IInputProps } from "./input.types";
import { styles } from "./input.styles";


export function Input({
	label,
	errMsg,
	iconLeft,
	iconRight,
	inputStyles,
	containerStyles,
	...props
}: IInputProps) {
	return (
		<View>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={[styles.inputBox, containerStyles]}>
				{iconLeft && <View style={{ marginRight: 2 }}>{iconLeft}</View>}
				<TextInput style={[inputStyles, styles.input]} {...props} />
				{iconRight && (
					<View style={{ marginLeft: "auto" }}>{iconRight}</View>
				)}
			</View>
			{errMsg && (
				<View style={styles.errorBox}>
					{/* <ErrorIcon /> */}
					<Text style={styles.errMsg}>{errMsg}</Text>
				</View>
			)}
		</View>
	);
}

// Password