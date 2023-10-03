import { buttonClick } from "./searcharea.js";
const categoriesButtonsContainer = document.querySelector('.catogries-buttons');
const foodCategories = ['Dessert', 'Snacks', 'Main Course',
    'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];
foodCategories.forEach((type) => {
    const typeButton = document.createElement('button');
    typeButton.textContent = type;
    typeButton.dataset.name = type;
    categoriesButtonsContainer.appendChild(typeButton);
});
categoriesButtonsContainer.addEventListener('click', (event) => {
    var _a;
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const crrvalue = (_a = target.textContent) !== null && _a !== void 0 ? _a : '';
        buttonClick(crrvalue);
    }
});
