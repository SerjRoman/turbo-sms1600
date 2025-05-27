import { Stack } from "expo-router";
import { HeaderBack } from "../../shared/ui/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../shared/constants";

export default function LayoutModal() {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.bisquePrimary }}
            edges={["top"]}
		>
			<Stack>
				<Stack.Screen
					name="create-contact-step-one"
					options={{
						header: () => <HeaderBack title="Select Contact" />,
					}}
				/>
				<Stack.Screen
					name="create-contact-step-two"
					options={{
						header: () => <HeaderBack title="Create Contact" />,
					}}
				/>
			</Stack>
		</SafeAreaView>
	);
}
