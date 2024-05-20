import { useCallback, useEffect, useState } from "react";
import { ThemeEnum } from "@type/theme";

export function useThemeDetector() {
  const [theme, setTheme] = useState<ThemeEnum>(() => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (isDarkTheme) return 'dark';
    
    return 'light';
  });  
  
  const mqListener = useCallback((e: MediaQueryListEvent) => {
    setTheme(e.matches ? 'dark' : 'light');
  }, []);
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener('change', mqListener);
    
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [mqListener]);
  
  return theme;
}