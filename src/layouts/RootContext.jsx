import React from "react";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

const ThemeContext = React.createContext();

export function useIsTab() {
  return useContext(ThemeContext);
}
export default function ThemeProvider({ children }) {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ThemeContext.Provider value={isTab}>{children}</ThemeContext.Provider>
  );
}
