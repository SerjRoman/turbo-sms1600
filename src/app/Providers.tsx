import { SafeAreaProvider } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { UserContextProvider } from "../modules/auth/context";
import { SocketContextProvider } from "../shared/context/socket";

// UwU
export function Providers({ children }: { children: ReactNode }) {
	return (
		<SafeAreaProvider>
			<UserContextProvider>
				<SocketContextProvider>{children}</SocketContextProvider>
			</UserContextProvider>
		</SafeAreaProvider>
	);
}
