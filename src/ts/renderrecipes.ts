const resultRecipes = document.querySelector('.searched-recipes-lists') as HTMLDivElement;

import { createRecipeCard, Recipe } from "./card";


const renderRecipes = (recipes: Recipe[]): void => {
    if (resultRecipes) {
        resultRecipes.innerHTML = '';
        recipes.forEach((recipe: Recipe) => {
        const recipeCard = createRecipeCard(recipe);
        if (resultRecipes) {
            resultRecipes.appendChild(recipeCard);
            }
        });
        }
    };
    

export { renderRecipes };