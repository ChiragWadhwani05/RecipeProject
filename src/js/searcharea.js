var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderRecipes } from './renderrecipes.js';
import renderSuggestions from './renderSuggestions.js';
import fetchRecipeSuggestions from './recipeSugestions.js';
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-button');
const suggestionsContainer = document.getElementById('suggestions-container');
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        suggestionsContainer.innerHTML = '';
        buttonClick('');
    }
});
searchInput.addEventListener('input', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (searchInput.value === '') {
            suggestionsContainer.innerHTML = '';
        }
        const inputValue = searchInput.value.toLowerCase();
        // Fetch recipe suggestions from the Adamam API
        const suggestions = yield fetchRecipeSuggestions(inputValue);
        // Render suggestions
        renderSuggestions(suggestions);
    });
});
suggestionsContainer === null || suggestionsContainer === void 0 ? void 0 : suggestionsContainer.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    suggestionsContainer.style.display = 'hidden';
}));
searchButton.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const searchInputValue = searchInput.value.trim();
    renderRecipes(searchInputValue);
}));
function buttonClick(text) {
    if (text !== '') {
        searchInput.value = text;
    }
    searchButton.click();
}
document.addEventListener('DOMContentLoaded', () => {
    searchInput.value = '';
});
export { buttonClick };
