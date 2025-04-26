import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Providers } from "./Providers";
import { LoginForm } from "../modules/auth/ui";
import { EndBlock, WelcomeBlock } from "../modules/auth/ui";
import { RegisterStepOne } from "../modules/auth/ui/register-step-one";
import { RegisterStepTwo } from "../modules/auth/ui/register-step-two";


export default function App() {
	return (
		<Providers>
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
				<StatusBar style="auto" />
				<WelcomeBlock />
                {/* <LoginForm/> */}
				<RegisterStepOne/>
				{/* <RegisterStepTwo /> */}
				<EndBlock/>
			</SafeAreaView>
		</Providers>
	);
}
