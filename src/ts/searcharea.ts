import { renderRecipes } from "./renderrecipes.js";

const searchInput  = document.querySelector('#search-input') as HTMLInputElement;
const searchButton = document.querySelector('.search-button') as HTMLButtonElement;

searchInput.addEventListener('keydown', (event) =>{
    if (event.key ==='Enter') {
        buttonClick("");
    }
});

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchInputValue = searchInput.value.trim();
    renderRecipes(searchInputValue);
});

function buttonClick(text:string) {
    if (text!=="") {
        searchInput.value=text;
    }
    searchButton.click();
}
document.addEventListener('DOMContentLoaded', ()=>{
    searchInput.value="";
});
export {buttonClick};
