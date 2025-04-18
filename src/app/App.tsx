import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button } from "../shared/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../shared/ui/input";
import { useState } from "react";


export default function App() {
	const [textValue, setTextValue] = useState("")
	return (
		<SafeAreaView>
			<StatusBar style="auto"/>
			<Button label="Submit" disabled={true}/>
			<Input
  				placeholder="Введите текст"
  				value={textValue}
  				onChangeText={setTextValue}
  				inputStyles={{ paddingVertical: 10 }}
  				containerStyle={{ marginTop: 16 }}/>
		</SafeAreaView>
	)
}
