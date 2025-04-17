import { Text, TextInput, View } from "react-native";
import { IInputProps } from "./input.types";
import { styles } from "./input.styles";
import { ErrorIcon } from "./error-icon";


export function Input({ label, errMsg, iconLeft, iconRight, inputStyles, ...props }: IInputProps) {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputBox}>
                {iconLeft && <View style={{ marginRight: 2 }}>{iconLeft}</View>}
                <TextInput style={[inputStyles, styles.input]} {...props}></TextInput>
                {iconRight && <View style={{ marginLeft: "auto" }}>{iconRight}</View>}
            </View>
            {errMsg && (
                <View style={styles.errorBox}>
                    <ErrorIcon />
                    <Text style={styles.errMsg}>{errMsg}</Text>
                </View>
            )}
        </View>
    )
}
