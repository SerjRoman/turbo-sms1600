import { View } from "react-native";
import { Header } from "../../../../../../shared/ui/header";
import { IMAGES } from "../../../../../../shared/ui/images";

export function HeaderProfile() {
	return (
		<Header
			title="Profile"
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
		/>
	);
}
