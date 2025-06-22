import { Alert, Image, View, Text, TouchableOpacity } from "react-native";
import { pickImage } from "../../../../../shared/tools";
import { styles } from "./step-two.styles";
import { ApiClient } from "../../../../../shared/api";
import { Input } from "../../../../../shared/ui/input/input";
import { SearchIcon } from "../../../../../shared/ui/icons/icons";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../../../shared/ui/button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IContactForm } from "./step-two-types";
import { IMAGE_URL } from "../../../../../shared/constants";
import { useUserContext } from "../../../../auth/context";

export function StepTwo() {
	const prevParams = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
		avatar: string;
	}>();
	const { token } = useUserContext();
	const router = useRouter();
	const { control, handleSubmit } = useForm<IContactForm>({
		defaultValues: {
			name: prevParams.name,
			surname: prevParams.surname,
			avatar: prevParams.avatar,
		},
	});
	const onSubmit = async (data: IContactForm) => {
		if (!token) return;
		const body = {
			contactUserId: prevParams.id,
			localName: data.name + " " + data.surname,
			avatar: data.avatar,
		};
		const result = await ApiClient.Post({
			endpoint: "/api/contacts/create",
			token,
			body,
		});
		console.log(result);
		if (result.status == "success") {
			router.replace("/contacts");
			return;
		}
        Alert.alert(result.message ? result.message : 'Unhadled error')
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.contactName}>
				<Controller
					control={control}
					name="name"
					rules={{
						required: {
							value: true,
							message: "Name is required",
						},
						// .max(30, "This field should be <= 30 characters")
						maxLength: {
							value: 30,
							message: "This field should be <= 30 characters",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								label="Contact name"
								placeholder="name"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								errMsg={fieldState.error?.message}
								inputStyles={styles.input}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="surname"
					rules={{
						required: {
							value: true,
							message: "Surname is required",
						},
						maxLength: {
							value: 30,
							message: "This field should be <= 30 characters",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								label="Surname"
								placeholder="surname"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								errMsg={fieldState.error?.message}
								inputStyles={styles.input}
							/>
						);
					}}
				/>
			</View>

			<View style={styles.imageUserContainer}>
				<Controller
					control={control}
					name="avatar"
					render={({ field }) => {
						return (
							<TouchableOpacity
								onPress={async () => {
									const images = await pickImage({
										selectionLimit: 1,
										allowsEditing: true,
										base64: true,
										allowsMultipleSelection: false,
									});
									if (!images) {
										Alert.alert("Image is required");
										return;
									}
									const image =
										"data:image/png;base64," +
										images[0].base64;
									if (!image) {
										Alert.alert(
											"Error occured. Try again."
										);
										return;
									}
									field.onChange(image);
								}}
							>
								<Image
									style={styles.image}
									source={{
										uri: field.value.startsWith(
											"data:image/png;base64,"
										)
											? field.value
											: `${IMAGE_URL}/${field.value}`,
									}}
								/>
								<SearchIcon
									style={styles.imageIcon}
									width={34}
									height={34}
								/>
							</TouchableOpacity>
						);
					}}
				/>

				<Text style={styles.imageText}>Upload photo</Text>
			</View>

			<Button onPress={handleSubmit(onSubmit)} label={"Add contact"} />
		</View>
	);
}
