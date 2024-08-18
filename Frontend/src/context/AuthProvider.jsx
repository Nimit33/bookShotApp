import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    // childeren mein aajayega app.jsx signup.jsx etc
    const initialAuthUser = localStorage.getItem("Users");
    // browser ke local storage se data leke variable min save kra diya
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined,
        // agr initialauthuser available hai toh woh pass krdo, wrna
        //undefiend krdo
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);

