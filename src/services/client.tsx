import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "22a8e7e533694f0f903452dc391f057d"

export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY
    }
})