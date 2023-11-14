import React, { useState, useEffect } from "react";
import { Client } from "../api/Client";
import alertify from "alertifyjs";

function Search({
    handleToggleSearch,
    isSearch,
    inputText,
    isLogin,
    handleSetState,
    handleLoading,
}) {
    const handleAlert = (message, isError = false) => {
        alertify[isError ? "error" : "message"](message);
    };

    const handleReload = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    const handleClick = (e) => {
        if (!isLogin) {
            handleAlert("Hãy đăng nhập để bắt đầu tìm kiếm!", true);
            handleReload();
            return;
        }

        const input =
            e.target.previousElementSibling.querySelector("input[type='text']");

        if (!isSearch) {
            input.focus();
            handleToggleSearch(true);
            handleSetState({ inputText: input.value });
            inputText !== "" && handleSearchTodo(inputText);
        } else {
            handleAlert("Đã kết thúc tìm kiếm!");
            handleToggleSearch(false);

            if (inputText !== "") {
                handleSetState({ inputText: "" });
                handleSearchTodo("");
            }
        }
    };

    const getData = async (query = {}) => {
        const queryString = new URLSearchParams(query).toString();
        const { response, data } = await Client.get(`/todos?` + queryString);

        if (response.status === 401) {
            handleAlert("Hãy đăng nhập lại để tiếp tục tìm kiếm!", true);
            handleReload();
        } else if (response.ok) {
            return data.data;
        } else {
            return null;
        }
    };

    const handleSearchTodo = async (text) => {
        handleLoading(true);
        const data = await getData({ q: text });

        if (data) {
            handleSetState({ data: data.listTodo });

            if (data.listTodo.length > 0 && isSearch) {
                handleAlert(`Đã tìm thấy ${data.listTodo.length} kết quả`);
            }
        } else if (data === null) {
            handleAlert("Đã xảy ra lỗi không xác định!", true);
        }

        handleLoading(false);
    };

    useEffect(() => {
        let timer;

        if (isSearch) {
            if (timer) clearTimeout(timer);

            timer = setTimeout(() => {
                handleSearchTodo(inputText);
            }, 800);

            return () => {
                if (timer) clearTimeout(timer);
            };
        }
    }, [isSearch, inputText]);

    return (
        <button
            className={`search-btn${isSearch ? " active" : ""}`}
            onClick={handleClick}
        >
            Đang tìm...
        </button>
    );
}
export default Search;
