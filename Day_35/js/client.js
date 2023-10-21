const { SERVER_API } = config;
import { config } from "./config.js";

export const client = {
    send: async function (url, method = "GET", body = null) {
        url = `${SERVER_API}${url}`;
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };
        if (body) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url);
        const total = response.headers.get("X-Total-Count");
        const data = await response.json();

        return { response, data, total: total ? parseInt(total) : 0 };
    },

    // http: get
    get: function (url) {
        return this.send(url);
    },
    // http: post
    post: function (url, body) {
        return this.send(url, "POST", body);
    },
    // http: put
    put: function (url, body) {
        return this.send(url, "PUT", body);
    },
    // http: patch
    patch: function (url, body) {
        return this.send(url, "PATCH", body);
    },
    // http: delete
    delete: function (url) {
        return this.send(url, "DELETE");
    },
};
// const url = "https://jsonplaceholder.typicode.com/todos";
// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         title: "hoc lap trinh",
//     }),
// };
// (async function data() {
//     const res = await fetch(url, options);
//     const data = res.json();
// })();
