import { renderRecipes } from './renderrecipes.js';
import renderSuggestions from './renderSuggestions.js';
import fetchRecipeSuggestions from './recipeSugestions.js';
const searchInput = document.querySelector('#search-input') as HTMLInputElement;
const searchButton = document.querySelector(
  '.search-button'
) as HTMLButtonElement;
const suggestionsContainer = document.getElementById(
  'suggestions-container'
) as HTMLDivElement;
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    suggestionsContainer.innerHTML = '';
    buttonClick('');
  }
});

searchInput.addEventListener('input', async function () {
  if (searchInput.value === '') {
    suggestionsContainer.innerHTML = '';
  }
  const inputValue = searchInput.value.toLowerCase();
  // Fetch recipe suggestions from the Adamam API
  const suggestions = await fetchRecipeSuggestions(inputValue);

  // Render suggestions
  renderSuggestions(suggestions);
});

suggestionsContainer?.addEventListener('click', async (event: MouseEvent) => {
  suggestionsContainer.style.display = 'hidden';
});

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value.trim();
  renderRecipes(searchInputValue);
});

function buttonClick(text: string) {
  if (text !== '') {
    searchInput.value = text;
  }
  searchButton.click();
}
document.addEventListener('DOMContentLoaded', () => {
  searchInput.value = '';
});
export { buttonClick };
