const categoriesButtonsContainer : HTMLElement | null = document.querySelector(
    '.catogries-buttons') as HTMLButtonElement;

    const foodCategories=['Dessert', 'Snacks', 'Main Course',
    'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];

foodCategories.forEach((type) => {
    const typeButton = document.createElement('button');
    typeButton.textContent = type;
    typeButton.dataset.name = type;
    categoriesButtonsContainer.appendChild(typeButton);
});
import { buttonClick } from "./searcharea";
categoriesButtonsContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target.tagName === 'BUTTON') {
        const crrvalue = target.textContent ?? '';
        buttonClick(crrvalue);
    }
});