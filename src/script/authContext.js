
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
            console.log(auth)
            return false;
        }
    };

    const Login = (phone) => {
        Authenticate();
        if (auth.phone == phone) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }

    return (
        <AuthContext.Provider value={{ Cadastrar, Login, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);