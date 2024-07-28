"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState();
    const [warning, setWarning] = useState(null);

    const authRegister = (data) => {
        const { email, password } = data;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user.email;
                setWarning('Account has been created ' + user);
            })
            .catch((err) => {
                setWarning(err.message);
            });
    };

    const authLogin = (data) => {
        const { email, password } = data;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user.email;
                setWarning('Login success ' + user);
            })
            .catch((err) => {
                setWarning(err.message);
            });
    };

    const authSignOut = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
            });
    };

    const userCheckExist = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email);
            }
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('firebase:authUser:AIzaSyDflosXDSO719vFcgq9SaIBGmMiBf0qvyU:[DEFAULT]');
            if (user) {
                setUser(JSON.parse(user).email || null);
            } else {
                setUser(null);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ warning, authRegister, authLogin, user, authSignOut, userCheckExist }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
