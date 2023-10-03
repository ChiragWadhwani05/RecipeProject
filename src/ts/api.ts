import { renderRecipes } from "./renderrecipes";

interface EdamamData {
  hits: any[]; // Adjust the type according to your API response structure
}

const fetchEdamamData = async (query: string): Promise<void> => {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=93509e25&app_key=5b672ecf669bb80353fb097d327d45d5`);
        const data: EdamamData = await response.json();

        if (data && data.hits) {
        const recipes = data.hits.map(hit => hit.recipe);
        renderRecipes(recipes);
        } else {
        console.error('Invalid data format from Edamam API');
        }
    } catch (error) {
        console.error('Error fetching data from Edamam API:', error);
    }
};

export { fetchEdamamData };