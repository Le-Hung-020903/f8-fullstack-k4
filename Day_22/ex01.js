function total(...args) {
    let sum = 0;
    for (const value of args) {
        if (typeof value !== "number") {
            throw new Error("input is not of number");
        }
        sum += value;
    }
    return sum;
}
try {
    const result = total(10, 20, 30);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`Error: `, error.message);
}
