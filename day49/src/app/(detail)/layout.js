import Header from "./[id]/Header/Header";
function DetailLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
export default DetailLayout;
