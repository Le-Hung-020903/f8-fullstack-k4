"use client";
import { useState } from "react";
import "./Main.scss";

const Main = () => {
    const [active, setActive] = useState(1);
    const handleBgDot = (active) => {};
    const handleActive = (number) => {
        setActive(number);
    };
    return (
        <section className="main-hero">
            <div className="main-inner">
                <div className="main-images">
                    <video
                        autoPlay
                        loop
                        muted
                        src={`https://code-fullstack-exercise49.vercel.app/videos/vid-${active}.mp4`}
                    ></video>
                </div>
                <div className="main-content">
                    <h1 className="main-heading">MỌI CHUYẾN ĐI ĐỀU ĐÁNG GIÁ</h1>
                    <p className="main-desc">
                        Khám Phá Các Vùng Đất Mới Cùng Chúng Tôi <br />
                    </p>
                    <div className="main-button">
                        <a>Khám Phá Ngay</a>
                    </div>
                    <div className="main-control">
                        <span
                            className={`dot ${active === 1 ? "active" : ""}`}
                            onClick={() => {
                                handleActive(1);
                            }}
                        ></span>
                        <span
                            className={`dot ${active === 2 ? "active" : ""}`}
                            onClick={() => {
                                handleActive(2);
                            }}
                        ></span>
                        <span
                            className={`dot ${active === 3 ? "active" : ""}`}
                            onClick={() => {
                                handleActive(3);
                            }}
                        ></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
