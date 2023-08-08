const size = 8;
const chessBoard = document.getElementById(`chessBoard`);
for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
        const cell = document.createElement("td");
        if ((i + j) % 2 === 0) {
            cell.className = "black";
        } else {
            cell.className = "while";
        }
        row.appendChild(cell);
    }
    chessBoard.appendChild(row);
}
