import { View } from "react-native";
import { ChatList } from "../../modules/chats/ui";

export default function Chats() {
	return (
		<View style={{ flex: 1 }}>
			<ChatList />
		</View>
	);
}
