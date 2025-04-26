import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { View, Text } from "react-native";
import { Button } from "../../../../shared/ui/button";
import { ICONS } from "../../../../shared/ui/icons";
import { IRegisterStepTwo } from "../../types";
import { styles } from "./register-step-two.styles";
// import { SetImage } from "../../../../shared/ui/images";

export function RegisterStepTwo() {
	const { handleSubmit, control } = useForm<IRegisterStepTwo>({
		defaultValues: {
			name: "",
			surname: "",
		},
	});
	function onSubmit(data: IRegisterStepTwo) {
		console.log(data);
	}

	return (
		<View style={styles.container}>
			<View style={styles.formTitle}>
				<ICONS.UserIcon width={36} height={36} />
				<Text style={styles.text}> Personal info </Text>
			</View>
			<View style={styles.form}>
				<Controller
					control={control}
					name="name"
					rules={{
						required: {
							value: true,
							message: "Name is required",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Name"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="surname"
					// я вважаю, що прізвище не обов'язкове 😤
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Surname"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
			</View>
            <View>
                {/* <SetImage/> */}
                <Text>Upload photo</Text>
            </View>
			<View style={styles.buttonBlock}>
				<Button label="Register" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
