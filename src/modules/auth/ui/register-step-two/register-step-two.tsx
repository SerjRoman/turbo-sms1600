import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../shared/ui/input";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "../../../../shared/ui/button";
import { ICONS } from "../../../../shared/ui/icons";
import { IRegisterStepTwo } from "../../types";
import { styles } from "./register-step-two.styles";
import { useLocalSearchParams } from "expo-router";
import { IMAGES } from "../../../../shared/ui/images";
import { pickImage } from "../../../../shared/tools";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function RegisterStepTwo() {
	const params = useLocalSearchParams<{
		username: string;
		password: string;
		email: string;
	}>();
	const { handleSubmit, control, setValue } = useForm<IRegisterStepTwo>({
		defaultValues: {
			name: "",
			surname: "",
			avatar: "",
		},
	});
	const { register } = useAuth();
	async function onSubmit(data: IRegisterStepTwo) {
		const result = await register({ ...params, ...data });
		console.log(result);
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
								inputStyles={styles.input}
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
								inputStyles={styles.input}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
				<View style={styles.imageForm}>
					<Controller
						control={control}
						name="avatar"
						render={({ field, fieldState }) => {
							return (
								<TouchableOpacity
									onPress={async () => {
										const images = await pickImage({
											mediaTypes: "images",
											allowsEditing: false,
											allowsMultipleSelection: false,
											selectionLimit: 1,
											base64: true,
										});
										if (!images) return;
										if (!images[0].base64) return;
										// Boolean(undefined, null ) -> false: not false -> true
										setValue(
											"avatar",
											"data:image/png;base64," +
												images[0].base64
										);
										// field.onChange()
									}}
									style={styles.button}
								>
									{field.value ? (
										<Image
											source={{ uri: field.value }}
											resizeMode={"cover"}
											style={styles.image}
										/>
									) : (
										<IMAGES.LogoImage
											style={styles.image}
											resizeMode={"cover"}
										/>
									)}

									<ICONS.SearchIcon style={styles.icon} />
									{/* проверка через field */}
								</TouchableOpacity>
							);
						}}
					/>

					<Text style={styles.photoText}>Upload photo</Text>
				</View>
			</View>

			<View style={styles.buttonBlock}>
				<Button label="Register" onPress={handleSubmit(onSubmit)} />
			</View>
		</View>
	);
}
