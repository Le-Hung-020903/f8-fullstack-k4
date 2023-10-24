class El {
    constructor({ el, className, html }) {
        this.el = document.createElement(el);
        if (className) this.el.className = className;
        this.el.innerHTML = html;
    }

    getEl() {
        return this.el;
    }
}
