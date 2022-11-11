import { createContext, ReactNode, useState, useEffect } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
    name: string
    avatarUrl: string
}

export interface AuthContexDataProps { 
    user: UserProps
    isUserLoading: boolean
    signIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContexDataProps)

export function AuthContextProvider ({ children }: AuthProviderProps){
    const [ user, setUser] = useState<UserProps>({} as UserProps)

    const [ isUserLoading, setIsUserLoading ] = useState(false)

    const [request, response, prompAsync] = Google.useAuthRequest({
        clientId:'485570070028-p9kjqe8sldvk8hepdari1f1c9tr6772f.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })


    async function signIn() {
        try {
            setIsUserLoading(true)
            await prompAsync()

        } catch (error){
            console.log(error)
            throw error

        } finally {
            setIsUserLoading(false)

        }
     }

     async function signIWithGoogle( access_token : string) {
        console.log('TOKEN DE AUTENTICAÇÃO', access_token)
     }

     useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signIWithGoogle(response.authentication.accessToken)
        }
     },[response])

    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user
        }}>
            { children }
        </AuthContext.Provider>
    )
}
