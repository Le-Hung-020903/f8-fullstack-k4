import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
    const param = useParams();
    return (
        <div>
            <p>Sản phẩm {param.id}</p>
            <Link to="/San-pham">Back</Link>
        </div>
    );
};

export default ProductDetail;
