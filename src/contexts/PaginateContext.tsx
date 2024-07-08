import React, { createContext, ReactNode, useState } from "react";

interface PaginateContextTypes {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginateContext = createContext<PaginateContextTypes>({
  page: 1,
  setPage: () => {},
});

interface PaginateProviderProps {
  children: ReactNode;
}

export function PaginateProvider({ children }: PaginateProviderProps) {
  const [page, setPage] = useState<number>(1);

  return (
    <PaginateContext.Provider value={{ page, setPage }}>
      {children}
    </PaginateContext.Provider>
  );
}
