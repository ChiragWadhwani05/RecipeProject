// const navbarMenuButton = document.querySelector('.navbar-menu');
// const savedRecipesButton = document.querySelector('.saved-recipes');
// const categoriesButtons = document.querySelectorAll(
//     '.catogries-buttons button');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search-button');
const resultRecipes = document.querySelector('.searched-recipes-lists');
const categoriesButtonsContainer = document.querySelector(
    '.catogries-buttons');

const foodCategories=['Dessert', 'Snacks', 'Main Course',
  'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];


// const fetchRecipies = async (query) => {
//   try {
//     const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//       // `https://indian-food-db.herokuapp.com/api/getmealbyingredient?ingredient=${query}`);
//     const data = await response.json();
//     console.log(data);
//     if (data.meals) {
//       resultRecipes.innerHTML = ''; // Clear previous results

//       data.meals.forEach((meal) => {
//         const recipediv = document.createElement('section');
//         recipediv.innerHTML = `
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//             <h3>"${meal.strMeal}"</h3>`;
//         resultRecipes.appendChild(recipediv);
//       });
//     } else {
//       resultRecipes.innerHTML = '<p>No recipes found.</p>';
//     }
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//   }
// };


// const dummyImageURL = '/Images/food-placeholder.webp';
const getPlaceholderImageURL = (url) => {
  return '/Images/food-placeholder.webp';
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
    if (edamamData) {
      renderRecipes(edamamData.hits);
    } else {
      resultRecipes.innerHTML = '<p>No recipes found.</p>';
    }
  } else {
    resultRecipes.innerHTML = '<p>Please enter a search term.</p>';
  }
});
const renderRecipes = (recipes) => {
  resultRecipes.innerHTML = ''; // Clear previous results
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
  });
};


searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value.trim();
  if (searchInputValue !== '') {
    fetchRecipies(searchInputValue);
  } else {
    resultRecipes.innerHTML = '<p>Please enter a search term.</p>';
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
