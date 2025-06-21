import { useEffect, useState } from "react";
import { IUser } from "../../auth/types";

export function useGetChats() {
	const [isLoading, setIsLoading] = useState(false);
	const [chats, setChats] = useState<IUser[]>([]);
	useEffect(() => {
		const fetchChats = async () => {
			setIsLoading(true);
			try {
				// const chats = await friendsService.allFriends();
				setChats(chats);
			} finally {
				setIsLoading(false);
			}
		};
		fetchChats();
	}, []);
	return { chats, isLoading, setChats };
}
