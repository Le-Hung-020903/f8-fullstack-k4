import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Profile = () => {
    const { user, logout } = useAuth0();
    const [values, setValues] = useState({
        user_email: user.email ?? "",
        message: "Tôi cần trợ giúp bài tập về nhà!",
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: [e.target.value],
        });
    };
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        // const serviceId = import.meta.env.serviceId;
        // const templeteId =
        const templePagram = {
            fromEmail: user.email,
            fromName: user.name,
            toEmail: values.user_email,
            message: values.message,
        };
        emailjs
            .send(serviceId, templateID, templePagram, publicKey)
            .then(() => {
                toast.success("Email sent successfully");
            })
            .catch(() => {
                toast.error("Email sending failed");
            })
            .finally(() => {
                setLoading(false);
            });
    };
    if (loading) {
        return (
            <>
                <Loading />
            </>
        );
    }
    return (
        <div className="profile">
            <div className="profile-inner">
                <div className="profile__avatar">
                    <img src={user.picture} alt={user.name} />
                </div>
                <p className="profile__name">
                    Xin chào <b>{user.name}</b>!
                </p>
                <p className="profile__location">
                    Vị trí: {user.locale === "vi" ? "Tiếng Việt" : user.locale}
                </p>
                <p className="profile__email">
                    Email: <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <form onSubmit={sendEmail}>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            value={values.user_email}
                            name="user_email"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email của bạn *</label>
                    </div>
                    <div className="input-group">
                        <textarea
                            name="message"
                            id="message"
                            value={values.message}
                            onChange={handleChange}
                            required
                            defaultValue="Tôi cần trợ giúp bài tập về nhà!"
                        ></textarea>
                        <label htmlFor="message">Tin nhắn *</label>
                    </div>
                    <button type="submit">YÊU CẦU HỖ TRỢ</button>
                </form>
            </div>
            <button
                className="logout"
                onClick={() =>
                    logout({
                        logoutParams: {
                            returnTo: window.location.origin,
                        },
                    })
                }
            >
                Đăng xuất
            </button>
        </div>
    );
};

export default Profile;
