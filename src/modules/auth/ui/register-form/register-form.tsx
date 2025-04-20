import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { Button } from "../../../../shared/ui/button";
import { useForm, Controller } from "react-hook-form";
import { IRegister } from "../../types";

export function RegisterForm() {
	const { handleSubmit, control } = useForm<IRegister>({
		defaultValues: {
			email: "",
			username: "",
			password: "",
			reTypePassword: "",
		},
	});
	function onSubmit(data: IRegister) {
		console.log(data);
	}

	return (
		<View>
			<View style={{ gap: 10 }}>
				<Controller
					control={control}
					name="email"
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
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="username"
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
				<Controller
					control={control}
					name="reTypePassword"
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Re-type password"
								iconLeft={
									<ICONS.KeyIcon width={30} height={30} />
								}
								iconRight={
									<ICONS.EyeIcon width={30} height={30} />
								}
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								label="Re-type password"
								autoCorrect={false}
							/>
						);
					}}
				/>
			</View>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					paddingTop: 35,
				}}
			>
				<Button label="Register" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
// UwU
