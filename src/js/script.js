/* eslint-disable*/
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const navbarMenuButton = document.querySelector('.navbar-menu');
// const savedRecipesButton = document.querySelector('.saved-recipes');
// const categoriesButtons = document.querySelectorAll(
//     '.catogries-buttons button');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-button');
const resultRecipes = document.querySelector('.searched-recipes-lists');
const categoriesButtonsContainer = document.querySelector('.catogries-buttons');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const modalRecipeTitle = document.querySelector('.modal-recipe-title');
const modalIngredients = document.querySelector('.recipe-ingredients');
const modalMethod = document.querySelector('.recipe-method');
const foodCategories = ['Dessert', 'Snacks', 'Main Course',
    'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];
if (searchButton && searchInput && categoriesButtonsContainer && resultRecipes && modal && closeButton && modalMethod &&
    modalRecipeTitle && modalIngredients) {
    const fetchRecipes = (query) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = yield response.json();
            if (data.meals) {
                resultRecipes.innerHTML = ''; // Clear previous results
                console.log(data.meals);
                data.meals.forEach((meal) => {
                    const recipediv = document.createElement('section');
                    recipediv.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>`;
                    resultRecipes.appendChild(recipediv);
                    recipediv.addEventListener('click', () => {
                        modal.style.display = 'flex';
                        modalRecipeTitle.textContent = meal.strMeal;
                        const ingredients = [];
                        for (let i = 1; i <= 20; i++) {
                            const ingredient = meal[`strIngredient${i}`];
                            const measure = meal[`strMeasure${i}`];
                            if (ingredient && measure) {
                                ingredients.push(`${ingredient} - ${measure}`);
                            }
                        }
                        modalIngredients.innerHTML =
                            `<h3>Ingredients</h3>: ${ingredients.join(', ')}`;
                        modalMethod.innerHTML =
                            `<h3>Let's Cook It</h3>: ${meal.strInstructions}`;
                    });
                });
            }
            else {
                resultRecipes.innerHTML = '<p>No recipes found.</p>';
            }
        }
        catch (error) {
            console.error('Error fetching recipes:', error);
            resultRecipes.innerHTML =
                '<p>Error fetching recipes. Please try again later.</p>';
        }
    });
    searchButton.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const searchInputValue = searchInput.value.trim();
        if (searchInputValue !== '') {
            yield fetchRecipes(searchInputValue);
        }
    }));
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
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
            searchInput.value = (_a = target.textContent) !== null && _a !== void 0 ? _a : '';
            searchButton.click();
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        resultRecipes.innerHTML = '';
        searchInput.value = '';
    });
    closeButton.addEventListener('click', () => {
        // Close the modal when the close button is clicked
        modal.style.display = 'none';
    });
}
