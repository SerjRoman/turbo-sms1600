import { View } from "react-native";
import { Chat } from "../../../modules/chats/ui";

export default function ChatRoute(){
    return (
        <View style={{flex:1}}  >
            <Chat/>
        </View>
    )
}