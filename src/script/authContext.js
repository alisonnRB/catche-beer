
"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const authed = localStorage.getItem('auth');
        if (authed) {
            setAuth(JSON.parse(authed));
            setIsAuthenticated(true);
        }
    }, []);

    const Authenticate = () => {
        const authed = localStorage.getItem('auth');
        if (authed) {
            setAuth(JSON.parse(authed));
        }
    }

    const Cadastrar = (infos) => {
        try {
            localStorage.setItem('auth', JSON.stringify(infos))
            return true;
        } catch {
            return false;
        }
    };

    const Login = (phone) => {
        Authenticate();
        if (auth.phone == phone) {
            setIsAuthenticated(true);
        } 
    }

    return (
        <AuthContext.Provider value={{ Cadastrar, Login, isAuthenticated, auth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);