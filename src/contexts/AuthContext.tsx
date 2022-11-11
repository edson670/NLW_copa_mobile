import { createContext, ReactNode } from 'react'
import * as AuthSession from 'expo-auth-session'

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContexDataProps { 
    user: UserProps
    signIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContexDataProps)

export function AuthContextProvider ({ children }: AuthProviderProps){

    console.log(AuthSession.makeRedirectUri({ useProxy: true }))

    async function signIn() {
        console.log('entrou')
     }

    return (
        <AuthContext.Provider value={{
            signIn,
            user : {
                name: 'Rodrigo',
                avatarUrl : 'https://github.com/edson670.png'
            }
        }}>
            { children }
        </AuthContext.Provider>
    )
}
