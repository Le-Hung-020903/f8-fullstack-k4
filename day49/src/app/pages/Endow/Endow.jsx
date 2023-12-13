import API from "@/app/utils/Api";
import "./Endow.scss";
import Card from "./Card";
const Endow = async () => {
    const response = await fetch(API + `/api/v1/pages`);
    const datas = await response.json();

    return (
        <section className="endow-container">
            <div className="endow-inner">
                <h2 className="endow-title">
                    <span>Ư</span>
                    <span>U</span>
                    <span className="space"></span>
                    <span>Đ</span>
                    <span>Ã</span>
                    <span>I</span>
                </h2>
                <div className="card-endow-list">
                    {datas?.map((data) => {
                        return (
                            <Card
                                key={data.id}
                                images={`${API}${data.destinationBox[0].src}`}
                                location={data.home.name}
                                textcontent={data.home.content}
                                id={data.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Endow;
