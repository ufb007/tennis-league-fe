"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Provide Context
export function AppProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom Hook to use Context
export function useAppContext() {
    return useContext(AppContext);
}
