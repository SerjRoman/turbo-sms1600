import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Providers } from "./Providers";
import { LoginForm } from "../modules/auth/ui";

export default function App() {
	return (
		<Providers>
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<StatusBar style="auto" />
				<LoginForm/>
			</SafeAreaView>
		</Providers>
	);
}
