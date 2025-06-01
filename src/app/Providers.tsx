import { SafeAreaProvider } from "react-native-safe-area-context";
import { ReactNode } from "react";
import { UserContextProvider } from "../modules/auth/context";

// UwU
export function Providers({ children }: { children: ReactNode }) {
    return (
        <SafeAreaProvider>
            <UserContextProvider>{children}</UserContextProvider>
        </SafeAreaProvider>
    );
}
