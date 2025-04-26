import { Controller, useForm } from "react-hook-form";
import { IRegistration } from "../../types/register";
import { ScrollView, View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { ICONS } from "../../../../shared/ui/icons";
import { styles } from "./register-form.styles";
import { Button } from "../../../../shared/ui/button";
import { WelcomeBlock } from "../welcome-block";

export  function RegisterForm() {
	const { handleSubmit, control } = useForm<IRegistration>({
		defaultValues: { email: "", username: "", password: "", re_typePassword: "" },
	});
	function onSubmit(data: IRegistration) {
		console.log(data);
	}
	return (
		<View style={styles.container}>
            <ScrollView>
            
            <WelcomeBlock />

            
			<View style={styles.form}>
				<Controller
					control={control}
					name="email"
					rules={{
						required: {
							value: true,
							message: "Email is required"
						}
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="SuperCoolEmail@gmail.com"
								iconLeft={
									<ICONS.UserIcon width={30} height={30} />
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
                            message: "Username is required"
                        }

                    }}
                    render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Username"
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
                <Controller 
                control={control}
                name="re_typePassword"
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
				<Button label="Register" onPress={handleSubmit(onSubmit)} />
			</View>
            </ScrollView>
		</View>
	);
}