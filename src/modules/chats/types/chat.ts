import { IUser } from "../../auth/types";
import { Contact } from "../../contacts/types/contact";
import { Message } from "./message";

export type Chat = {
	id: number;
	lastMessageId: number;
};
export type ChatParticipant = {
	id: number;
	chatId: number;
	userId: number;
};

export type ChatWithRelations = {
	participants: {
		userId: number;
	}[];
	lastMessage: {
		id: number;
		type: string;
		text: string | null;
		mediaUrl: string | null;
		senderId: number;
		chatId: number;
		chatAsLastMessageId: number;
		createdAt: Date;
		updatedAt: Date;
	} | null;
} & Chat &
	({ contact: Contact } | undefined) &
	({ user: IUser } | undefined);

export type ChatWithParticipantInfo = {
	chats: ChatWithRelations[];
	contacts: Contact[];
	users: IUser[];
};

export type ChatWithMessagesAndParticipants = Chat & {
	messages: Message[];
} & {
	participants: ChatParticipant[];
};
