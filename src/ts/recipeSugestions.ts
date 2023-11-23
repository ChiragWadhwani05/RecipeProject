async function fetchRecipeSuggestions(query: string) {
  const apiUrl = `https://serverforrecipeproject-production.up.railway.app/api?keyword=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    return data.hits.map((hit: any) => hit.recipe.label);
  } catch (error) {
    console.error('Error fetching recipe suggestions:', error);
    return [];
  }
}
export default fetchRecipeSuggestions;
