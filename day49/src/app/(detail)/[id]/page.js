import React from "react";
import API from "@/app/utils/Api";
import Home from "./Home/page";

const DetailPage = async ({ params }) => {
    const id = params.id;
    const response = await fetch(API + `/api/v1/pages/${id}`);
    const datas = await response.json();
    return (
        <main className="page-container">
            <Home
                images={`${API}${datas.destinationBox[0].src}`}
                cityname={datas.home.name}
                content={datas.home.content}
                textcontent={datas.home.textcontent}
                id={id}
            />
        </main>
    );
};

export default DetailPage;
