import { createContext, ReactNode, useContext, useState } from "react";
import { Result } from "../../../shared/types/api";
import { IUser } from "../types";


interface IUserContext{
    user: IUser | null
    token: string | null
    isAuthenticated: () => boolean
    setUser: (value: IUser) => void
    setToken: (value: string) => void
}

const UserContext = createContext<IUserContext | null>(null)

export function useUserContext(){
    const context = useContext(UserContext)
    if (!context) {
        throw Error("Context is null")
    }
    return context
}


export function UserContextProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    function isAuthenticated(){
        return !!user
    }

    return (
        <UserContext value={{
            user: user,
            token: token,
            isAuthenticated: isAuthenticated,
            setUser: setUser,
            setToken: setToken
        }}>
            {children}
        </UserContext>
    )
}
