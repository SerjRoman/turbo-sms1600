import { Alert, Image, View, Text, TouchableOpacity } from "react-native";
import { pickImage } from "../../../../../shared/tools";
import { styles } from "./step-two.styles";
import { ApiClient } from "../../../../../shared/api";
import { Input } from "../../../../../shared/ui/input/input";
import { SearchIcon } from "../../../../../shared/ui/icons/icons";
import { Controller, useForm } from "react-hook-form";
import { IContact, IUser } from "../../../../../modules/auth/types/index";
import { Button } from "../../../../../shared/ui/button/button";
import { useLocalSearchParams } from "expo-router";

export function StepTwo() {
	const prevParams = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
		avatar: string;
	}>();

	const { control, handleSubmit } = useForm<IContact>({
		defaultValues: {
			name: prevParams.name,
			surname: prevParams.surname,
			avatar: prevParams.avatar,
		},
	});
	const onSubmit = async (data: IContact) => {
		const body = {
			contactId: prevParams.id,
			localName: data.name + " " + data.surname,
			avatar: data.avatar,
		};
		const result = await ApiClient.Post({
			endpoint: "/api/contacts/create",
			body,
		});
		console.log(result);
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
								style={styles.imageBlock}
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
									const image = "data:image/png;base64," + images[0].base64;
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
									source={{ uri: field.value }}
								/>
								<SearchIcon style={styles.imageIcon} />
							</TouchableOpacity>
						);
					}}
				/>
				<View style={styles.imageBlock}>
					{" "}
					<View style={styles.imageIcon}>
						<SearchIcon />
					</View>{" "}
				</View>

				<Text style={styles.imageText}>Upload photo</Text>
			</View>

			<View>
				<Button
					onPress={handleSubmit(onSubmit)}
					label={"Add contact"}
				/>
			</View>
		</View>
	);
}
