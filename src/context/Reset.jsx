import { createContext, useState } from "react";

export const ResetContext = createContext();
export default function ResetContextProvider({ children }) {
  const [reset, setReset] = useState();

  return (
    <ResetContext.Provider value={{ reset, setReset }}>
      {children}
    </ResetContext.Provider>
  );
}
