import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { Header } from "../../shared/ui/header/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Tabs initialRouteName="chats">
				<Tabs.Screen
					name={"chats"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ChatsIcon width={20} height={20} />;
						},
						tabBarLabel: "Chats",
						header: () => {
							return <Header title="Chats" />;
						},
					}}
				/>
				<Tabs.Screen
					name={"contacts"}
					options={{
						tabBarIcon: () => {
							return (
								<ICONS.ContactsIcon width={20} height={20} />
							);
						},
						tabBarLabel: "Contacts",
					}}
				/>
				<Tabs.Screen
					name={"profile"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ProfileIcon width={20} height={20} />;
						},
						tabBarLabel: "Profile",
					}}
				/>
				<Tabs.Screen
					name={"settings"}
					options={{
						tabBarIcon: () => {
							return (
								<ICONS.SettingsIcon width={20} height={20} />
							);
						},
						tabBarLabel: "Settings",
					}}
				/>
			</Tabs>
		</SafeAreaView>
	);
}
//     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒/ᐠ｡ꞈ｡ᐟ\/ᐠ｡ꞈ｡ᐟ\▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒koteki v dome▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
//▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
