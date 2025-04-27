import { Control } from "react-hook-form";
import { ISignUp } from "../../../types";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../signup-form.styles";
import { ICONS } from "../../../../../shared/ui/icons";
import { Input } from "../../../../../shared/ui/input";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export function PersonalInfoForm({ control }: { control: Control<ISignUp> }) {
	const defaultImg = require("../../../../../../assets/avatar.png");
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const pickImage = async () => {
		const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("You've refused to allow this appp to access your camera!");
			return;
		}
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			base64: true,
		});

		console.log(result.canceled);

		if (!result.canceled) {
			setSelectedImage(String(result.assets[0].base64));
		}
	};
	return (
		<View style={{ gap: 30, alignItems: "center", width: "100%" }}>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<ICONS.UserIcon width={35} height={35} />
				<Text style={styles.formLabel}>Personal info</Text>
			</View>
			<Input
				style={{ width: "100%" }}
				name="firstName"
				rules={{
					required: {
						value: true,
						message: "First name is required",
					},
				}}
				control={control}
				placeholder="Name"
			/>
			<Input
				style={{ width: "100%" }}
				name="lastName"
				rules={{
					required: {
						value: true,
						message: "Last name is required",
					},
				}}
				control={control}
				placeholder="Surname"
			/>
			<View style={styles.selectImgContainer}>
				<TouchableOpacity
					style={styles.imgContainer}
					onPress={pickImage}
				>
					<Image
						source={selectedImage
							? { uri: "data:image/png;base64," + selectedImage }
							: defaultImg}
					/>
					<View style={styles.selectImgIcon}>
						<ICONS.SearchIcon width={25} height={25} />
					</View>
				</TouchableOpacity>
				<Text style={styles.selectImgText}>Upload photo</Text>
			</View>
		</View>
	);
}
