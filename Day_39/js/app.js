import { client } from "./client.js";
import { config } from "./config.js";
const { SERVER_API_AUTH } = config;

client.setUrl(SERVER_API_AUTH);

const app = {
    root: document.querySelector("#root"),
    isLogin: function () {
        const status = localStorage.getItem("login_token") ? true : false;

        return status;
    },
    renderRegisterForm: function () {
        let html = `
        <div class="container py-3">
          <div class="row justify-content-center">
            <div class="col-8 col-lg-6">
              <button type="button" class="btn btn-primary register-back mb-3">⭠ Trở về đăng nhập</button>
              <h2 class="text-center">Đăng ký</h2>
              <form action="" class="register">
                <div class="mb-3">
                  <label for=""> Name</label>
                  <input type="text" name="name" class="form-control name" placeholder="Name..." required/>
                </div>
                <div class="mb-3">
                  <label for=""> email</label>
                  <input type="email" name="email" class="form-control email" placeholder="Email..." required/>
                </div>
                <div class="mb-3">
                  <label for=""> password</label>
                  <input type="password" name="password" class="form-control password" placeholder="Password..." required/>
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary" type="submit">Đăng ký</button>
                </div>
                <div class="msg mt-3 text-danger text-center"></div>
              </form>
            </div>
          </div>
        </div>`;
        this.root.innerHTML = html;
    },
    // render: function () {
    //     let html;
    //     if (this.isLogin()) {
    //         html = `<div class="container py-3">
    //     <h2 class="text-center">Chào mừng bạn đã quay trở lại</h2>
    //     <ul class="profile list-unstyled d-flex gap-3">
    //       <li>Chào bạn: <span class="name">Loading...</span></li>
    //       <li><a href="#" class="text-decoration-none logout">Đăng xuất</a></li>
    //     </ul>
    //   </div>`;
    //         this.getProfile();
    //     } else {
    //         html = `<div class="container py-3">
    //     <div class="row justify-content-center">
    //       <div class="col-8 col-lg-6">
    //         <h2 class="text-center">Đăng nhập</h2>
    //         <form action="" class="login">
    //           <div class="mb-3">
    //             <label for="">Email</label>
    //             <input type="email" name="email" class="form-control email" placeholder="Email..." required/>
    //           </div>
    //           <div class="mb-3">
    //             <label for="">Password</label>
    //             <input type="password" name="password" class="form-control password" placeholder="Password..." required/>
    //           </div>
    //           <div class="d-grid gap-2">
    //             <button class="btn btn-primary">Đăng nhập</button>
    //             <button class="btn btn-primary btn-register">Đăng Ký</button>
    //           </div>
    //           <div class="msg mt-3 text-danger text-center"></div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>`;
    //     }

    //     this.root.innerHTML = html;
    // },
    renderLoginForm: function () {
        let html = `
    <div class="container py-3">
      <div class="row justify-content-center">
        <div class="col-8 col-lg-6">
          <button type="button" class="btn btn-primary login-back mb-3">⭠ Trở về trang chủ</button>
          <h2 class="text-center">Đăng nhập</h2>
          <form action="" class="login">
            <div class="mb-3">
              <label for="">Email</label>
              <input type="email" name="email" class="form-control email" placeholder="Email..." required/>
            </div>
            <div class="mb-3">
              <label  abel for="">Password</label>
              <input type="password" name="password" class="form-control password" placeholder="Password..." required/>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="submit">Đăng nhập</button>
              <button class="btn btn-primary register-btn" type="button">Đăng ký</button>
            </div>
            <div class="msg mt-3 text-danger text-center"></div>
          </form>
        </div>
      </div>
    </div>`;
        this.root.innerHTML = html;
    },
    addEvent: function () {
        this.root.addEventListener("submit", (e) => {
            e.preventDefault();
            if (e.target.classList.contains("login")) {
                const emailEl = e.target.querySelector(".email");
                const passwordEl = e.target.querySelector(".password");

                const email = emailEl.value;
                const password = passwordEl.value;

                this.login({ email, password });
            }
            if (e.target.classList.contains("register")) {
                const nameEl = e.target.querySelector(".name");
                const emailEl = e.target.querySelector(".email");
                const passwordEl = e.target.querySelector(".password");

                const name = nameEl.value;
                const email = emailEl.value;
                const password = passwordEl.value;

                this.register({ email, password, name });
            }
        });
        this.root.addEventListener("click", (e) => {
            if (e.target.classList.contains("logout")) {
                e.preventDefault();
                this.logout();
            }
            if (e.target.classList.contains("btn-register")) {
                e.preventDefault();
                // this.scrollable = false;
                this.renderRegisterForm(); // Hiển thị biểu mẫu đăng ký
            }
        });
    },
    loading: function (status = true) {
        const button = this.root.querySelector(".login .btn");
        if (status) {
            button.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
            button.disabled = true;
        } else {
            button.innerHTML = `Đăng nhập`;
            button.disabled = false;
        }
    },
    showError: function (msgText) {
        const msg = this.root.querySelector(".login .msg");
        msg.innerText = ``;
        msg.innerText = msgText;
    },
    login: async function (data) {
        this.loading(); //Thêm loading
        try {
            //Call API
            const { response, data: token } = await client.post(
                "/auth/login",
                data
            );
            this.loading(false); //Xóa loading
            if (!response.ok) {
                throw new Error("Email hoặc mật khẩu không hợp lệ");
            }
            //Thêm token vào Storage (localStorage)
            localStorage.setItem("login_token", JSON.stringify(token));
            //Render
            this.render();
        } catch (e) {
            this.showError(e.message);
        }
    },
    register: async function (info) {
        this.loadingRegister();
        try {
            //Call API
            const { response, data } = await client.post(
                "/auth/register",
                info
            );
            this.loadingRegister(false); //Xóa loading

            if (response.status === 400) {
                throw new Error(data.message);
            }

            this.renderLoginForm();
            // this.showToast({
            //     title: "Thành công!",
            //     message: "Bạn đã đăng ký thành công.",
            //     type: "success",
            //     duration: 2000,
            // });
        } catch (e) {
            this.showError(".register", e.message);
        }
    },
    loadingRegister: function (status = true) {
        const button = this.root.querySelector(".register .btn");
        if (status) {
            button.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
            button.disabled = true;
        } else {
            button.innerHTML = `Đăng ký`;
            button.disabled = false;
        }
    },
    isLogin: function () {
        let token = localStorage.getItem("login_token");
        let accessToken;

        if (token) {
            accessToken = JSON.parse(token).accessToken;
        }
        const status = accessToken ? true : false;
        if (!status) {
            localStorage.removeItem("login_token");
        }

        return status;
    },
    getProfile: async function () {
        try {
            let token = localStorage.getItem("login_token");
            let accessToken;

            if (token) {
                accessToken = JSON.parse(token).access_token;
            }

            if (!accessToken) {
                throw new Error("accessToken not null");
            }

            client.setToken(accessToken);
            const { response, data: user } = await client.get("/auth/profile");

            if (!response.ok) {
                throw new Error("Unauthorize");
            }

            const profileEl = this.root.querySelector(".profile");
            const profileName = profileEl.querySelector(".name");
            profileName.innerText = user.name;
        } catch (e) {
            if (e.message) {
                this.logout();
            }
        }
    },
    logout: function () {
        localStorage.removeItem("login_token");
        this.render();
    },
    start: function () {
        //Khởi động ứng dụng
        this.render();
        this.addEvent();
        this.getProfile();
    },
};

app.start();

/*
request -> accessToken chưa hết hạn -> ok
request -> accessToken hết hạn -> failed
Giải pháp: 
- request lấy lại accessToken (Dựa vào refresh)
- Lưu accessToken mới vào storage
- Gọi lại request bị failed
*/
//Promise, Async Await, Closure
//interceptors
