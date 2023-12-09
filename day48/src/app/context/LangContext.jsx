"use client";

import en from "@/app/translate/en.json";
import vi from "@/app/translate/vi.json";

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

const initialLang = localStorage.getItem("lang") ?? "vi";
const initialTheme = localStorage.getItem("theme") ?? "light";

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(initialLang);
    const [theme, setTheme] = useState(initialTheme);

    const changeLang = () => {
        const newLang = lang === "vi" ? "en" : "vi";
        localStorage.setItem("lang", newLang);
        setLang(newLang);
    };

    const translate = (key) => {
        if (lang === "vi") {
            return vi[key] ?? key;
        } else {
            return en[key] ?? key;
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
