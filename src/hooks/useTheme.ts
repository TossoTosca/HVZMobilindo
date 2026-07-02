import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return {
        theme,
        setTheme,
        toggleTheme,
    };
}