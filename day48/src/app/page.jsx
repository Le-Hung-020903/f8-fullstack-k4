"use client";
import React from "react";
import Header from "./components/Header/Header";
import "@/assets/reset.css";
import Siderbar from "./components/Main/Main";
import { LangProvider } from "@/app/context/LangContext";

const HomePage = () => {
    return (
        <LangProvider>
            <Header />
            <Siderbar />
        </LangProvider>
    );
};

export default HomePage;
