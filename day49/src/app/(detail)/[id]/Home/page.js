import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./Home.scss";
const Home = (props) => {
    return (
        <section className="home-container">
            <div className="home-inner">
                <div className="home-content">
                    <div className="home-img">
                        <Image src={props.images} fill alt="anh detail" />
                    </div>
                    <div className="home-title">
                        <h2 className="cityname">{props.cityname}</h2>
                        <p className="title">{props.content}</p>
                        <p className="desc">{props.textcontent}</p>
                        <Link href="" className="btn">
                            Tìm Hiểu Thêm
                        </Link>
                    </div>
                </div>
                <div className="home-book">
                    <p className="home-endow">
                        Ưu Đãi 6.500.000 Cho <br /> 1người/7ngày
                    </p>
                    <Link href={`${props.id}/FormBook`} className="btn">
                        Đặt Ngay
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
