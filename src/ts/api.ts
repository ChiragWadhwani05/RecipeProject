
interface EdamamData {
  hits: any[];
}

async function fetchEdamamData(query: string){
    try {
        const response = await fetch(`https://serverforrecipeproject-production.up.railway.app/api?keyword=${query}`);
        const data = await response.json();
        console.log(data);
        if (data.hits.length>0) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching data from Backend:', error);
        console.log(error);
        throw error;
    }
};

export { fetchEdamamData };
