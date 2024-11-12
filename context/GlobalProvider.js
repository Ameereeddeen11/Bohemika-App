import React, { useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTokens = async () => {
            try {
                const accessToken = await SecureStore.getItemAsync('token');
                const refreshToken = await SecureStore.getItemAsync('refreshToken');
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
            } catch (error) {
                console.error("Failed to load tokens:", error);
            } finally {
                setLoading(false);
            };
            if (!accessToken) {
                fetch('https://mba.bsfaplikace.cz/Auth/refresh', {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${refreshToken}`,
                    },
                })
            }
            if (response.ok) {
                const result = await response.json();
                await SecureStore.setItemAsync('token', result.accessToken);
                await SecureStore.setItemAsync('refreshToken', result.refreshToken);
                setAccessToken(result.accessToken);
                setRefreshToken(result.refreshToken);
            } else {
                router.replace('/login');
            }
        };
        loadTokens();
    }, []);

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync('refreshToken');
            setAccessToken(null);
            setRefreshToken(null);
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    }
    
    if (loading) {
        return null;
    }

    return (
        <GlobalContext.Provider value={{ accessToken, refreshToken, loading, logout }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
