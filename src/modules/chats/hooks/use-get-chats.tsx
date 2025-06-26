import { useEffect, useState } from "react";
import { ChatWithRelations } from "../types/chat";
import { useChatsService } from "../services/chats";

export function useGetChats() {
	const [isLoading, setIsLoading] = useState(false);
	const [chats, setChats] = useState<ChatWithRelations[]>([]);

	const { getChats } = useChatsService();
	useEffect(() => {
		const fetchChats = async () => {
			setIsLoading(true);
			try {
				const chats = await getChats();
				setChats(chats);
			} finally {
				setIsLoading(false);
			}
		};
		fetchChats();
	}, []);
	return { chats, isLoading };
}
