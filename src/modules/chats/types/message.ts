export type Message = {
	id: number;
	type: string;
	text: string | null;
	mediaUrl: string | null;
	senderId: number;
	chatId: number;
	chatAsLastMessageId: number;
	createdAt: Date;
	updatedAt: Date;
};

