import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "acf92179022940839e813fb7d420f84b"

export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY
    }
})