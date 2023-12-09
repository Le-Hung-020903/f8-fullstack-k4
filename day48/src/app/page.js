"use client";
import React from "react";
import Header from "./Header/page";
import "@/assets/reset.css";
import Siderbar from "./Main/page";
import { LangProvider } from "@/context/LangContext";
const HomePage = () => {
    return (
        <LangProvider>
            <Header />
            <Siderbar />
        </LangProvider>
    );
};

export default HomePage;
