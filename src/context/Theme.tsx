import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider as StyleProvider } from "styled-components";
import { localStorageKeys } from "../config";

const lightTheme = {
  color: "#333333",
  background: "#f1f1f1",
  boxShadow: `rgba(0, 0, 0, 0.22) 0px 6px 24px 0px,
  rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;`,
};

const darkTheme = {
  color: "#f1f1f1",
  background: "#333333",
  boxShadow: `rgba(255, 255, 255, 0.268) 0px 6px 24px 0px,
  rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;`,
};

interface ThemeInterface {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

const ThemeContext = createContext<ThemeInterface>({
  isLightMode: true,
  toggleLightMode: () => {},
});

const ThemeProvider: FC = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem(localStorageKeys.IS_LIGHT_MODE) ? true : false
  );
  useEffect(() => {
    localStorage.setItem(
      localStorageKeys.IS_LIGHT_MODE,
      isLightMode ? "true" : ""
    );
  }, [isLightMode]);

  const toggleLightMode = () => setIsLightMode((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      <StyleProvider theme={isLightMode ? lightTheme : darkTheme}>
        {children}
      </StyleProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
