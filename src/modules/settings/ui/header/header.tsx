import { View } from "react-native";
import { Header } from "../../../../shared/ui/header";
import { IMAGES } from "../../../../shared/ui/images";


export function HeaderSettings() {
	return (
		<Header
			title="Settings"
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
