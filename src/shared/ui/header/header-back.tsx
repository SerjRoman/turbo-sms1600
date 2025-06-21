import { TouchableOpacity, Text, View } from "react-native";
import { IHeaderProps } from "./header.types";
import { styles } from "./header.styles";
import { Header } from "./header";
import { ICONS } from "../icons";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";
import { Input } from "../input";

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

function WithSearchInput(props: IHeaderProps) {
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
			title={title}
			{...otherProps}
		/>
	);
}

HeaderBack.WithSearchInput = WithSearchInput;
