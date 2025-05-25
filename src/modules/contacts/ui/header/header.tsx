import { TouchableOpacity, View } from "react-native";
import { Header } from "../../../../shared/ui/header";
import { IMAGES } from "../../../../shared/ui/images";
import { ICONS } from "../../../../shared/ui/icons";
import { Input } from "../../../../shared/ui/input";
import { useRouter } from "expo-router";

export function HeaderContacts() {
	const router = useRouter();
	return (
		<Header
			title="Contacts"
			headerLeft={
				<View>
					<IMAGES.LogoImage
						style={{
							width: 40,
							height: 40,
						}}
					/>
				</View>
			}
			headerRight={
				<TouchableOpacity
					onPress={() => {
						router.push("/modals/create-contact-step-one");
					}}
				>
					<ICONS.PlusIcon width={40} height={40} />
				</TouchableOpacity>
			}
			headerBottom={
				<View
					style={{
						height: 32,
						borderRadius: 16,
					}}
				>
					<Input.Search
						style={{
							height: 31,
							width: 392,
							paddingVertical: 1,
							paddingHorizontal: 7,
						}}
						placeholder="Search"
						iconLeft={<ICONS.SearchIcon width={24} height={24} />}
					/>
				</View>
			}
		/>
	);
}

// 🍓
// ^kryto
