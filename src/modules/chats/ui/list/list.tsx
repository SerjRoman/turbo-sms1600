import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./list.styles";
import { IMAGE_URL } from "../../../../shared/constants";
import { useGetChats } from "../../hooks/use-get-chats";
import { ChatWithRelations } from "../../types/chat";
import { useRouter } from "expo-router";

export function ChatList() {
	const { chats } = useGetChats();
	const router = useRouter();
	const Item = ({ chat }: { chat: ChatWithRelations }) => (
		<TouchableOpacity
			onPress={() => {
				router.push(`/chat/${chat.id}`);
				console.log(chat.id);
			}}
		>
			<View style={styles.item}>
				<Image
					source={{
						uri:
							IMAGE_URL +
							"/" +
							(chat.contact || chat.user).avatar,
					}}
					style={styles.avatar}
					width={50}
					height={50}
				/>
				<View style={styles.chatTitleBlock}>
					<Text style={styles.title}>
						{chat.contact
							? chat.contact.localName
							: `${chat.user.name} ${chat.user.surname}`}
					</Text>
					<Text style={styles.previewText}>
						{chat.lastMessage
							? chat.lastMessage.text
							: "No messages"}
					</Text>
				</View>
				<Text>
					{chat.lastMessage
						? new Date(
								chat.lastMessage.createdAt
						  ).toLocaleTimeString()
						: null}
				</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<FlatList
			contentContainerStyle={styles.chatList}
			data={chats}
            extraData={chats}
			renderItem={({ item }) => <Item key={item.id} chat={item} />}
			keyExtractor={(item) => item.id.toString()}
		></FlatList>
	);
}
