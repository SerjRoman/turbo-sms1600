import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import {Text} from 'react-native'
import { Link } from "expo-router";

export default function Login() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar style="auto" />
			<WelcomeBlock />
			<LoginForm />
			<Text>Don’t have an account? <Link href={'/register'}>Register now</Link></Text>
		</SafeAreaView>
	);
}
