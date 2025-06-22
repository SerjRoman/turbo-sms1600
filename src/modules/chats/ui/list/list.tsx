import { FlatList } from "react-native";
import { styles } from "./list.styles";

export function ChatList() {
	// const { socket } = useSocketContext();
	// useEffect(() => {
	// 	if (!socket) return;
	// 	socket.on("new-message", () => {
	// 		console.log("received new message");
	// 	});
	// 	return () => {
	// 		socket.off("new-message");
	// 	};
	// }, [socket]);
	return (
		<FlatList
			style={styles.chatList}
			data={undefined}
			renderItem={undefined}
		></FlatList>
		// <>
		// 	<Button
		// 		label="Send join event"
		// 		onPress={() => {
		// 			socket?.emit("joinChat", { chatId: 5 }, () =>
		// 				console.log("Response from server")
		// 			);
		// 		}}
		// 	/>
		// </>
	);
}
