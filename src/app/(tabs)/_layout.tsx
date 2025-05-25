import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { Header } from "../../shared/ui/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../shared/constants";
import { View, Text } from "react-native";
import { Input } from "../../shared/ui/input";
import { IMAGES } from "../../shared/ui/images";
import { HeaderSettings } from "../../modules/auth/ui/settings/ui";
import { HeaderProfile } from "../../modules/auth/ui/profile/ui";
import { HeaderContacts } from "../../modules/auth/ui/contacts/ui";
import { HeaderChats } from "../../modules/auth/ui/chats/ui";

export default function TabsLayout() {
	return (
		// он не хочет, хз почему
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.bisquePrimary }}
			edges={["top"]}
		>
			<Tabs
				initialRouteName="chats"
				screenOptions={{
					tabBarStyle: {
						backgroundColor: COLORS.bisqueSecondary,
					},
					tabBarLabelStyle: {
						fontSize: 12,
					},

					tabBarActiveTintColor: COLORS.grey,
					tabBarInactiveTintColor: COLORS.black,
				}}
			>
				<Tabs.Screen
					name={"chats"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ChatsIcon width={20} height={20} />;
						},
						tabBarLabel: "Chats",
						header: () => <HeaderChats />,
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
						header: () => <HeaderContacts />,
					}}
				/>
				<Tabs.Screen
					name={"profile"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ProfileIcon width={20} height={20} />;
						},
						tabBarLabel: "Profile",
						header: () => <HeaderProfile />,
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
						header: () => <HeaderSettings />,
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
