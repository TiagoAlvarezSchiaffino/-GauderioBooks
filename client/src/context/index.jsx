import { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({children}) => {
    //---------estados y funciones del modal de Registro-------------------------------------------
    const [isOpen, setIsOpen] = useState(true);// 
    const openModal = () => setIsOpen(false);//     
    const closeModal = () => setIsOpen(true);//  
    const [isLogin, setIsLogin] = useState(false);// 
   //----------------------------------------------------------------------------------------------

    return (
        <context.Provider value={
            {isOpen,openModal,closeModal, setIsLogin , isLogin}
        }>
            {children}
        </context.Provider>
    )
};

export default ContextProvider;