import { createContext } from "react";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export interface ThemeContentProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const THEME_KEY = "theme";

export const ThemeContent = createContext<ThemeContentProps>({});
