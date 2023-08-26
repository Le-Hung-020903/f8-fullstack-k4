function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

function createCustomers(customers) {
    const result = [];

    customers.forEach((customer) => {
        const { name, age, address } = customer;
        const shortName = name.split(" ").slice(-1)[0]; // Lấy phần cuối của tên làm shortName
        result.push({ name, age, address, shortName });
    });

    result.sort((a, b) => a.age - b.age); // Sắp xếp theo tuổi

    return result;
}

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);
console.log(result);
