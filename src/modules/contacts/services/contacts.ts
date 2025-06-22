import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiClient } from "../../../shared/api";

import { IContact, IUser } from "../../auth/types";
import { useUserContext } from "../../auth/context";
import { useState } from "react";

export function useContactsService() {
    const { token } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);

    const contacts = async (): Promise<IUser[]> => {
        if (!token) return [];
        setIsLoading(true);
        try {
            const resp = await ApiClient.Get<IUser[]>({
                endpoint: "/api/contacts/",
                token: token,
            });
            console.log("Contacts API Response:", resp);
            if (resp.status === "failure") {
                throw new Error(resp.message);
            }
            return resp.data;
        } finally {
            setIsLoading(false);
        }
    };

    return { contacts, isLoading };
}