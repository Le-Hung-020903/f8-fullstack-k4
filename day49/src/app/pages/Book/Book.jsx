import "./Book.scss";
import Image from "next/image";
import book from "../../assets/images/book-img.svg";
const Book = () => {
    return (
        <section className="Book-container">
            <div className="Book-inner">
                <h2 className="Book-heading">
                    <span>T</span>
                    <span>Ì</span>
                    <span>M</span>
                    <span className="space"></span>
                    <span>Ư</span>
                    <span>U</span>
                    <span className="space"></span>
                    <span>Đ</span>
                    <span>Ã</span>
                    <span>I</span>
                </h2>
                <div className="Book-content">
                    <div className="Book-left">
                        <Image src={book} alt="Anh ua dai" />
                    </div>
                    <div className="Book-right">
                        <form action="" className="Book-form">
                            <div className="inputGroup">
                                <h3>Hãy Liên Hệ Với Tôi Bằng:</h3>
                                <input
                                    type="text"
                                    placeholder="Email hoặc số điện thoại"
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Tôi Muốn Đến:</h3>
                                <select>
                                    <option value="0">Viet Nam</option>
                                    <option value="1">Campuchia</option>
                                    <option value="2">Singapo</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Địa điểm chính xác"
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Chúng tôi có:</h3>
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    min={1}
                                    placeholder="Số người"
                                />
                            </div>
                            <div className="inputGroup">
                                <h3>Bắt đầu từ: </h3>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="inputGroup">
                                <h3>Kết thúc vào:</h3>
                                <input type="date" />
                            </div>
                            <button>Tìm Ngay</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;
