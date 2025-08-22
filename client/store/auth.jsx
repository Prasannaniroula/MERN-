import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
 const [token, setToken] = useState(localStorage.getItem("token"))

   const storetokenInLS = (serverToken)=>{
        localStorage.setItem("token",serverToken);
        setToken(serverToken);
    };

    const isLoggedIn = !!token ; 
    
const LogoutUser = ()=>{
    setToken("");
    localStorage.removeItem('token')
}

    return( <AuthContext.Provider value={{isLoggedIn, storetokenInLS , LogoutUser}}>
        {children}
    </AuthContext.Provider>);
} 

export const useAuth = ()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")

    }
    return authContextValue;
}

