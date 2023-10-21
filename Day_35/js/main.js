import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const render = (posts) => {
    const stripHtml = (html) => {
        return html.replace(/(<([^>]+)>)/gi, "");
    };
    const postList = document.querySelector(".posts .post-list");
    let postHtml = ``;
    posts.forEach(({ src }) => {
        postHtml += `<article class="post-item">
                        <div class="post-item__row">
                            <a href="#!"><img src="./img/avatar.jpeg" alt=""></a>
                            <span class="name">thv</span>
                            <span class="more">...</span>
                        </div>
                        <div class="post-item__img">
                            <img src="${stripHtml(src)}" loading="lazy" alt="">
                        </div>
                        <div class="post-item__reaction">
                            <div>
                                <span class="heart">
                                    <svg aria-label="Unlike" class="x1lliihq x1n2onr6 xxk16z8" fill="currentColor"
                                        height="24" role="img" viewBox="0 0 48 48" width="24">
                                        <title>Unlike</title>
                                        <path
                                            d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="comment">
                                    <svg aria-label="Comment" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                                        height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <title>Comment</title>
                                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                                            stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                                    </svg>
                                </span>
                                <span class="notification">
                                    <svg aria-label="Share Post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                                        height="24" role="img" viewBox="0 0 24 24" width="24">
                                        <title>Share Post</title>
                                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                            x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                        <polygon fill="none"
                                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                            stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                                    </svg>
                                </span>
                            </div>
                            <span class="share">
                                <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                                    role="img" viewBox="0 0 24 24" width="24">
                                    <title>Save</title>
                                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"></polygon>
                                </svg>
                            </span>
                        </div>
                        <p class="post-item__interact">
                            8,204,127 likes
                        </p>
                        <p class="post-item__name">
                            thv
                        </p>
                        <p class="post-item__translation">
                            See translation
                        </p>

                        <p class="post-item__comment">
                            Comments on this post have been limited.
                        </p>
                    </article>`;
    });
    postList.innerHTML += `${postHtml}`;
};
const loader = document.querySelector(".lds-spinner");

let currentPage = 1;
let total = 0;
let limit = PAGE_LIMIT;

const hasMorePosts = (page, limit, total) => {
    const startIndex = (page - 1) * limit + 1;
    return total === 0 || startIndex < total;
};

const hideLoader = () => {
    loader.classList.remove("show");
};

const showLoader = () => {
    loader.classList.add("show");
};

const getPosts = async (query = {}) => {
    const queryString = new URLSearchParams(query).toString();
    const data = await client.get(`/posts?` + queryString);
    return data;
};

// load quotes
const loadPosts = async (page, limit) => {
    // show the loader
    showLoader();
    setTimeout(async () => {
        try {
            // if having more quotes to fetch
            if (hasMorePosts(page, limit, total)) {
                // call the API to get quotes
                const res = await getPosts({
                    _page: page,
                    _limit: limit,
                });
                // show quotes
                render(res.data);
                // update the total
                total = res.total;
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            hideLoader();
        }
    }, 500);
};
window.addEventListener(
    "scroll",
    () => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;

        if (
            scrollTop + clientHeight >= scrollHeight - 5 &&
            hasMorePosts(currentPage, limit, total)
        ) {
            currentPage++;
            loadPosts(currentPage, limit);
        }
    },
    {
        passive: true,
    }
);
// initialize
loadPosts(currentPage, limit);

// getPosts({
//     _limit: PAGE_LIMIT,
// });
