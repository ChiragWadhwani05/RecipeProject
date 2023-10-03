

interface EdamamData {
  hits: any[]; // Adjust the type according to your API response structure
}

async function fetchEdamamData(query: string){
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=93509e25&app_key=5b672ecf669bb80353fb097d327d45d5`);
        const data = await response.json();
        console.log(data.hits);
        if (data.hits.length>0) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching data from Edamam API:', error);
        console.log(error);
        
        throw error;
    }
};

export { fetchEdamamData };
