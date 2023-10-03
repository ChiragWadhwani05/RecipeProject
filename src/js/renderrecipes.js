var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createRecipeCard } from "./card.js";
import { fetchEdamamData } from "./api.js";
const resultRecipes = document.querySelector('.searched-recipes-lists');
function renderRecipes(searchInputValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // const data = await fetchEdamamData(searchInputValue);
        try {
            const data = yield fetchEdamamData(searchInputValue);
            if (data && data.hits) {
                const recipes = data.hits.map((hit) => hit.recipe); // Adjust the mapping based on your API response structure
                if (resultRecipes) {
                    resultRecipes.innerHTML = '';
                    recipes.forEach((recipe) => {
                        const recipeCard = createRecipeCard(recipe); // Assuming you have a function to create recipe cards
                        if (resultRecipes) {
                            resultRecipes.appendChild(recipeCard);
                        }
                    });
                }
            }
            else {
                resultRecipes.innerHTML = `<h1> Recepies Not Found </h1>`;
            }
        }
        catch (error) {
            console.error('Error fetching or rendering recipes:', error);
        }
    });
}
;
export { renderRecipes };
