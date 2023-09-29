// const navbarMenuButton = document.querySelector('.navbar-menu');
// const savedRecipesButton = document.querySelector('.saved-recipes');
// const categoriesButtons = document.querySelectorAll(
//     '.catogries-buttons button');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-button');
const resultRecipes = document.querySelector('.searched-recipes-lists');
const categoriesButtonsContainer = document.querySelector(
    '.catogries-buttons');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const modalRecipeTitle = document.querySelector('.modal-recipe-title');
const modalIngredients = document.querySelector('.recipe-ingredients');
// const modalMethod = document.querySelector('.recipe-method');
const foodCategories=['Dessert', 'Snacks', 'Main Course',
  'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];
// let ingredients = null;

const getPlaceholderImageURL = (url) => {
  return '/Images/food-placeholder.webp';
};
const renderRecipes = (recipes) => {
  resultRecipes.innerHTML = '';
  recipes.forEach((hit) => {
    const recipe = hit.recipe;
    const recipediv = document.createElement('section');
    const imageUrl = recipe.image || getPlaceholderImageURL();
    recipediv.innerHTML = `
        <img src="${imageUrl}">
        <div class="text-area">
        <h3>${recipe.label}</h3>
        <p>Calories: ${recipe.calories.toFixed(2)}</p>
        </div>`;
    resultRecipes.appendChild(recipediv);
    // ingredients=recipe
    console.log(recipe);
    recipediv.addEventListener('click', () =>{
      console.log(recipe.label);
      modal.style.display = 'flex';
      modalRecipeTitle.textContent = recipe.label;
      modalIngredients.textContent = `Ingredients: ${recipe.ingredientLines}`;
      // modalMethod.textContent = `Cooking Instructions: ${recipeMethod}`;
    });
  });
};

const fetchEdamamData = async (query) => {
  try {
    const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=93509e25&app_key=5b672ecf669bb80353fb097d327d45d5 `);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from Edamam API:', error);
    return null;
  }
};
searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value.trim();

  if (searchInputValue !== '') {
    const edamamData = await fetchEdamamData(searchInputValue);
    if (edamamData && edamamData.hits.length > 0) {
      renderRecipes(edamamData.hits);
    } else {
      resultRecipes.innerHTML = '<h3>No recipes found.</h3>';
    }
  } else {
    resultRecipes.innerHTML = '<h3>Please enter a search term.</h3>';
  }
});

searchInput.addEventListener('keydown', (event) =>{
  if (event.key ==='Enter') {
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
  if (event.target.tagName === 'BUTTON') {
    searchInput.value = event.target.textContent;
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

