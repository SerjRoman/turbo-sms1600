import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../modules/auth/ui";
import { WelcomeBlock } from "../modules/auth/ui";
import Providers from "./Providers";

export default function App() {
	return (
		// <Router>
			<Providers>
				<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
					<StatusBar style="auto" />
					<WelcomeBlock />
					<LoginForm />
				</SafeAreaView>
			</Providers>
		// </Router>
	);
}
