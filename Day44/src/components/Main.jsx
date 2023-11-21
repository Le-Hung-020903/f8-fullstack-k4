import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/style.scss";
import Profile from "./Profile";
import Loading from "./Loading";
const Main = () => {
    const { loginWithPopup, isAuthenticated, isLoading } = useAuth0();
    // const [loading, setLoading] = useState();
    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        );
    }
    return (
        <>
            {isAuthenticated ? (
                <Profile />
            ) : (
                <div className="container">
                    <p className="thankyou">
                        Cảm ơn bạn đã sử dụng dịch vụ của F8
                    </p>
                    <p className="question">
                        Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và
                        đặt câu hỏi tại đây!
                    </p>
                    <button onClick={() => loginWithPopup()}>
                        Đăng nhập || Đăng ký
                    </button>
                </div>
            )}
        </>
    );
};

export default Main;
