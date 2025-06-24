export type Chat = {
	id: number;
	lastMessageId: number;
};

export type ChatWithRelations = {
	participants: {
		id: number;
		chatId: number;
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
} & Chat;
