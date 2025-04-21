import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Providers } from "./Providers";
import { LoginForm, RegisterForm } from "../modules/auth/ui";
import { useState } from "react";

export default function App() {
	const [textValue, setTextValue] = useState("")
	return (
		<Providers>
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<StatusBar style="auto" />
				<RegisterForm/>
			</SafeAreaView>
		</Providers>
	);
}
