import { useCallback, useEffect, useState } from "react";
import { ChatWithRelations } from "../types/chat";
import { useChatsService } from "../services/chats";
import { useFocusEffect } from "expo-router";

export function useGetChats() {
	const [isLoading, setIsLoading] = useState(false);
	const [chats, setChats] = useState<ChatWithRelations[]>([]);

	const { getChats } = useChatsService();
	useFocusEffect(
		useCallback(() => {
			const fetchChats = async () => {
				setIsLoading(true);
				const fetchedChats = await getChats();
				setChats(fetchedChats);
				setIsLoading(false);
			};

			fetchChats();

			return () => {};
		}, [])
	);
	return { chats, isLoading };
}
