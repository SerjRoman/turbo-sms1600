import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Providers } from "./Providers";
import { LoginForm } from "../modules/auth/ui";
import { WelcomeBlock } from "../modules/auth/ui";

export default function App() {
	const [textValue, setTextValue] = useState("")
	return (
		<Providers>
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<StatusBar style="auto" />
				<WelcomeBlock />
				<LoginForm />
			</SafeAreaView>
		</Providers>
	);
}
