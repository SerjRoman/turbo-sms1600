import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { IRegisterStepOne } from "../../types";
import { styles } from "./register-step-one.styles";
import { useRouter } from "expo-router";

export function RegisterStepOne() {
    // useRouter - возвращает объект Router, который дает возможность направлять(навигация) пользователя по экранам 
	const router = useRouter();
	const { handleSubmit, control } = useForm<IRegisterStepOne>({
		defaultValues: {
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		},
	});
	function onSubmit(data: IRegisterStepOne) {
        const {confirmPassword, ...otherData} = data
        // Если хотим передать параметры при навигации на след экран
        // Тогда передаем объект с обязательным свойством pathname(ссылка) и свойством params: объект ваших параметров
		router.navigate({pathname: "/register/step-two", params: otherData});
		console.log(data);
	}

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Controller
					control={control}
					name="email"
					rules={{
						required: {
							value: true,
							message: "Email is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="SuperCoolEmail@gmail.com"
								iconLeft={
									<ICONS.EmailIcon width={30} height={30} />
								}
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Email"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="username"
					rules={{
						required: {
							value: true,
							message: "Username is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="SuperCoolUsername"
								iconLeft={
									<ICONS.UserIcon width={30} height={30} />
								}
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Username"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					rules={{
						required: {
							value: true,
							message: "Password is required",
						},
					}}
					name="password"
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Password"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Password"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					rules={{
						required: {
							value: true,
							message: "Password is required",
						},
					}}
					name="confirmPassword"
					render={({ field, fieldState }) => {
						return (
							<Input.Password
								placeholder="Confirm password"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Confirm password"
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
			</View>
			<View style={styles.buttonBlock}>
				<Button label="Next" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
// UwU
