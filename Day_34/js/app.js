import { client } from "./client.js";

const app = {
    todoListEl: document.querySelector(".root"),
    todoForm: document.querySelector(".modal"),
    todoCompleted: [],
    query: {},
    renderTodo: function (todo) {
        this.todoCompleted = todo.filter(({ completed }) => completed === true);
        this.todoListEl.innerHTML = `<h1><span class="hightlight">Smatyx</span> Todos App</h1>
      <div class="form-group">
        <label for="search">
          <input type="text" placeholder="Search Todos" id="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </label>
        <button class="add-todos" type="button">Add Todos</button>
      </div>
      <div class="todos">
        ${todo
            .filter(({ completed }) => completed === false)
            .map(({ id, name }) => this.getTodoCompleted({ id, name }))
            .join("")}
      </div>
      <div class="completed js-show-completed">
        Completed Todos ${this.todoCompleted.length}
        <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M13 18v-4h-7v-4h7v-4l6 6-6 6zm-1-16c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
        </svg>
      </div>
      <div class="todos-completed">
      </div>`;
    },
    renderForm: function () {
        this.todoForm.innerHTML = `
      <div class="modal">
        <div class="modal-overlay"></div>
      <div class="modal-body">
        <form>
          <div class="modal-input">
            <input type="text" name="" id="" placeholder="Add Todos">
          </div>
          <div class="modal-cta">
            <button type="button">Save</button>
            <button class="cancel" type="button">Cancel</button>
          </div>
        </form>
      </div>
      </div>`;
    },
    getTodo: async function () {
        const query = new URLSearchParams(this.query).toString();
        const { data: todos } = await client.get("/todos?" + query);
        this.renderTodo(todos);
    },
    deleteTodo: async function (id) {
        const { response } = await client.delete(`/todos/${id}`);
        if (response.ok) {
            this.getTodo();
        }
    },
    completedTodo: async function (id) {
        const { response } = await client.patch(`/todos/${id}`, {
            completed: true,
        });
        if (response.ok) {
            this.getTodo();
        }
    },
    addEvent: function () {
        this.todoListEl.addEventListener("click", (e) => {
            if (e.target.classList.contains("js-show-completed")) {
                this.handleShowCompleted(e.target);
            }
            if (
                e.target.classList.contains("js-delete-btn") ||
                e.target.classList.contains("fa-trash")
            ) {
                this.handleDelete(e.target.dataset.id);
                this.handleDelete(e.target.parentElement.dataset.id);
            }
            if (
                e.target.classList.contains("js-completed-btn") ||
                e.target.classList.contains("fa-check")
            ) {
                this.handleCompleted(e.target);
                this.handleCompleted(e.target.parentElement.dataset.id);
                const completed =
                    e.target.classList.contains("js-completed-btn");
                completed.classList.add("icon-completed");
            }
        });
    },
    getTodoCompleted: function ({ id, name }) {
        return `<article class="todo-item">
          <p class="name-todo">${name}</p>
          <div class="todo-icon">
            <div class="trash js-delete-btn" data-id=${id}>
              <i class="fa-solid fa-trash"></i>
            </div>
            <div class="edit">
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="todo-completed js-completed-btn" data-id=${id}>
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
        </article>`;
    },
    handleCompleted: function (id) {
        this.completedTodo(id);
    },
    handleShowCompleted: function (current) {
        const todoCompletedEl =
            this.todoListEl.querySelector(".todos-completed");
        if (current.classList.contains("focus")) {
            current.classList.remove("focus");
            current.querySelector("svg").classList.remove("rotate");
            todoCompletedEl.innerHTML = "";
        } else {
            current.classList.add("focus");
            current.querySelector("svg").classList.add("rotate");
            todoCompletedEl.innerHTML = this.todoCompleted.map(({ id, name }) =>
                this.getTodoCompleted({ id, name })
            );
        }
    },
    handleDelete: function (id) {
        if (confirm("Are you sure delete?")) {
            this.deleteTodo(id);
        }
    },
    start: function () {
        // this.query = {
        //     completed: false,
        // };
        this.getTodo();
        this.addEvent();
    },
};
app.start();
