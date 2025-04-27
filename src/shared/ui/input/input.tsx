import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { IInputProps } from "./input.types";
import { styles } from "./input.styles";
import { ICONS } from "../icons";
import { useState } from "react";
import { Controller } from "react-hook-form";

function Input({
	label,
	iconLeft,
	iconRight,
	inputStyles,
	containerStyles,
	control,
	...props
}: IInputProps) {
	return (
		<Controller
			control={control}
			{...props}
			render={({ field, fieldState }) => {
				return (
					<View>
						{label && <Text style={styles.label}>{label}</Text>}
						<View style={[styles.inputBox, containerStyles]}>
							{iconLeft && <View style={{ marginRight: 2 }}>{iconLeft}</View>}
							<TextInput onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								style={[inputStyles, styles.input]} {...props} />
							{iconRight && (
								<View style={{ marginLeft: "auto" }}>{iconRight}</View>
							)}
						</View>
						{fieldState.error && (
							<View style={styles.errorBox}>
								<ICONS.ErrorIcon width={16} height={16} />
								<Text style={styles.errMsg}>{fieldState.error?.message}</Text>
							</View>
						)}
					</View>
				);
			}}
		/>
	);
}

function Password(props: Omit<IInputProps, "iconLeft" | "iconRight">) {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<Input
			secureTextEntry={isHidden}
			iconLeft={<ICONS.KeyIcon width={30} height={30} />}
			iconRight={
				<TouchableWithoutFeedback
					onPress={() => {
						setIsHidden(!isHidden);
					}}
				>
					{isHidden ? (
						<ICONS.EyeSlashIcon width={30} height={30} />
					) : (
						<ICONS.EyeIcon width={30} height={30} />
					)}
				</TouchableWithoutFeedback>
			}
			{...props}
		/>
	);
}

Input.Password = Password;

export { Input };
