import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "../core/Hooks";
import Loading from "../services/Loading";
import Login from "./Login";
import Product from "./Product";
import { client } from "../services/client";
import reloadPages from "../services/error";
import alertify from "alertifyjs";
import Cart from "./Cart";

export default function Index() {
    const { isLogin, isLoading, apiKey, userEmail, cartLen } = useSelector();

    const dispatch = useDispatch();

    const [userName, setUserName] = useState("");

    const getProfile = async () => {
        const { data, response } = await client.get(`/users/profile`);
        if (response.status === 401) {
            reloadPages();
        } else if (response.ok) {
            return data.data;
        } else {
            alertify.error(data.message);
        }
    };
    const handleOpenCart = (e) => {
        dispatch({ type: "shop/toggleCart" });
    };
    useEffect(() => {
        const cookiesApiKey = Cookies.get("apiKey");
        const cookiesUserEmail = Cookies.get("userEmail");
        if (
            cookiesApiKey &&
            cookiesUserEmail &&
            cookiesApiKey !== apiKey &&
            cookiesUserEmail !== userEmail
        ) {
            dispatch({
                type: "login",
                apiKey: cookiesApiKey,
                userEmail: cookiesUserEmail,
            });
        }
    }, [isLogin]);
    return (
        <>
            {isLoading && <Loading />}
            {!isLogin && <Login />}
            <div className="shop">
                <div className="containers">
                    {userName && <span className="profile">{userName}</span>}
                    <button className="cart-btn" onClick={handleOpenCart}>
                        {/* <i className="bx bxs-cart-add"></i> */}
                        <i className="bx bx-cart-add"></i>
                        <span>{cartLen}</span>
                    </button>
                    <span className="cart"></span>
                    <h1 className="shop-title">Welcome to Shop!</h1>
                    <Product />
                    <Cart />
                    {!isLogin && (
                        <h2 style={{ "margin-top": "30vh" }}>
                            Đăng nhập để có thể mua hàng nào !!!
                        </h2>
                    )}
                </div>
            </div>
        </>
    );
}
