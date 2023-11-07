const modal = document.querySelector(".modal");
const inputVl = document.querySelector(".modal-input input");
function showModalEdit(name) {
    modal.classList.add("show");
    inputVl.value = name;
}
