import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./list.styles";
import { useGetContacts } from "../../hooks/use-get-contacts";
import { Contact } from "../../types/contact";
import { IMAGE_URL } from "../../../../shared/constants";
export function ContactList() {
	const { contactsList } = useGetContacts();

	const Item = ({ contact }: { contact: Contact }) => (
		<View style={styles.item}>
			<Image
				source={{ uri: IMAGE_URL + "/" + contact.avatar }}
				style={styles.avatar}
				width={50}
				height={50}
			/>
			<Text style={styles.title}>{contact.localName}</Text>
		</View>
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
