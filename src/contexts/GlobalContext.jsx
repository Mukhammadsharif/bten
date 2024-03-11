import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
        category,
        setCategory,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
