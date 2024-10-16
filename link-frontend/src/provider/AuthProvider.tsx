import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom"; // To monitor page changes
import Cookies from "js-cookie";
import axios from "axios";

// Define the shape of your authentication context
interface AuthContextType {
    isAuthenticated: boolean;
    login: (loginResponse: LoginResponse) => void;
    logout: () => void;
}

// Define the props for the AuthProvider component
interface AuthProviderProps {
    children: ReactNode;
}

interface LoginResponse {
    userId: string;   // Assuming userId is a string (ObjectId)
    jwtToken: string;  // Assuming the JWT token is a string
    email: string;     // Assuming email is a string
}

// Create the AuthContext with a default value of `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const location = useLocation(); // Hook to detect page changes

    const [token, setToken] = useState<string | null>(() => {
        // Get the token from cookies if it exists
        return Cookies.get("jwtToken") || null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);

    const login = (loginResponse: LoginResponse) => {
        setToken(loginResponse.jwtToken);
        Cookies.set("jwtToken", loginResponse.jwtToken); // Store token in cookies
        Cookies.set("userId", loginResponse.userId); // Store token in cookies
        Cookies.set("email", loginResponse.email); // Store token in cookies
        setIsAuthenticated(true); // Set authenticated state to true
    };

    const logout = () => {
        setToken(null);
        Cookies.remove("jwtToken"); // Store token in cookies
        Cookies.remove("userId"); // Store token in cookies
        Cookies.remove("email"); // Store token in cookies
        setIsAuthenticated(false); // Set authenticated state to false
    };

    // Function to check if the token is valid
    const isTokenValid = async (token: string): Promise<boolean> => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}api/auth/verify`,
                {}, // empty body
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Pass the token as a Bearer token
                    }
                }
            );
            // If the server responds with a valid status, return true
            return response.data.valid === true;
        } catch (err) {
            // Token is invalid or expired
            return false;
        }
    };

    useEffect(() => {
        const checkTokenValidity = async () => {
            if (token) {
                const isValid = await isTokenValid(token);
                if (!isValid) {
                    logout(); // Automatically log out if token is invalid or expired
                } else {
                    setIsAuthenticated(true); // Token is valid
                }
            }
        };
        checkTokenValidity();
    }, [token, location]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the authentication context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
