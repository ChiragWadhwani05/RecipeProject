async function fetchRecipeSuggestions(query: string) {
  const apiKey = '5b672ecf669bb80353fb097d327d45d5'; // Replace with your Adamam API key
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=93509e25&app_key=${apiKey}`;

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
