import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <context.Provider value={
            {isOpen,
            setIsOpen}
        }>
            {children}
        </context.Provider>
    )
};

export default ContextProvider;