import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
const Feature = () => {
    return (
        <section className="feature py-14">
            <div className="feature-inner">
                <div className="feature-info px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
                    <h2 className="text-center mb-4 text-4xl font-medium">
                        Features
                    </h2>
                    <p className="text-center mb-4 text-xl">
                        The main aim of creating FWR blocks is to help
                        designers, developers and agencies create websites and
                        web apps quickly and easily. Each and every block uses
                        minimal custom styling and is based on the utility first
                        Tailwind framework.
                    </p>
                    <button className="border-2 border-solid border-indigo-600 rounded py-2 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">
                        Learn More
                    </button>
                </div>
                <div className="md:flex  mt-12 md:pt-4">
                    <div className="feature-box px-4 md:w-1/3 mt-6 md:mt-0">
                        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                            <div className="text-xl p-4 w-16 h-16 mx-auto">
                                <FaBolt className="fas fa-bolt text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">
                                Fresh Design
                            </h3>
                            <p className="text-gray-600 mb-3">
                                FWR blocks bring in an air of fresh design with
                                their creative layouts and blocks, which are
                                easily customizable.
                            </p>
                        </div>
                    </div>
                    <div className="feature-box px-4 md:w-1/3 mt-6 md:mt-0">
                        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                            <div className="text-xl p-4 w-16 h-16 mx-auto">
                                <FaCode className="fas fa-bolt text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">
                                Clean Code
                            </h3>
                            <p className="text-gray-600 mb-3">
                                FWR blocks are the cleanest pieces of HTML
                                blocks, which are built with utmost care to
                                quality and usability.
                            </p>
                        </div>
                    </div>
                    <div className="feature-box px-4 md:w-1/3 mt-6 md:mt-0">
                        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                            <div className="text-xl p-4 w-16 h-16 mx-auto">
                                <FaScrewdriverWrench className="fas fa-bolt text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-medium mb-4">
                                Perfect Tool
                            </h3>
                            <p className="text-gray-600 mb-3">
                                FWR blocks is a perfect tool for designers,
                                developers and agencies looking to create
                                stunning websites in no time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
