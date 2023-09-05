function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        const value = parseFloat(args[i]);
        if (!isNaN(value)) {
            total += value;
        } else {
            console.log(`Trong mảng có phần tử không phải là số`);
        }
    }
    return total;
}
console.log(sum(2, 4, 5, 6));
