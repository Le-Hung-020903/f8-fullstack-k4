"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import "../../../assets/reset.css";
import "./Main.scss";
import img1 from "../../../assets/images/img1.webp";
import { useLang } from "@/app/context/LangContext";

const Siderbar = () => {
    const { translate } = useLang();

    return (
        <div className="container-main">
            <div className="main-inner">
                <h2>Fullstack.edu.vn f8</h2>
                <div className="main-content">
                    <div className="main-left">
                        <div className="logo">
                            <Image src={img1} alt="avatar" />
                            <span>Font-end developer</span>
                        </div>
                        <div className="my-skill">
                            <h3>{translate("myskill")}</h3>
                            <p>
                                <span>{translate("workskills")}:</span> REST
                                API, React.js, Next.js, Redux, Context, CSS3,
                                HTML5, UI/UX, Figma, Photoshop...
                            </p>
                        </div>
                        <div className="other-skill">
                            <span>{translate("otherskills")}:</span>
                            {translate("descotherskills")}
                        </div>
                        <div className="histories">
                            <h3>{translate("History")}</h3>
                            <p>
                                <span>2016 :</span>
                                {translate("past")}
                            </p>
                            <p>
                                <span>2017-2019 :</span>
                                {translate("past")}
                            </p>
                            <p>
                                <span>2019-2021 :</span>
                                {translate("past")}
                            </p>
                            <p>
                                <span>2022-2023 :</span>
                                {translate("past")}
                            </p>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="info-contact">
                            <h3>{translate("contact")}</h3>
                            <p>
                                <span>Phone:</span> 0383545843
                            </p>
                            <p>
                                <span>Zalo:</span> lehung020903@gmail.com
                            </p>
                            <p>
                                <span>Email:</span> lehung020903@gmail.com
                            </p>
                            <p>
                                <span>facbook:</span> lehung020903@gmail.com
                            </p>
                            <p>
                                <span>Youtube:</span> lehung020903@gmail.com
                            </p>
                        </div>
                        <div className="projects-mini">
                            <p className="project-name">
                                {translate("projects")}
                            </p>
                            <div className="project">
                                <h4>Dental</h4>
                                <p>{translate("project")}</p>
                                <div className="links">
                                    <Link href="https://le-hung-020903.github.io/f8-htmlcss-03/">
                                        Demo
                                    </Link>
                                    <a href="https://github.com/Le-Hung-020903/f8-htmlcss-03">
                                        Code
                                    </a>
                                </div>
                            </div>{" "}
                            <div className="project">
                                <h4>Dental</h4>
                                <p>{translate("project")}</p>
                                <div className="links">
                                    <Link href="https://le-hung-020903.github.io/f8-htmlcss-03/">
                                        Demo
                                    </Link>
                                    <a href="https://github.com/Le-Hung-020903/f8-htmlcss-03">
                                        Code
                                    </a>
                                </div>
                            </div>
                            <div className="project">
                                <h4>Dental</h4>
                                <p>{translate("project")}</p>
                                <div className="links">
                                    <Link href="https://le-hung-020903.github.io/f8-htmlcss-03/">
                                        Demo
                                    </Link>
                                    <a href="https://github.com/Le-Hung-020903/f8-htmlcss-03">
                                        Code
                                    </a>
                                </div>
                            </div>
                            <Link className="github" href="">
                                https://github.com/Le-Hung-020903
                            </Link>
                        </div>
                        <div className="hobby">
                            <h3>{translate("hobby")}</h3>
                            <ul>
                                <li>{translate("Hobby1")}</li>
                                <li>{translate("Hobby2")}</li>
                                <li>{translate("Hobby3")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copy-right">
                    © 2023 Fullstack.edu.vn F8. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Siderbar;
