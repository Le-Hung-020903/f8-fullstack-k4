// "use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./FormBook.scss";

const FormBook = (props) => {
    // const [values, setValues] = useState({
    //     user_email: user.email ?? "",
    //     message: "We're sending this message to confirm that you've booked",
    // });
    // const handleChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: [e.target.value],
    //     });
    // };
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     // const serviceId = import.meta.env.serviceId;
    //     // const templeteId =
    //     const templePagram = {
    //         fromEmail: user.email,
    //         fromName: user.name,
    //         toEmail: values.user_email,
    //         message: values.message,
    //     };
    //     emailjs
    //         .send(serviceId, templateID, templePagram, publicKey)
    //         .then(() => {
    //             toast.success("Email sent successfully");
    //         })
    //         .catch(() => {
    //             toast.error("Email sending failed");
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // };
    return (
        <section className="FormBook-container">
            <div className="FormBook-inner">
                <div className="FormBook-content">
                    <div className="FormBook-img">
                        <Image src={props.images} fill alt="anh detail" />
                    </div>
                    <div className="FormBook-title">
                        <h2 className="cityname">{props.cityname}</h2>
                        <p className="title">{props.content}</p>
                        <p className="desc">{props.textcontent}</p>
                        <Link href="" className="btn">
                            Tìm Hiểu Thêm
                        </Link>
                    </div>
                </div>
                <div className="FormBook-book">
                    <div className="FormBook">
                        <form>
                            <div className="package">
                                <h2>Ưu Đãi 30.000.000 Cho 5người/3ngày</h2>
                            </div>
                            <div className="inputGroup">
                                <h3>Số Điện Thoại</h3>
                                <input
                                    type="text"
                                    required
                                    maxLength={10}
                                    placeholder="0383545843"
                                    // onChange={handleChange}
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Email</h3>
                                <input
                                    type="email"
                                    placeholder="email@gmail.com"
                                    // onChange={handleChange}
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Thời Gian Đi</h3>

                                <input
                                    type="date"
                                    name="date"
                                    id=""
                                    // onChange={handleChange}
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Tôi Có</h3>
                                <input
                                    type="number"
                                    name="number"
                                    id=""
                                    min={1}
                                    // onChange={handleChange}
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Tôi Thanh Toán Bằng</h3>

                                <select
                                    name="pay"
                                    id=""
                                    // onChange={handleChange}
                                >
                                    <option value="momo">Momo</option>
                                    <option value="bank">Chuyển Khoản</option>
                                    <option value="card">Thẻ Visa</option>
                                </select>
                            </div>
                            <button className="btn">Đặt Ngay</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormBook;
