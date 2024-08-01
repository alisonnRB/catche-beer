
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();


export const authProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const authed = localStorage.getItem('auth');
        if (authed) {
            setAuth(JSON.parse(authed));
        }
    }, []);
    
    const Cadastrar = (infos) => {
        localStorage.setItem('auth', JSON.stringify(infos));
    };

    return (
        <AuthContext.Provider value={{Cadastrar}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);