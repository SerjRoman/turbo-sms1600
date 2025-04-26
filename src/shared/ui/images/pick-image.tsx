// import { TouchableOpacity, View, Image } from "react-native";
// // import { useState } from "react";
// import {
// 	launchImageLibraryAsync,
// 	requestMediaLibraryPermissionsAsync,
// } from "expo-image-picker";
// import { styles } from "./pick-image.styles";

// // const [image, setImage] = useState<string>("");

// async function pickImage() {
// 	const result = await requestMediaLibraryPermissionsAsync();

// 	if (result.status === "granted") {
// 		const images = await launchImageLibraryAsync({
// 			mediaTypes: "images",
// 			allowsEditing: false,
// 			allowsMultipleSelection: true,
// 			selectionLimit: 1,
// 			base64: true,
// 		});

// 		if (images.assets) {
// 			console.log(images.assets[0].uri);
// 			setImage(images.assets[0].uri);
// 		}
// 	}
// }
// export function SetImage() {
// 	return (
// 		<View>
// 			<TouchableOpacity
// 				onPress={() => {
// 					pickImage();
// 				}}
// 				style={styles.button}
// 			>
// 			</TouchableOpacity>
//             <Image source={{ uri: image }} width={350} height={250} />
// 		</View>
// 	);
// }
