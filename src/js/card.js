// const resultRecipes : HTMLElement | null = document.querySelector('.searched-recipes-lists');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close-button');
const modalRecipeTitle = document.querySelector('.modal-recipe-title');
const modalIngredients = document.querySelector('.recipe-ingredients');
const createRecipeCard = (recipe) => {
    const recipediv = document.createElement('section');
    const imageUrl = recipe.image; // Assuming you have a function getPlaceholderImageURL to handle missing images
    recipediv.innerHTML = `
          <img src="${imageUrl}" alt="${recipe.label}">
          <div class="text-area">
          <h3>${recipe.label}</h3>
          <p>Calories: ${recipe.calories.toFixed(2)}</p>
          </div>`;
    recipediv.addEventListener('click', () => {
        console.log(recipe.label);
        modalContainer.style.display = 'flex';
        modalRecipeTitle.textContent = recipe.label;
        modalIngredients.innerHTML = `<h3>Ingredients</h3>: ${recipe.ingredientLines.join(', ')}`;
    });
    return recipediv;
};
closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});
export { createRecipeCard };
