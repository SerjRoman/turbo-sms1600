import { useEffect, useState } from "react";
import { IContact } from "../../auth/types";
import { contactsService } from "../services/contacts";

export function useGetContacts() {
    const [isLoading, setIsLoading] = useState(false);
    const [contacts, setContacts] = useState<IContact[]>([]);
    useEffect(() => {
        const fetchContacts = async () => {
            setIsLoading(true);
            try {
                const contacts = await contactsService.contacts();
                setContacts(contacts);
            } finally {
                setIsLoading(false);
            }
        };
        fetchContacts();
    }, []);
    return { contacts, isLoading, setContacts };
}
