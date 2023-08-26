function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

const data = [];

function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        console.log("Thông tin không đầy đủ.");
        return;
    }

    const existingUser = data.find((user) => user.email === email);
    if (existingUser) {
        console.log("Người dùng đã tồn tại.");
        return;
    }

    const newUser = new User(name, password, email);
    data.push(newUser);
    return newUser;
}

function handleLogin(email, password) {
    const user = data.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        return user;
    } else {
        console.log("Thông tin đăng nhập không hợp lệ.");
        return null;
    }
}

const dataRegisterA = handleRegister(
    "Le Dinh Hung",
    "123",
    "ledinhhung@email.com"
);
const dataRegisterB = handleRegister(
    "Nguyen Van Hung",
    "12345",
    "nguyenvanhung@email.com"
);

const dataLogin = handleLogin("nguyenvanhung@email.com", "12345");

console.log(data);
console.log(dataLogin);
