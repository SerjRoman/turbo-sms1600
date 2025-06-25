import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./list.styles";
import { useUserContext } from "../../../auth/context";
import { IMAGE_URL } from "../../../../shared/constants";
import { useGetChats } from "../../hooks/use-get-chats";
import { ChatWithRelations } from "../../types/chat";
import { useSocketContext } from "../../../../shared/context/socket";
import { useRouter } from "expo-router";

export function ChatList() {
	const { chats } = useGetChats();
	const { user } = useUserContext();
	const { socket } = useSocketContext();
    const router = useRouter()
	const Item = ({ chat }: { chat: ChatWithRelations }) => (
		<TouchableOpacity
			onPress={() => {
				if (!socket) return;
				socket.emit("joinChat", { chatId: chat.id }, (data: any) => {
					console.log(data);
				});
                router.push(`/${chat.id}`)
                console.log(chat.id)
			}}
		>
			<View style={styles.item}>
				{/* <Image
				source={{ uri: IMAGE_URL + "/" + chat.avatar }}
				style={styles.avatar}
				width={50}
				height={50}
			/> */}
				<Text style={styles.title}>
					{
						chat.participants.find((item) => {
							return item.userId != user?.id;
						})?.userId
					}
				</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<FlatList
			contentContainerStyle={styles.chatList}
			data={chats}
			renderItem={({ item }) => <Item key={item.id} chat={item} />}
			keyExtractor={(item) => item.id.toString()}
		></FlatList>
	);
}
