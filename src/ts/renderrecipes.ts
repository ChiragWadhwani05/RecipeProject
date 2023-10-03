
import { createRecipeCard, Recipe } from "./card.js";
import { fetchEdamamData } from "./api.js";

const resultRecipes = document.querySelector('.searched-recipes-lists') as HTMLDivElement;
async function renderRecipes(searchInputValue: string){
    // const data = await fetchEdamamData(searchInputValue);
    try {
        const data = await fetchEdamamData(searchInputValue);
        if (data && data.hits) {
            const recipes: Recipe[] = data.hits.map((hit: any) => hit.recipe); // Adjust the mapping based on your API response structure
            if (resultRecipes) {
                resultRecipes.innerHTML = '';
                recipes.forEach((recipe: Recipe) => {
                    const recipeCard = createRecipeCard(recipe); // Assuming you have a function to create recipe cards
                    if (resultRecipes) {
                        resultRecipes.appendChild(recipeCard);
                    }
                });
            }
        } else {
            // console.log("Recipe Nhai mili");
            resultRecipes.innerHTML = `<h1> Recepies Not Found </h1>`;
            
        }
    } catch (error) {
        console.error('Error fetching or rendering recipes:', error);
        throw error;
    }
};


export { renderRecipes };