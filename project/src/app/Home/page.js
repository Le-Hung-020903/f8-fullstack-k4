import React from "react";
import Image from "next/image";
import mindMap from "../../assets/images/mindMap.webp";
const Main = () => {
    return (
        <section className="main px-7 py-10 bg-indigo-100">
            <div className="main-inner">
                <h1 className="text-black text-3xl font-semibold text-center">
                    Học tập hiệu quả với bản đồ tư duy
                </h1>
                <button className="bg-second text-white py-3 px-6 rounded-full text-xl flex mx-auto my-5 items-center justify-center">
                    Sử dụng miễn phí
                </button>
                <div className="w-1/2 mx-auto">
                    <Image
                        src={mindMap}
                        alt="mind map"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="use flex text-center mt-16 gap-7">
                    <div className="desc">
                        <h2 className="font-medium text-xl">DỄ SỬ DỤNG</h2>
                        <p className="desc mt-5">
                            FWR blocks bring in an air of fresh design with
                            their creative layouts and blocks, which are easily
                            customizable
                        </p>
                    </div>
                    <div className="desc2">
                        <h2 className="font-medium text-xl">KHÔNG GIỚI HẠN</h2>
                        <p className="desc mt-5">
                            FWR blocks are the cleanest pieces of HTML blocks,
                            which are built with utmost care to quality and
                            usability.
                        </p>
                    </div>
                    <div className="desc">
                        <h2 className="font-medium text-xl">
                            QUẢN LÝ VÀ CHIA SẺ
                        </h2>
                        <p className="desc mt-5 text-3">
                            FWR blocks is a perfect tool for designers,
                            developers and agencies looking to create stunning
                            websites in no time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
