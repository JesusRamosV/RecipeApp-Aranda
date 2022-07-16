import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";

const API_KEY = "ce789ec0cbc646c3bd59b0abd2c8c0ab"

export default axios.create({
    baseURL: BASE_URL,
    params: {
        apiKey: API_KEY
    }
})