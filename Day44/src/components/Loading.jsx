import React from "react";
import "../assets/style.scss";
const Loading = () => {
    return (
        <div>
            <div className="lds-dual-ring"></div>
            <p className="loading">Đang tải</p>
        </div>
    );
};

export default Loading;
