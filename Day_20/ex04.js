var data = [
    {
        title: "Tiêu đề 1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquid laboriosam aut. Rerum odio recusandae quasi ab itaque, quidem at.",
        img: "https://picsum.photos/200/300",
    },
    {
        title: "Tiêu đề 2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquid laboriosam aut. Rerum odio recusandae quasi ab itaque, quidem at.",
        img: "https://picsum.photos/200/300",
    },
    {
        title: "Tiêu đề 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquid laboriosam aut. Rerum odio recusandae quasi ab itaque, quidem at.",
        img: "https://picsum.photos/200/300",
    },
];
function renderPosts(data) {
    for (var i in data) {
        if (i % 2 === 0)
            document.write(
                `<div class="post-item">
                    <img src="${data[i].img}" alt="img-1"/>
                    <div class="post-content">
                        <h2 class="post-title">${data[i].title}</h2>
                        <p class="post-desc">
                        ${data[i].desc}
                        </p>
                    </div>
                </div>`
            );
        else {
            document.write(
                `<div class="post-item">
                    <div class="post-content">
                        <h2 class="post-title">${data[i].title}</h2>
                        <p class="post-desc">
                        ${data[i].desc}
                        </p>
                    </div>
                    <img src="${data[i].img}" alt="img-1"/>
                </div>`
            );
        }
    }
}
