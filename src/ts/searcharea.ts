const searchInput  = document.querySelector('#search-input') as HTMLInputElement;
const searchButton : HTMLElement = document.querySelector('.search-button') as HTMLButtonElement;

import { fetchEdamamData } from "./api";

searchInput.addEventListener('keydown', (event) =>{
    if (event.key ==='Enter') {
        buttonClick("");
    }
});

searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchInputValue = searchInput.value.trim();
    fetchEdamamData(searchInputValue);
});

function buttonClick(text:string) {
    if (text==="") {
        searchInput.value=text;
    }
    searchButton.click();
}
export {buttonClick};
