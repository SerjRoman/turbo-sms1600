import { TouchableOpacity, Text } from "react-native";
import { IHeaderProps } from "./header.types";
import { styles } from "./header.styles";
import { Header } from "./header";
import { ICONS } from "../icons";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";

export function HeaderBack(props: IHeaderProps) {
	const { title, ...otherProps } = props;
	const router = useRouter();
	return (
		<Header
			headerLeft={
				<TouchableOpacity
					style={{
						flexDirection: "row",
						gap: 3,
						alignItems: "center",
					}}
					onPress={() => {
						if (router.canGoBack()) router.back();
					}}
				>
					<ICONS.BackIcon
						width={16}
						height={16}
						fill={COLORS.pinkPrimary}
					/>
					<Text style={{ color: COLORS.pinkPrimary, fontSize: 22 }}>
						Back
					</Text>
				</TouchableOpacity>
			}
			title={title}
			{...otherProps}
		/>
	);
}
