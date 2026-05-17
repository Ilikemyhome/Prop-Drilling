import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        themePreference: "dark"
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
    
}