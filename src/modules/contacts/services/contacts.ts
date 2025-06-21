import { ApiClient } from "../../../shared/api";

import { IContact, IUser } from "../../auth/types";

export const contactsService = {
	contacts: async () => {
		const resp = await ApiClient.Get<IContact[]>({endpoint:"/api/contacts/"});
		if (resp.status === "failure") {
			throw new Error(resp.message);
		}
		return resp.data;
	},
};
