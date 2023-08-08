function taxiFares(km) {
    var fare;
    if (km <= 1) {
        fare = 15000;
    } else if (km <= 5) {
        fare = 13500 * km;
    } else {
        fare = 11000 * km;
    }
    if (km > 120) {
        fare *= 0.9;
    }
    return fare;
}
const soKm = parseFloat(prompt("Nhập số km đã đi: "));
const total = taxiFares(soKm);
console.log(`Tiền cước cho ${soKm} là: ${total}`);
