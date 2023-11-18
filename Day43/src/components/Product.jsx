import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../core/Hooks";
import { client } from "../services/client";
import reloadPages from "../services/error";
import alertify from "alertifyjs";
import Cookies from "js-cookie";

function Product() {
    const { isLogin, products, carts } = useSelector();
    const dispatch = useDispatch();
    const postCart = async (product) => {
        const { data, response } = await client.post(`/order`, product);
        if (response.status === 401) {
            reloadPages();
        } else if (!response.ok) {
            alertify.error(data.message);
        } else {
            return data;
        }
    };
    const handleAddCart = async (_id, name, price, remaining) => {
        if (!Cookies.get("userEmail") || !Cookies.get("apiKey")) {
            Cookies.remove("apiKey");
            Cookies.remove("userEmail");
            return reloadPages();
        }
        dispatch({
            type: "loading",
        });
        const data = await postCart({
            productId: _id,
            quantity: 1,
        });
        if (data) {
            dispatch({
                type: "shop/AddCarts",
                carts: { productId: _id, name, price, remaining, quantity: 1 },
            });
            alertify.message(`Đã thêm sản phẩm  vào giỏ hàng!`);
        }
        dispatch({
            type: "loading",
        });
    };
    const getProduct = async () => {
        const { data, response } = await client.get(`/products`);
        console.log(data);
        if (response.status === 401) {
            reloadPages();
        } else if (response.ok) {
            return data.data;
        } else {
            alertify.error(data.message);
        }
    };
    useEffect(() => {
        if (isLogin) {
            (async () => {
                const data = await getProduct();
                if (data) {
                    dispatch({
                        type: "shop/products",
                        products: data.listProduct,
                    });
                }
            })();
        }
    }, [isLogin, dispatch]);
    return (
        <div className="products">
            {products.map(({ _id, name, price, image, quantity }) => {
                return (
                    <div className="products-item" key={_id}>
                        <div className="products-item__img">
                            <img src={image} alt={name} />
                        </div>
                        <div className="products-item__content">
                            <p>{name}</p>
                            <div>
                                <span>{price}</span>
                                <p>SL: {quantity}</p>
                            </div>
                        </div>
                        <div className="products-item__btn">
                            <button
                                type="button"
                                onClick={(e) =>
                                    handleAddCart(_id, name, price, quantity)
                                }
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Product;
