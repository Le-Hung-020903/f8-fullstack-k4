"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
    const pathName = usePathname();
    const isActive = (href) => {
        return pathName === href;
    };
    const { user, error, isLoading } = useUser();
    if (isLoading) <div>Loading...</div>;
    if (error) <p>{error.message}</p>;

    return (
        <header className="shadow-md">
            <div className="header-inner px-7 text-b flex justify-between items-center p-1">
                <div className="logo text-primary text-2xl cursor-pointer">
                    <Link href={"/"}>Mindmap Flow</Link>
                </div>
                <nav className="nav">
                    <ul className="flex gap-6 cursor-pointer p-1">
                        <li
                            className={`px-2 py-3 hover:bg-gray-300 rounded-sm ${
                                isActive("/") ? "header-active" : ""
                            }`}
                        >
                            <Link href={"/"}>Trang chủ</Link>
                        </li>
                        <li
                            className={`px-2 py-3 hover:bg-gray-300 rounded-sm ${
                                isActive("/about") ? "header-active" : ""
                            }`}
                        >
                            <Link href={"/about"}>Giới thiệu</Link>
                        </li>
                        <li
                            className={`px-2 py-3 hover:bg-gray-300 rounded-sm ${
                                isActive("/feature") ? "header-active" : ""
                            }`}
                        >
                            <Link href={"/feature"}>Tính năng</Link>
                        </li>
                        <li
                            className={`px-2 py-3 hover:bg-gray-300 rounded-sm ${
                                isActive("/price") ? "header-active" : ""
                            }`}
                        >
                            <Link href={"/price"}>Bảng giá</Link>
                        </li>
                        <li
                            className={`px-2 py-3 hover:bg-gray-300 rounded-sm ${
                                isActive("/contact") ? "header-active" : ""
                            }`}
                        >
                            <Link href={"/contact"}>Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
                {user ? (
                    <div className="cursor-pointer flex gap-5 items-center">
                        <span className="px-3 py-2  rounded-md hover:bg-[#E0E7FF] text-indigo-600">
                            Hi, <span>{user.name}</span>
                        </span>

                        <span className="px-3 py-2  rounded-md hover:bg-[#E0E7FF] text-indigo-600">
                            <Link href={"/mindMap"}>Mindmap</Link>
                        </span>

                        <button className="px-3 py-2 border rounded-md text-indigo-600 border-second hover:bg-second hover:text-white transition ease duration-300">
                            <Link href={"/api/auth/logout"}>Đăng xuất</Link>
                        </button>
                    </div>
                ) : (
                    <div className="cursor-pointer flex gap-5 items-center">
                        <button className="px-3 py-2  rounded-md text-indigo-600 hover:bg-[#E0E7FF]">
                            <Link href={"/api/auth/login"}>Đăng nhập</Link>
                        </button>

                        <button className="px-3 py-2 border rounded-md text-indigo-600 border-second hover:bg-second hover:text-white transition ease duration-300">
                            <Link href={"/api/auth/login"}>Đăng ký</Link>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
