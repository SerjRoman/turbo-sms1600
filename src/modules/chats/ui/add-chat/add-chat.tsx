import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Image,
	Alert,
} from "react-native";
import { useGetContacts } from "../../../contacts/hooks/use-get-contacts";
import { styles } from "./add-chat.style";
import { Contact } from "../../../contacts/types/contact";
import { IMAGE_URL } from "../../../../shared/constants";
import { ApiClient } from "../../../../shared/api";
import { useUserContext } from "../../../auth/context";
import { Result } from "../../../../shared/types/api";
import { Chat } from "../../types/chat";
import { useRouter } from "expo-router";

export function AddChat() {
	const { contactsList } = useGetContacts();
	const { token } = useUserContext();
	const router = useRouter();
	const handleAddChat = async (contactId: number) => {
        console.log(contactId)
		if (!token) return;
		const resp = await ApiClient.Post<Chat>({
			endpoint: "/api/chats/create",
			token,
			body: {
				id: contactId,
			},
		});
		console.log("response", resp);
		if (resp.status === "failure") {
			Alert.alert("Failed to create chat", resp.message);
			return;
		}
		router.back();
	};

	const Item = ({ contact }: { contact: Contact }) => (
		<TouchableOpacity onPress={() => handleAddChat(contact.id)}>
			<View style={styles.item}>
				<Image
					source={{ uri: IMAGE_URL + "/" + contact.avatar }}
					style={styles.avatar}
					width={50}
					height={50}
				/>
				<Text style={styles.title}>{contact.localName}</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<FlatList
			contentContainerStyle={styles.contactList}
			data={contactsList}
			renderItem={({ item }) => <Item key={item.id} contact={item} />}
			keyExtractor={(item) => item.id.toString()}
		></FlatList>
	);
}
