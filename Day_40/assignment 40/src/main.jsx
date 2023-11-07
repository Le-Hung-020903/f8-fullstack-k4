import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";
const root = document.querySelector("#root");
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Gioi-thieu",
                element: <About />,
            },
            {
                path: "/San-pham",
                element: <Product />,
            },
            {
                path: "/San-pham/:id",
                element: <ProductDetail />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
