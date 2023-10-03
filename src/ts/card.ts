// const resultRecipes : HTMLElement | null = document.querySelector('.searched-recipes-lists');
const modal = document.getElementById('modal') as HTMLDivElement;
const closeButton  = document.querySelector('.close-button') as HTMLButtonElement;
const modalRecipeTitle = document.querySelector('.modal-recipe-title') as HTMLTextAreaElement;
const modalIngredients = document.querySelector('.recipe-ingredients') as HTMLDivElement;
interface Recipe {
    label: string;
    calories: number;
    image?: string;
    ingredientLines: string[];
    // Add more properties if needed
    }

const createRecipeCard = (recipe: Recipe): HTMLElement => {
    const recipediv = document.createElement('section');
    const imageUrl = recipe.image ; // Assuming you have a function getPlaceholderImageURL to handle missing images
    recipediv.innerHTML = `
        <img src="${imageUrl}" alt="${recipe.label}">
        <div class="text-area">
        <h3>${recipe.label}</h3>
        <p>Calories: ${recipe.calories.toFixed(2)}</p>
        </div>`;
        
    recipediv.addEventListener('click', () => {
        console.log(recipe.label);
        modal.style.display = 'flex';
        modalRecipeTitle.textContent = recipe.label;
        modalIngredients.innerHTML = `<h3>Ingredients</h3>: ${recipe.ingredientLines.join(', ')}`;
    });

    return recipediv;
    };


closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


export { createRecipeCard, Recipe };
    