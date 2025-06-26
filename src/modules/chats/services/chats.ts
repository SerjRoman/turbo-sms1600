import { useState } from "react";
import { useUserContext } from "../../auth/context";
import { ChatWithParticipantInfo, ChatWithRelations } from "../types/chat";
import { ApiClient } from "../../../shared/api";

export function useChatsService() {
	const { token } = useUserContext();
	const [isLoading, setIsLoading] = useState(false);

	const getChats = async (): Promise<ChatWithRelations[]> => {
		if (!token) {
			return [];
		}
		setIsLoading(true);
		const resp = await ApiClient.Get<ChatWithParticipantInfo>({
			endpoint: "/api/chats/chats-participants-info",
			token: token,
		});
		setIsLoading(false);
		console.log("Chats API Response:", resp);
		if (resp.status === "failure") {
			throw new Error(resp.message);
		}
		const chats = resp.data.chats.map((chat) => {
			resp.data.contacts.forEach((contact) => {
				if (chat.participants.at(0)?.userId === contact.contactUserId) {
					chat.contact = contact;
				}
			});
			resp.data.users.forEach((user) => {
				if (chat.participants.at(0)?.userId !== user.id) {
					chat.user = user;
				}
			});
			return chat;
		});
		return chats;
	};

	return { getChats, isLoading };
}
