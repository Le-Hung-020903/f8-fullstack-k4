import { FaMoon } from "react-icons/fa";

import "./Header.scss";
import Link from "next/link";
const Header = () => {
    return (
        <header className="header-container">
            <div className="header-inner">
                <nav className="header-nav">
                    <Link href="/" className="logo">
                        <span>S</span>
                        TRAVEL
                    </Link>
                    <ul className="menu">
                        <li>
                            <a href="">Trang Chủ</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Điểm Đến</a>
                        </li>
                        <li>
                            <a href="">Dịch Vụ</a>
                        </li>
                        <li>
                            <a href="">Ảnh</a>
                        </li>
                        <li>
                            <a href="">Blogs</a>
                        </li>
                    </ul>
                    <div className="setting">
                        <button className="theme">
                            <FaMoon />
                        </button>
                        <button className="Book-now">Đặt Ngay</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
