import { createContext, useState } from "react";

export const APIContext = createContext();
export default function APIContextProvider({ children }) {
  const [tip, setTip] = useState();

  return (
    <APIContext.Provider value={{ tip, setTip }}>
      {children}
    </APIContext.Provider>
  );
}
