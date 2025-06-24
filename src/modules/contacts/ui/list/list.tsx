import { FlatList, FlatListProps } from "react-native";
import { styles } from "./list.styles";

export function ContactList<T>(props: FlatListProps<T>) {
	// return <FlatList {...props} />;
	return (
		<FlatList
			style={styles.contactList}
			data={undefined}
			renderItem={undefined}
		></FlatList>
	);
}
