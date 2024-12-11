import React, { useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { router } from 'expo-router';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTokens = async () => {
            const accessToken = await SecureStore.getItemAsync('token');
            const refreshToken2 = await SecureStore.getItemAsync('refreshToken');
            setAccessToken(accessToken);
            setRefreshToken(refreshToken2);

            if (!accessToken) {
                const response = fetch('https://mba.bsfaplikace.cz/Auth/refresh', {
                    method: 'POST',
                    headers: {
                      'Authorization': `Bearer ${refreshToken}`,
                    },
                })
                if (response.ok) {
                    const result = await response.json();
                    await SecureStore.deleteItemAsync('token');
                    await SecureStore.deleteItemAsync('refreshToken');
                    await SecureStore.setItemAsync('token', result.accessToken);
                    await SecureStore.setItemAsync('refreshToken', result.refreshToken);
                    setAccessToken(result.accessToken);
                    setRefreshToken(result.refreshToken);
                } else {
                    await SecureStore.deleteItemAsync('token');
                    await SecureStore.deleteItemAsync('refreshToken');
                    router.replace('/');
                }
            }
        };
        loadTokens();
    }, [refreshToken]);

    const getaccessToken = async () => {
        return await SecureStore.getItemAsync('token');
    }

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync('token');
            await SecureStore.deleteItemAsync('refreshToken');
            setAccessToken(null);
            setRefreshToken(null);
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    };

    return (
        <GlobalContext.Provider value={{ accessToken, logout, getaccessToken }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};