import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/about-img1.png";
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";
import avatar4 from "../../assets/images/avatar-4.png";

const About = () => {
    return (
        <section className="about my-16">
            <div className="about-inner px-24">
                <div className="about-us flex items-center gap-10">
                    <div className="about-content w-full lg:w-5/12">
                        <h2 className="font-bold text-3xl lg:text-4xl text-black pb-4">
                            About us
                        </h2>
                        <p className="text-justify">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum.In the first place we have granted to God, and
                            by this our present charter confirmed for us and our
                            heirs forever that the English Church shall be free,
                            and shall have her rights entire, and her liberties
                            inviolate; and we will that it be thus observed;
                            which is apparent from
                        </p>
                    </div>
                    <div className="about-media lg:w-8/12">
                        <Image
                            src={img1}
                            alt="about img"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>
                <div className="our-story flex gap-8 pt-14 items-center">
                    <div className="story-content lg:w-5/12">
                        <h2 className="font-bold text-3xl lg:text-4xl text-black pb-4">
                            Our story
                        </h2>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum.In the first place we have granted to God, and
                            by this our present charter confirmed for us and our
                            heirs forever that the English Church shall be free,
                            and shall have her rights entire, and her liberties
                            inviolate; and we will that it be thus observed;
                            which is apparent from
                        </p>
                    </div>
                    <div className="story-avatar flex lg:w-8/12">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src={avatar1} alt="anh 1" />
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src={avatar2} alt="anh 1" />
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src={avatar3} alt="anh 1" />
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src={avatar4} alt="anh 1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
