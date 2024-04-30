'use cleint'

import { createContext, useContext, useState } from "react";

const SeachContext = createContext("");

export function SeachWrapper({ children }: {
    children: React.ReactNode;
}) {
    let [searchQuery, setSerchQuery] = useState("")

    return (
        <SeachContext.Provider value={searchQuery}>
            {children}
        </SeachContext.Provider>
    )
}

export function useSeachContext() {
    return useContext(SeachContext)
}