import { createContext, useState } from "react";

export const PaginateContext = createContext(1);

export function PaginateContextProvider({ children }) {
  const [page, setPage] = useState(1);

  return (
    <PaginateContext.Provider value={{ page, setPage }}>
      {children}
    </PaginateContext.Provider>
  );
}
