"use client";
import en from "@/app/translate/en.json";
import vi from "@/app/translate/vi.json";

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const themeLocal =
        typeof window !== "undefined"
            ? localStorage.getItem("theme") ?? "light"
            : "not support";
    const langLocal =
        typeof window !== "undefined"
            ? localStorage.getItem("lang") ?? "vi"
            : "not support";
    console.log({ themeLocal, langLocal });
    const [lang, setLang] = useState(langLocal);
    const [theme, setTheme] = useState(themeLocal);

    const changeLang = () => {
        const newLang = lang === "vi" ? "en" : "vi";
        localStorage.setItem("lang", newLang);
        setLang(newLang);
    };

    const translate = (key) => {
        if (lang === "vi") {
            return vi[key];
        } else {
            return en[key];
        }
    };

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const value = {
        changeTheme,
        translate,
        changeLang,
        lang,
        theme,
    };
    return (
        <LangContext.Provider value={value}>{children}</LangContext.Provider>
    );
};
export const useLang = () => {
    return useContext(LangContext);
};
