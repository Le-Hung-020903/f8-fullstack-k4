import Header from "./components/Header/Header";
import "@/assets/reset.css";
import Main from "./components/Main/Main";
import { LangProvider } from "@/app/context/LangContext";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const HomePage = async () => {
    const session = await getServerSession(authOptions);

    console.log({ sessionHome: session });

    if (!session) {
        redirect("/login");
    }

    return (
        <LangProvider>
            <Header />
            <Main />
        </LangProvider>
    );
};

export default HomePage;
