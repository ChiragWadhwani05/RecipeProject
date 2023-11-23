import { buttonClick } from './searcharea.js';

const suggestionsContainer = document.getElementById('suggestions-container');

function renderSuggestions(suggestions: any[]) {
  if (suggestionsContainer) {
    suggestionsContainer.innerHTML = '';

    suggestions.forEach((suggestion) => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('suggestion');
      suggestionElement.textContent = suggestion;

      suggestionElement.addEventListener('click', function () {
        // searchInput.value = suggestion;
        buttonClick(suggestion);
        suggestionsContainer.style.display = 'none';
      });

      suggestionsContainer.appendChild(suggestionElement);
    });

    suggestionsContainer.style.display =
      suggestions.length > 0 ? 'block' : 'none';
  }
}

export default renderSuggestions;
