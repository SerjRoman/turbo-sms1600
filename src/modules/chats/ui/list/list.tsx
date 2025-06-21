import { FlatList } from "react-native";
import { styles } from "./list.styles";

export function ChatList() {
	return(
        <FlatList style={styles.chatList}  data={undefined} renderItem={undefined}>
            
        </FlatList>
    )
}
