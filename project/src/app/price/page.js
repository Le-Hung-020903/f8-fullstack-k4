import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/price-1.jpg";
import img2 from "../../assets/images/price-2.jpg";
import img3 from "../../assets/images/price-3.jpg";
const Price = () => {
    return (
        <section className="price">
            <div className="pt-10 px-10 pb-36">
                <div className="mb-16">
                    <h2 className="text-center text-5xl font-bold">
                        <span className="text-blue-700">Flexible</span> Plans
                    </h2>
                    <p className="text-center text-xl pt-5 text-gray-500">
                        Choose a plan that works best for you and <br /> your
                        team.
                    </p>
                </div>
                <div className="flex items-center justify-center text-gray-500">
                    <div className="shadow-xl rounded-3xl p-8">
                        <div className="flex items-center gap-6 pb-10">
                            <Image
                                src={img1}
                                alt="anh 1"
                                className="h-20 w-20 rounded-3xl"
                            />
                            <div>
                                <h3 className="text-black font-bold text-2xl">
                                    Basic
                                </h3>
                                <span className="font-medium text-gray-500 text-xl align-top">
                                    $
                                </span>
                                <span className="text-3xl font-bold text-black">
                                    10
                                </span>
                                <span className="text-gray-500 font-medium">
                                    / user
                                </span>
                            </div>
                        </div>
                        <div className="pt-10 border-t border-gray-300">
                            <div>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium">
                                        Demo Get started with
                                        <span className="text-black pl-1">
                                            messaging
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium mt-3">
                                        Flexible
                                        <span className="text-black pl-1">
                                            team meetings
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium mt-3">
                                        <span className="text-black pr-1">
                                            5 TB
                                        </span>
                                        cloud storage
                                    </span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center w-full bg-second py-5 text-white font-semibold text-xl rounded-xl mt-6 gap-5">
                                Choose Plan <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="shadow-xl rounded-3xl p-8 bg-gray-900 w-96">
                        <div className="flex items-center gap-6 pb-10">
                            <Image
                                src={img2}
                                alt="anh 1"
                                className="h-20 w-20 rounded-3xl"
                            />
                            <div>
                                <h3 className="text-white font-bold text-3xl">
                                    Startup
                                </h3>
                                <span className="font-medium text-gray-500 text-xl align-top">
                                    $
                                </span>
                                <span className="text-3xl font-bold text-white">
                                    24
                                </span>
                                <span className="text-gray-500 font-medium">
                                    / user
                                </span>
                            </div>
                        </div>
                        <div className="pt-10 border-t border-gray-300">
                            <div>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium">
                                        All features in
                                        <span className="text-white pl-1">
                                            Basic
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5 mt-7">
                                    <FaCheck />
                                    <span className="font-medium">
                                        Flexible call
                                        <span className="text-white pl-1">
                                            scheduling
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5 mt-7">
                                    <FaCheck />
                                    <span className="font-medium">
                                        <span className="text-white pr-1">
                                            15 TB cloud
                                        </span>
                                        storage
                                    </span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center w-full bg-second py-5 text-white font-semibold text-xl rounded-xl mt-9 gap-5">
                                Choose Plan <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="shadow-xl rounded-3xl p-8 w-96">
                        <div className="flex items-center gap-6 pb-10">
                            <Image
                                src={img3}
                                alt="anh 1"
                                className="h-20 w-20 rounded-3xl"
                            />
                            <div>
                                <h3 className="text-black font-bold text-2xl">
                                    Basic
                                </h3>
                                <span className="font-medium text-gray-500 text-xl align-top">
                                    $
                                </span>
                                <span className="text-3xl font-bold text-black">
                                    10
                                </span>
                                <span className="text-gray-500 font-medium">
                                    / user
                                </span>
                            </div>
                        </div>
                        <div className="pt-10 border-t border-gray-300">
                            <div>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium">
                                        All features in
                                        <span className="text-black pl-1">
                                            Startup
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium mt-3">
                                        Growth
                                        <span className="text-black pl-1">
                                            oriented
                                        </span>
                                    </span>
                                </p>
                                <p className="text-lg flex items-center gap-5">
                                    <FaCheck />
                                    <span className="font-medium mt-3">
                                        <span className="text-black pr-1">
                                            Unlimited cloud
                                        </span>
                                        storage
                                    </span>
                                </p>
                            </div>
                            <button className="flex items-center justify-center w-full bg-second py-5 text-white font-semibold text-xl rounded-xl mt-6 gap-5">
                                Choose Plan <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;
