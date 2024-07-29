import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "1d03e2d1bfb94fa08c9ff379e52b1050"
    }
})