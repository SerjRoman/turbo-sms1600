import { FlatList, View, Text } from "react-native";
import { useGetContacts } from "../../../contacts/hooks/use-get-contacts";
import { styles } from "./add-chat.style";
import { IUser } from "../../../auth/types";
import { IContactForm } from "../../../contacts/ui/create-contact/step-two/step-two-types";
import { Contact } from "../../../contacts/types/contact";
import { useUserContext } from "../../../auth/context";

export function AddChat() {
	const { contactsList } = useGetContacts();
    const { user } = useUserContext()
	console.log(contactsList);

	const Item = ({ localName, avatar }: Contact) => (
		<View style={styles.item}>
			<Text style={styles.title}>{localName}</Text>
		</View>
	);
	return (
		<FlatList
			style={styles.container}
			data={contactsList}
			renderItem={({ item }) => (
				<Item
					key={item.id}
					localName={item.localName}
					avatar={""}
					id={0}
					addedAt={new Date}
					contactUserId={item.id}
					ownerId={user? user.id : 0}
				/>
			)}
			keyExtractor={(item) => item.id.toString()}
		></FlatList>
	);
}
