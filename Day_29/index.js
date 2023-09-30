document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector(".list");
    let draggedElement = null;

    const listItems = Array.from(
        list.querySelectorAll(".list-item:not(.active)")
    );
    const activeItems = Array.from(list.querySelectorAll(".list-item.active"));

    listItems.forEach((item, index) => {
        item.addEventListener("dragstart", handleDragStart);
        item.addEventListener("dragend", handleDragEnd);

        const span = item.querySelector("span");
        const orderSpan = document.createElement("span");
        orderSpan.className = "new-order";
        orderSpan.textContent = `${index + 1}: `;
        item.insertBefore(orderSpan, span);
    });

    activeItems.forEach((active, index) => {
        active.addEventListener("dragstart", handleDragStart);
        active.addEventListener("dragend", handleDragEnd);

        const span = active.querySelector("span");
        const orderSpan = document.createElement("span");
        orderSpan.className = "new-order";
        orderSpan.textContent = ` ${index + 1}: `;
        active.insertBefore(orderSpan, span);
    });

    list.addEventListener("dragover", handleDragOver);
    function handleDragStart(e) {
        draggedElement = this;
        e.target.classList.add("dragging");
    }

    function handleDragEnd(e) {
        draggedElement = null;
        updateOrderNumbers();
        e.target.classList.remove("dragging");
    }

    function updateOrderNumbers() {
        const listItems = Array.from(
            list.querySelectorAll(".list-item:not(.active)")
        );
        const activeItems = Array.from(
            list.querySelectorAll(".list-item.active")
        );

        listItems.forEach((item, index) => {
            const orderSpan = item.querySelector(".new-order");
            orderSpan.textContent = `${index + 1}: `;
        });

        activeItems.forEach((active, index) => {
            const orderSpan = active.querySelector(".new-order");
            orderSpan.textContent = ` ${index + 1}: `;
        });
    }

    function handleDragOver(e) {
        e.preventDefault();
        if (draggedElement) {
            const targetItem = e.target.closest(".list-item");
            if (targetItem !== null && targetItem !== draggedElement) {
                const dropTarget =
                    e.clientY <
                    targetItem.getBoundingClientRect().top +
                        targetItem.getBoundingClientRect().height / 2
                        ? "before"
                        : "after";

                if (draggedElement.classList.contains("active")) {
                    if (dropTarget === "before") {
                        list.insertBefore(draggedElement, targetItem);
                    } else {
                        list.insertBefore(
                            draggedElement,
                            targetItem.nextElementSibling
                        );
                    }
                } else {
                    if (
                        targetItem.getBoundingClientRect().top >=
                        draggedElement.getBoundingClientRect().bottom
                    ) {
                        updateOrderNumbers();
                    }
                    list.insertBefore(draggedElement, targetItem);
                }

                updateOrderNumbers();
            }
        }
    }
});
