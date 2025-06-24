import { useState } from "react";
import { useUserContext } from "../../auth/context";
import { ChatWithRelations } from "../types/chat";
import { ApiClient } from "../../../shared/api";

export function useChatsService() {
    const { token } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);

    const getChats = async (): Promise<ChatWithRelations[]> => {
        if (!token) return [];
        setIsLoading(true);
        const resp = await ApiClient.Get<ChatWithRelations[]>({
            endpoint: "/api/chats/",
            token: token,
        });
        setIsLoading(false);
        console.log("Chats API Response:", resp);
        if (resp.status === "failure") {
            throw new Error(resp.message);
        }
        return resp.data;
        
    };

    return { getChats, isLoading };
}
