import { createContext, useContext, useEffect, useState } from "react";

const ContextChat = createContext();

export const useChatcontext = () => useContext(ContextChat);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    setUser(userData)
  },[])

  return (
    <ContextChat.Provider value={{ apiUrl, user }}>
      {children}
    </ContextChat.Provider>
  );
};
