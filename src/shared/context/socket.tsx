import { createContext, ReactNode, use, useState, useEffect } from "react";
import { WS_API_URL } from "../constants";
import { useUserContext } from "../../modules/auth/context";
import { Socket, io } from "socket.io-client";

interface ISocketCtx {
	socket: Socket | null;
}

const SocketCtx = createContext<ISocketCtx | null>(null);

export function useSocketContext() {
	const ctx = use(SocketCtx);
	if (!ctx) {
		throw new Error("Socket context not provided");
	}
	return ctx;
}

export function SocketContextProvider({ children }: { children: ReactNode }) {
	const [socket, setSocket] = useState<Socket | null>(null);
	const { token } = useUserContext();

	useEffect(() => {
		if (!token) return;
		const newSock = io(WS_API_URL, { auth: { token } });
        newSock.on("connect", () => {
            console.log("Socket connection is ok")
        })
        newSock.on("disconnect", () => {
            console.log("Socket disconnected")
        })
        setSocket(newSock)
        return () => {
            socket?.disconnect()
            setSocket(null)
        }
	}, [token]);
	return <SocketCtx value={{socket}}>{children}</SocketCtx>;
}
