import { useState, useEffect, createContext, ReactNode } from 'react'
import { auth } from '../services/firebase'
import firebase from 'firebase'

type UserProps = {
    id: string;
    name: string;
    avatar: string
}

type ChildrenProps = {
    children: ReactNode
}

type AuthContextProps = {
    user: UserProps | undefined;
    signInWithGoogleFirebase: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: ChildrenProps) => {

    const [user, setUser] = useState<UserProps>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user
                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google account.')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => { unsubscribe() }

    }, [])

    async function signInWithGoogleFirebase() {

        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await auth.signInWithPopup(provider)

        if (result.user) {
            const { displayName, photoURL, uid } = result.user


            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google account.')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })

        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogleFirebase }}>
            {children}
        </AuthContext.Provider>
    )
}