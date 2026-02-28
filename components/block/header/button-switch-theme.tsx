"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

export function ButtonSwitchTheme() {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // if theme is system, we need to check the system theme
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const themeToUse = theme === "system" ? systemTheme : theme;
        setIsDark(themeToUse === "dark");
    }, [theme]);

    return (
        <motion.button
            initial={{ rotate: 0 }}
            animate={{ rotate: isDark ? 180 : 0 }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-1"
            >
            {isDark ? <Sun /> : <Moon />}
        </motion.button>
    );
}