import Link from "next/link";
import React from "react";

const PageMindMap = () => {
    return (
        <section className="px-20 pt-8 pb-48">
            <h2 className="text-black text-4xl font-medium">Mindmap của tôi</h2>
            <span className="inline-block text-white cursor-pointer py-2 px-3 bg-primary rounded-lg my-4">
                <Link href={"/mindMap/createMindMap"}>Thêm mới</Link>
            </span>
            <div className="w-full">
                <span className="inline-block w-1/4">
                    <input type="checkbox" name="" id="" />
                </span>
                <span className="inline-block w-1/4">TÊN</span>
                <span className="inline-block w-1/4">TẠO LÚC</span>
                <span className="inline-block w-1/4">HÀNH ĐỘNG</span>
            </div>
        </section>
    );
};

export default PageMindMap;
