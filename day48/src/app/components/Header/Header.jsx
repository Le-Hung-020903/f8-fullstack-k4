"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

import "../../../assets/reset.css";
import "./Header.scss";
import img1 from "../../../assets/images/img1.webp";
import Image from "next/image";
import { useLang } from "@/app/context/LangContext";

const Header = () => {
    const { lang, changeLang, theme, changeTheme } = useLang();

    return (
        <header className="container">
            <div className="header-inner">
                <div className="header-left">
                    <div className="logo">ĐÌNH HÙNG</div>
                    <Link href={"/"}>Home</Link>
                </div>
                <div className="header-right">
                    <div className="logo">
                        <Image src={img1} alt="avatar" />{" "}
                    </div>
                    <div className="facebook">
                        <FaFacebookSquare />
                    </div>
                    <div className="youtube">
                        <FaYoutube />
                    </div>
                    <button className="theme" onClick={changeTheme}>
                        {theme == "light" ? <GoSun /> : <FaMoon />}
                    </button>
                    <button className="language" onClick={changeLang}>
                        {lang === "vi" ? "Vi" : "En"}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
