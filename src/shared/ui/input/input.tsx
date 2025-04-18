import { TextInput, View, Text } from "react-native";
import { IInputProps } from "./input.types";
import { styles } from "./input.styles";

export function Input(props: IInputProps) {
	const {
		placeholder,
		iconLeft,
		iconRight,
		inputStyles,
        textStyles,
        label,
		...textInputProps
	} = props;
	return (
		<View>
            <Text style={styles.label}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				style={styles.input}
			></TextInput>
		</View>
	);
}
