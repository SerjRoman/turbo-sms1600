import { ApiClient } from "../../../shared/api";
import { IUser } from "../../auth/types";
import { useUserContext } from "../../auth/context";
import { useState } from "react";
import { Contact } from "../types/contact";

export function useContactsService() {
	const { token } = useUserContext();
	const [isLoading, setIsLoading] = useState(false);

	const contacts = async (): Promise<Contact[]> => {
		if (!token) return [];
		setIsLoading(true);
		const resp = await ApiClient.Get<Contact[]>({
			endpoint: "/api/contacts/",
			token: token,
		});
        setIsLoading(false);
		console.log("Contacts API Response:", resp);
		if (resp.status === "failure") {
			throw new Error(resp.message);
		}
		return resp.data;
		
	};

	return { contacts, isLoading };
}
