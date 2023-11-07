const addTodo = document.querySelector(".add-todos");
const modal = document.querySelector(".modal");
const cancel = document.querySelector(".cancel");
document.addEventListener("DOMContentLoaded", function () {
    addTodo.addEventListener("click", function () {
        modal.classList.add("show");
    });

    cancel.addEventListener("click", function () {
        modal.classList.remove("show");
    });
});
import { client } from "./client.js";
const app = {
    formTodo: document.querySelector(".root"),
    formAddTodo: document.querySelector(".modal"),
    todoList: document.querySelector(".todos"),
    render: function (todos) {
        this.todoList.innerHTML = `${todos
            .map(({ id, name }) => {
                return `<article class="todo-item">
          <p class="name-todo">${name}</p>
          <div class="todo-icon">
            <div class="trash">
              <i class="fa-solid fa-trash"></i>
            </div>
            <div class="edit" onclick="showModalEdit('${name}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="todo-completed">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
        </article>`;
            })
            .join("")}
      
      <div class="completed">
        Completed Todos
        <span class="quanlity">1</span>
        <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M13 18v-4h-7v-4h7v-4l6 6-6 6zm-1-16c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
        </svg>
      </div>`;
    },

    getTodo: async function () {
        const { response, data: todos } = await client.get("/todos");
        return todos;
    },
    start: async function () {
        const todos = await this.getTodo();
        this.render(todos);
    },
};
app.start();
