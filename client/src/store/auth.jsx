import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = async ()=>{
    try {
        const response = await fetch("http://localhost:8000/user",{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });

    if(response.ok){
       const data = await response.json();
       setUser(data.userData);
    }

        
    } catch (error) {
        console.log("error fetching user data",error)
        
    }
  }


  useEffect(()=>{
    if(token){
    userAuthentication();
    }else{
      setUser(null);
    }
  },[token])

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
