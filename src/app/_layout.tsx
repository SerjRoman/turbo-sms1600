import { Stack } from "expo-router";
import { Providers } from "./Providers";
//Stack - последовательность экранов и при помощи него мы можем указывать какие есть экраны и взаимодействие с ними(из expo-router)
export default function RootLayout() {
	return (
		<Providers>
			<Stack screenOptions={{ headerShown: false }}>
				{/* Stack.Screen - компонент который позволяет указать/обозначить какой то экран и настройки к нему */}
				{/* name - имя нашего маршрута */}
				<Stack.Screen
					name="index"
					options={{
						headerShown: false,
					}}
				></Stack.Screen>
			</Stack>
		</Providers>
	);
}
