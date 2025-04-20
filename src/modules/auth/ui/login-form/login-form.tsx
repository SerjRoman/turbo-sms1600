import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { ILogin } from "../../types";

export function LoginForm() {
	// задаем стандартное значение так как по умолчанию стоят undefinedы а нам нужны пустые строки для корректной работы onChange и onChangeText
	const { handleSubmit, control } = useForm<ILogin>({
		defaultValues: { email: "", password: "" },
	});
	function onSubmit(data: ILogin) {
		console.log(data);
	}
	return (
		<View>
			<View>
				{/* Контроллер специальный компонент, который позволяет контролировать нестандартные поля(теги html)*/}
				<Controller
					// для связи контроллера с юз форма
					control={control}
					// имя поля формы, взято из интерфейса
					name="email"
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
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="password"
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Password"
								iconLeft={
									<ICONS.KeyIcon width={30} height={30} />
								}
								iconRight={
									<ICONS.EyeIcon width={30} height={30} />
								}
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Password"
								autoCorrect={false}
							/>
						);
					}}
				/>
			</View>
			<View>
				<Button label="Login" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
// UwU
