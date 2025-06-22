import { useEffect, useState } from "react";
import { IContact, IUser } from "../../auth/types";
import { useContactsService } from "../services/contacts";

export function useGetContacts() {
    const [contactsList, setContactsList] = useState<IUser[]>([]);
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