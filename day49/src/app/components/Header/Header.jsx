import { CiSettings } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import "./Header.scss";
const Header = () => {
    return (
        <header className="header-container">
            <div className="header-inner">
                <nav className="header-nav">
                    <div className="logo">
                        <span>S</span>
                        TRAVEL
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="">Trang Chủ</a>
                        </li>
                        <li>
                            <a href="">Đặt Lịch</a>
                        </li>
                        <li>
                            <a href="">Ưu Đãi</a>
                        </li>
                        <li>
                            <a href="">Dịch Vụ</a>
                        </li>
                        <li>
                            <a href="">Thư Viện</a>
                        </li>
                        <li>
                            <a href="">Đánh Giá</a>
                        </li>
                        <li>
                            <a href="">Liên Hệ</a>
                        </li>
                    </ul>
                    <div className="seting">
                        <div className="setting-1">
                            <CiSettings />
                        </div>
                        <div className="search">
                            <IoIosSearch />
                        </div>
                        <div className="user">
                            <FaUser />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
