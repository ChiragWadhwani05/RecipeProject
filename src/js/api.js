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
            const response = yield fetch(`https://serverforrecipeproject-production.up.railway.app/api?keyword=${query}`);
            const data = yield response.json();
            console.log(data);
            if (data.hits.length > 0) {
                return data;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error('Error fetching data from Backend:', error);
            console.log(error);
            throw error;
        }
    });
}
;
export { fetchEdamamData };
