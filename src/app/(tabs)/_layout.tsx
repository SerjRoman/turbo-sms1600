import { Tabs } from "expo-router";
import { ICONS } from "../../shared/ui/icons";
import { Header } from "../../shared/ui/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../shared/constants";
import { View, Text } from "react-native";
import { Input } from "../../shared/ui/input";
import { IMAGES } from "../../shared/ui/images";

export default function TabsLayout() {
	return (
		// он не хочет, хз почему
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.bisqueSecondary }}
		>
			<Tabs initialRouteName="chats">
				<Tabs.Screen
					name={"chats"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ChatsIcon width={20} height={20} />;
						},
						tabBarLabel: "Chats",
						header: () => {
							return (
								<Header
									title="Chats"
									headerLeft={
										<View>
											<IMAGES.LogoImage
												style={{
													width: 40,
													height: 40,
												}}
											/>
										</View>
									}
									headerRight={
										<View>
											<ICONS.PlusIcon
												width={40}
												height={40}
											/>
										</View>
									}
									headerBottom={
										<View
											style={{
												height: 32,
												borderRadius: 16,
											}}
										>
											<Input.Search
												style={{
													height: 31,
													width: 392,
													paddingVertical: 1,
													paddingHorizontal: 7,
												}}
												placeholder="Search"
												iconLeft={
													<ICONS.SearchIcon
														width={24}
														height={24}
													/>
												}
											/>
										</View>
									}
								/>
							);
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
						header: () => {
							return (
								<Header
									title="Contacts"
									headerLeft={
										<View>
											<IMAGES.LogoImage
												style={{
													width: 40,
													height: 40,
												}}
											/>
										</View>
									}
									headerRight={
										<View>
											<ICONS.PlusIcon
												width={40}
												height={40}
											/>
										</View>
									}
									headerBottom={
										<View
											style={{
												height: 32,
												borderRadius: 16,
											}}
										>
											<Input.Search
												style={{
													height: 31,
													width: 392,
													paddingVertical: 1,
													paddingHorizontal: 7,
												}}
												placeholder="Search"
												iconLeft={
													<ICONS.SearchIcon
														width={24}
														height={24}
													/>
												}
											/>
										</View>
									}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name={"profile"}
					options={{
						tabBarIcon: () => {
							return <ICONS.ProfileIcon width={20} height={20} />;
						},
						tabBarLabel: "Profile",
						header: () => {
							return (
								<Header
									title="Profile"
									headerLeft={
										<View>
											<IMAGES.LogoImage
												style={{
													width: 40,
													height: 40,
												}}
											/>
										</View>
									}
								/>
							);
						},
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
						header: () => {
							return <Header title="Settings" />;
						},
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
