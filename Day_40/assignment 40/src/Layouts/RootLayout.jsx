import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h2>menu</h2>
                            <ul>
                                <li>
                                    <Link to="/">Trang chu</Link>
                                </li>
                                <li>
                                    <Link to="/Gioi-thieu">Gioi Thieu</Link>
                                </li>
                                <li>
                                    <Link to="/San-pham">San Pham</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
