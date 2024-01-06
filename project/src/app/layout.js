import { UserProvider } from "@auth0/nextjs-auth0/client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </UserProvider>
        </html>
    );
}
