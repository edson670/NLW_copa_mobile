import { createContext, ReactNode } from 'react'

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
