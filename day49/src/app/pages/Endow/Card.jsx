import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    return (
        <div className="card-endow-item">
            <div className="card-container-img">
                <Image
                    src={props.images}
                    alt="anh munbai"
                    fill
                    className="card-img"
                />
            </div>
            <div className="card-enddow-content">
                <h3 className="card-title">
                    <FaLocationDot />
                    {props.location}
                </h3>
                <p className="card-desc">{props.textcontent}</p>
                <div className="card-time">
                    Chuyến Đi Dành Cho Gia Đình 3N/2Đ
                </div>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="prices">
                    <div className="price">6.500.000</div>
                    <span className="discount">10.000.000</span>
                </div>
                <Link href={`/${props.id}`}>Đặt Ngay</Link>
            </div>
        </div>
    );
};

export default Card;
