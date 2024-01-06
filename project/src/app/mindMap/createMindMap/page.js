"use client";
import { useEffect, useState } from "react";
import Mindmap from "./Mindmap";
const CreateMindMap = () => {
    const [heading, setHeading] = useState("Mindmap không có tên");
    useEffect(() => {
        document.title = heading;
    }, [heading]);

    return (
        <>
            <section className="py-10">
                <input
                    className="text-3xl mb-4"
                    contentEditable="true"
                    spellCheck="false"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                />
                <p contentEditable="true" spellCheck="false">
                    Mô tả mind map
                </p>
                <div className="w-full py-3" style={{ height: "550px" }}>
                    <Mindmap />
                </div>
            </section>
        </>
    );
};

export default CreateMindMap;
