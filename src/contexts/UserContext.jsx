import { createContext, useState } from "react";

export const UserContext = createContext("Visitante");

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Visitante" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
