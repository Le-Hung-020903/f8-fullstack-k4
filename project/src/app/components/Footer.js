import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="p-10 bg-gray-100">
            <div className="list flex justify-between text-left">
                <div className="item">
                    <h2 className="footer-text">Features</h2>
                    <ul>
                        <li className="footer-li">
                            <a href="#!">Cool stuff</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Random feature</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Team feature</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Stuff for developers</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Another one</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Last time</a>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h2 className="footer-text">Resources</h2>
                    <ul>
                        <li className="footer-li">
                            <a href="#!">Resource</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Resource name</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Another resource</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Final resource</a>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h2 className="footer-text">About</h2>
                    <ul>
                        <li className="footer-li">
                            <a href="#!">Team</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Locations</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Privacy</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Terms</a>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h2 className="footer-text">Help</h2>
                    <ul>
                        <li className="footer-li">
                            <a href="#!">Support</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Help Center</a>
                        </li>
                        <li className="footer-li">
                            <a href="#!">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <h2 className="footer-text">Stay connected</h2>
                    <div className="social flex items-center justify-center gap-5">
                        <div className="facebook footer-hover">
                            <FaFacebookSquare />
                        </div>
                        <div className="twitter footer-hover">
                            <FaTwitter />
                        </div>
                        <div className="google footer-hover">
                            <FaGooglePlusG />
                        </div>
                    </div>
                </div>
            </div>
            <div className="vert-line my-5 w-full bg-gray-200 h-0.5"></div>
            <div className="info flex justify-between mt-6">
                <div className="name footer-text">FWR</div>
                <div className="address">
                    <h2 className="footer-text">Address</h2>
                    <p>
                        123 6th St. <br /> Melbourne, FL 32904
                    </p>
                </div>
                <div className="resources">
                    <h2 className="footer-text">Free Resources</h2>
                    <p>
                        Use our HTML blocks for FREE. <br /> All are MIT License
                    </p>
                </div>
                <div className="started">
                    <button className="cursor-pointer bg-second text-white py-2 px-4 rounded-md">
                        Get Started
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
