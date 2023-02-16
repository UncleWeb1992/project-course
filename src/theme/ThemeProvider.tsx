import { FC, useMemo, useState } from "react";
import { Theme, ThemeContent, THEME_KEY } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.Light;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContent.Provider value={defaultProps}>
      {children}
    </ThemeContent.Provider>
  );
};
