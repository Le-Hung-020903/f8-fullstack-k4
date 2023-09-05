// Dữ liệu mảng chuyên mục
var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
];

// Hàm đệ quy để tạo danh sách thẻ option
function createOptionList(categories, depth = 0) {
    const options = [];
    const prefix = "--|".repeat(depth); // Tạo tiền tố dấu "--|"

    for (const category of categories) {
        options.push(
            `<option value="${category.id}">${prefix} ${category.name}</option>`
        );

        if (category.children) {
            options.push(...createOptionList(category.children, depth + 1));
        }
    }

    return options;
}

// Tạo thẻ select và thêm các thẻ option vào đó
const selectElement = document.createElement("select");
const optionList = createOptionList(categories);
selectElement.innerHTML = optionList.join("\n");

// Thêm thẻ select vào DOM
document.body.appendChild(selectElement);
