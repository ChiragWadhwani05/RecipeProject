var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchRecipeSuggestions(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `https://serverforrecipeproject-production.up.railway.app/api?keyword=${query}`;
        try {
            const response = yield fetch(apiUrl);
            const data = yield response.json();
            console.log(data);
            return data.hits.map((hit) => hit.recipe.label);
        }
        catch (error) {
            console.error('Error fetching recipe suggestions:', error);
            return [];
        }
    });
}
export default fetchRecipeSuggestions;
