var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchEdamamData(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.edamam.com/search?q=${query}&app_id=93509e25&app_key=5b672ecf669bb80353fb097d327d45d5`);
            const data = yield response.json();
            console.log(data.hits);
            if (data.hits.length > 0) {
                return data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error('Error fetching data from Edamam API:', error);
            console.log(error);
            throw error;
        }
    });
}
;
export { fetchEdamamData };
