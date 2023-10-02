// const navbarMenuButton = document.querySelector('.navbar-menu');
// const savedRecipesButton = document.querySelector('.saved-recipes');
// const categoriesButtons = document.querySelectorAll(
//     '.catogries-buttons button');
const searchInput  = document.querySelector('#search-input') as HTMLInputElement;
const searchButton : HTMLElement | null = document.querySelector('.search-button') as HTMLElement;
const resultRecipes : HTMLElement | null = document.querySelector('.searched-recipes-lists');
const categoriesButtonsContainer : HTMLElement | null = document.querySelector(
    '.catogries-buttons') as HTMLButtonElement;
const modal : HTMLElement | null = document.getElementById('modal');
const closeButton : HTMLElement | null = document.querySelector('.close-button');
const modalRecipeTitle : HTMLElement | null = document.querySelector('.modal-recipe-title');
const modalIngredients : HTMLElement | null = document.querySelector('.recipe-ingredients');
const modalMethod : HTMLElement | null = document.querySelector('.recipe-method');
const foodCategories=['Dessert', 'Snacks', 'Main Course',
  'Dinner', 'Chicken', 'Breakfast', 'Cake', 'Pizza',
];

if (searchButton&&searchInput&&categoriesButtonsContainer&&resultRecipes&&modal&&closeButton&&modalMethod&&
  modalRecipeTitle&&modalIngredients) {

const fetchRecipes = async (query:string) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

    if (data.meals) {
        
        resultRecipes.innerHTML = ''; // Clear previous results
        console.log(data.meals);
        data.meals.forEach((meal:{[key: string]: string;}) => {
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
    } else {
      resultRecipes.innerHTML = '<p>No recipes found.</p>';
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    resultRecipes.innerHTML =
    '<p>Error fetching recipes. Please try again later.</p>';
  }
};


searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const searchInputValue = searchInput.value.trim();
  
  if (searchInputValue !== '') {
    await fetchRecipes(searchInputValue);
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


categoriesButtonsContainer.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (target.tagName === 'BUTTON') {
    searchInput.value = target.textContent ?? '';
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
