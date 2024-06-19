import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const UserContext = createContext("Visitante");

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Visitante" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("@user"));
    const storedToken = JSON.parse(localStorage.getItem("@token"));

    api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

    setUser(storedUser ? storedUser : { name: "Visitante" });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
