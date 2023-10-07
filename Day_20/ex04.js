const postList = document.querySelector(".post");
const posts = [
    {
        img: "https://fastly.picsum.photos/id/472/200/300.jpg?hmac=QWrw_-haGekq7e6hrwtMmL7cjpfQkkX946dg8swfWLE",
        title: "tiêu đề 1",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsum fuga, voluptatum harum minus repellendus nisi tempore quis quaerat reiciendis",
    },
    {
        img: "https://fastly.picsum.photos/id/931/200/300.jpg?hmac=j4ZWid4CKIZ1iSYZTs79i2GaiX4vgxlB2_1Efxiko84",
        title: "tiêu đề 2",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsum fuga, voluptatum harum minus repellendus nisi tempore quis quaerat reiciendis",
    },
    {
        img: "https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
        title: "tiêu đề 3",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsum fuga, voluptatum harum minus repellendus nisi tempore quis quaerat reiciendis",
    },
];

const renderHtml = posts.map((post, index) => {
    return `<div class="post-item ${index % 2 !== 0 ? "active" : ""}">
            <img src="${post.img}"
                alt="">
            <div class="post-info">
                <h2 class="title">${post.title}</h2>
                <p>${post.desc}</p>
            </div>
        </div>`;
});
postList.innerHTML = renderHtml.join("");
