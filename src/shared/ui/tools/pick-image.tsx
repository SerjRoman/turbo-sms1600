import { TouchableOpacity, Image } from "react-native";
import { styles } from "./pick-image.styles";
import { ICONS } from "../icons";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { useState } from "react";

export function SetImage() {
    const [image, setImage] = useState<string>("");
    async function pickImage() {
		const result = await requestMediaLibraryPermissionsAsync();

		if (result.status === "granted") {
			const images = await launchImageLibraryAsync({
				mediaTypes: "images",
				allowsEditing: false,
				allowsMultipleSelection: true,
				selectionLimit: 1,
				base64: true,
			});

			if (images.assets) {
				console.log(images.assets[0].uri);
				setImage(images.assets[0].uri);
			}
		}
	}

	return (
		<TouchableOpacity
			onPress={() => {
				pickImage();
			}}
			style={styles.button}
		>
			<Image
				source={{ uri: image }}
				style={styles.image}
				width={75}
				height={75}
			/>
			<ICONS.SearchIcon style={styles.icon} />
		</TouchableOpacity>
	);
}
