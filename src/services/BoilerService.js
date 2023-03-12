import axios from 'axios';

class BoilerService {
    static async getRepositories(query, category, page) {
        return await axios.get(
            `https://api.boilerservice.com/search/${category}?q=${query}&page=${page}&per_page=100`
        );
    }
}
export default BoilerService;