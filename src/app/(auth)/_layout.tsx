import { Stack } from "expo-router";
import { WelcomeBlock } from "../../modules/auth/ui";

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<WelcomeBlock />
			<Stack.Screen name="login"></Stack.Screen>
			<Stack.Screen name="register"></Stack.Screen>
		</Stack>
	);
}
