import { View } from "react-native";
import { Header } from "../../../../../../shared/ui/header";
import { IMAGES } from "../../../../../../shared/ui/images";
import { ICONS } from "../../../../../../shared/ui/icons";
import { Input } from "../../../../../../shared/ui/input";

export function HeaderContacts() {
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
				<View>
					<ICONS.PlusIcon width={40} height={40} />
				</View>
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
