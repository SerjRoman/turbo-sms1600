import { useEffect, useState } from "react";
import { IUser } from "../../auth/types";
import { useContactsService } from "../services/contacts";
import { Contact } from "../types/contact";

export function useGetContacts() {
    const [contactsList, setContactsList] = useState<Contact[]>([]);
    const { contacts, isLoading } = useContactsService();

    useEffect(() => {
        const fetchContacts = async () => {
            const list = await contacts();
            setContactsList(list);
        };
        fetchContacts();
    }, []);

    return { contactsList, isLoading };
}