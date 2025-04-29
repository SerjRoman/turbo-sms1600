import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";

export default function Login() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar style="auto" />
			<WelcomeBlock />
			<LoginForm />
			<View
				style={{
					flex: 0.5,
					backgroundColor: "#fff",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
				}}
			>
				<Text style={{ color: COLORS.grey }}>
					Already have an account?
				</Text>
				<Link href={"/register"} style={{ color: COLORS.pinkPrimary }}>
					Register now
				</Link>
			</View>
		</SafeAreaView>
	);
}
