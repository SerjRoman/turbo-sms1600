import { FlatList, View, Text } from "react-native";
import { useGetContacts } from "../../../contacts/hooks/use-get-contacts";
import { styles } from "./add-chat.style";
import { IContact } from "../../../auth/types";

export function AddChat() {
	const { contacts } = useGetContacts();

	const Item = ({ id, name, surname, avatar }: IContact) => (
		<View style={styles.item}>
			<Text style={styles.title}>{name} {surname}</Text>
		</View>
	);
	return (
		<FlatList
			style={styles.contactList}
			data={contacts}
			renderItem={({ item }) => <Item key={item.id} name={item.name} surname={item.surname} id={item.id} />}
			keyExtractor={(item) => item.id}
		></FlatList>
	);
}
