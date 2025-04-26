import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
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
				{/* Контроллер специальный компонент, который позволяет контролировать нестандартные поля(теги html)*/}
				<Controller
					// для связи контроллера с юз форма
					control={control}
					// имя поля формы, взято из интерфейса
					name="email"
					rules={{
						required: {
							value: true,
							message: "Email is required"
						}
					}}
					// render - функция, которая описывает, как должно выглядеть поле
					// field - это объект, который позволяет контролировать поле (связывает поле с формой)
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="SuperCoolEmail@gmail.com"
								iconLeft={
									<ICONS.UserIcon width={30} height={30} />
								}
								// для мониторинга изменения поля и записывания значения в поле
								onChange={field.onChange}
								// для мониторинга изменения текста и так же записывания
								onChangeText={field.onChange}
								// значение с которым можно работать и которое будет отображаться
								value={field.value}
								label="Email"
								// отключает Т9
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="password"
                    rules={{
						required: {
							value: true,
							message: "Password is required"
						}
					}}
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
			</View>
			<View style={styles.buttonBlock}>
				<Button label="Login" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
