import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                <li>
                    <Link to="/San-pham/1">Sản phẩm 1</Link>
                </li>
                <li>
                    <Link to="/San-pham/2">Sản phẩm 2</Link>
                </li>
                <li>
                    <Link to="/San-pham/3">Sản phẩm 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Product;
