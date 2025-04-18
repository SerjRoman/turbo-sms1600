import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button } from "../shared/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../shared/ui/input";

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Button label="Submit" disabled={true}/>
			<Input iconLeft={} iconRight={} placeholder="input" label="label"></Input>
		</SafeAreaView>
	);
}
