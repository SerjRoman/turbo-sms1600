import { useLocalSearchParams, useRouter } from "expo-router";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableOpacity,
	View,
	Text,
} from "react-native";
import { ICONS } from "../../../../shared/ui/icons";
import { styles } from "./chat.styles";
import { Input } from "../../../../shared/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSocketContext } from "../../../../shared/context/socket";
import { useEffect, useState } from "react";
import { Message } from "../../types/message";
import { ChatWithMessagesAndParticipants } from "../../types/chat";

export function Chat() {
	const router = useRouter();
	const { socket } = useSocketContext();
	const [message, setMessage] = useState<string>("");
	const [chat, setChat] = useState<ChatWithMessagesAndParticipants>();
	const { id } = useLocalSearchParams();
	useEffect(() => {
		if (!socket) return;
		socket.emit("joinChat", { chatId: +id }, (data: any) => {
			if (data.status == "success") {
				setChat(data.data);
			}
		});

		socket.on("newMessage", (data) => {
			// console.log(data)
			if (!chat) return;
			setChat({ ...chat, messages: [...chat.messages, data] });
		});
	}, [socket]);
	useEffect(() => {
		console.log(chat);
	}, [chat]);
	return (
		<SafeAreaView style={styles.container} edges={["bottom"]}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 160 : 20}
			>
				<ScrollView
					contentContainerStyle={styles.main}
					automaticallyAdjustKeyboardInsets={true}
				>
					{chat?.messages.map((message) => {
						return (
							<View style={styles.message} key={message.id}>
								<Text
									style={{
										fontWeight: 500,
										color: "black",
										fontSize: 14,
									}}
								>
									{message.text}
								</Text>
							</View>
						);
					})}
				</ScrollView>

				<View style={styles.bottom}>
					<ICONS.ClipIcon width={30} height={30} />
					<Input
						placeholder="Type in your message..."
						style={styles.input}
						value={message}
						onChangeText={(value) => setMessage(value)}
						containerStyles={{
							paddingHorizontal: 0,
							borderRadius: 16,
						}}
					/>
					<TouchableOpacity
						onPress={() => {
							if (!socket) return;
							socket.emit("sendMessage", {
								text: message,
								mediaUrl: null,
								type: "text",
								chatId: +id,
							});
						}}
					>
						<ICONS.SendIcon width={30} height={30} />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}
