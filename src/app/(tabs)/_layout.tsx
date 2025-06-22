import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../shared/constants";
import { HeaderProfile } from "../../modules/profile/ui";
import { HeaderChats } from "../../modules/chats/ui";
import { HeaderSettings } from "../../modules/settings/ui";
import { HeaderContacts } from "../../modules/contacts/ui";

export default function TabsLayout() {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.bisquePrimary }}
			edges={["top"]}
		>
			<Tabs
				initialRouteName={"chats"}
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
