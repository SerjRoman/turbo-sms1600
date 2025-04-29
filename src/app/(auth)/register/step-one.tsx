import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { RegisterStepOne, WelcomeBlock } from "../../../modules/auth/ui";
import { COLORS } from "../../../shared/constants";


export default function Register() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar style="auto" />
			<WelcomeBlock />
			<RegisterStepOne />
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
				<Link href={"/login"} style={{ color: COLORS.pinkPrimary }}>Login now</Link>
			</View>
		</SafeAreaView>
	);
}
