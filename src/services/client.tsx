import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "c1dcba6528ef4d93851d199d63d3b6ab"

export default axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: API_KEY
    }
})