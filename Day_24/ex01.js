const app = document.querySelector(".app");
const input = document.querySelector(".todoForm .input");

const form = document.querySelector(".todoForm");

const remove = document.querySelector(".icon-trash");

function handleDeleteTask(el) {
    app.removeChild(el.parentElement.parentElement);
}

function handleEditTask(el) {
    const inputEdit = document.querySelector(".inputEdit");
    el.className = "todotext";
    el.innerHTML = `<p class="text">${inputEdit.value}</p>
  <div class="icon">
      <i class="fa-solid fa-pen-to-square icon-edit" onclick="editTask(this)"></i>
      <i class="fa-solid fa-trash icon-trash" onclick="handleDeleteTask(this)"></i>
  </div>`;
}

function editTask(el) {
    const parentElement = el.parentElement.parentElement;
    parentElement.className = "";
    parentElement.innerHTML = `
  <form class="todoForm edit">
    <input type="text" class="input inputEdit" name="inputEdit" />
    <button type="submit" class="btn btnEdit">Save Task</button>
  </form>
    `;
    document.querySelector(".todoForm.edit").addEventListener("submit", (e) => {
        e.preventDefault();
        handleEditTask(parentElement);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const div = document.createElement("div");
    div.className = "todotext";
    div.innerHTML = `
  <p class="text">${input.value}</p>
  <div class="icon">
      <i class="fa-solid fa-pen-to-square icon-edit" onclick="editTask(this)"></i>
      <i class="fa-solid fa-trash icon-trash" onclick="handleDeleteTask(this)"></i>
  </div>
  `;

    app.appendChild(div);

    input.value = "";
});
