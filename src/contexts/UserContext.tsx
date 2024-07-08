import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface User {
  id?: number;
  name: string;
  email?: string;
}

interface UserContextTypes {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextTypes>({
  user: { name: "Visitante" },
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({ name: "Visitante" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("@user") || "[]");
    const storedToken = JSON.parse(localStorage.getItem("@token") || "[]");

    api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

    setUser(storedUser ? storedUser : { name: "Visitante" });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
