import { FlatList, FlatListProps, View, Text } from "react-native";
import { styles } from "./list.styles";
import { useGetContacts } from "../../hooks/use-get-contacts";
import { useUserContext } from "../../../auth/context";
import { Contact } from "../../types/contact";
// props: FlatListProps<T>
export function ContactList() {
	// return <FlatList {...props} />;
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
            style={styles.contactList}
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
