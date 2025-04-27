import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm } from "react-hook-form";
import { ILogin } from "../../types";
import { styles } from "./login-form.styles";

export function LoginForm() {
	// задаем стандартное значение так как по умолчанию стоят undefinedы а нам нужны пустые строки для корректной работы onChange и onChangeText
	const { handleSubmit, control } = useForm<ILogin>({
		defaultValues: { email: "", password: "" },
	});
	function onSubmit(data: ILogin) {
		console.log(data);
	}
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Input
					name="email"
					rules={{
						required: {
							value: true,
							message: "Email is required"
						}
					}}
					control={control}
					placeholder="SuperCoolEmail@gmail.com"
					iconLeft={
						<ICONS.UserIcon width={30} height={30} />
					}
					label="Email"
					autoCorrect={false}
				/>

				<Input.Password
					control={control}
					name="password"
					rules={{
						required: {
							value: true,
							message: "Password is required"
						}
					}}
					placeholder="Password"
					label="Password"
					autoCorrect={false}
				/>
			</View>
			<View style={styles.buttonBlock}>
				<Button label="Login" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>

	);
}
