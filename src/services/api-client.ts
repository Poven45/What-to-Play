import axios from "axios";

export interface Response<T> {
	count: number;
	results: T[];
}   

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        // YES I KNOW YOU CAN SEE THIS ITS FINE LOL
        key: "1d03e2d1bfb94fa08c9ff379e52b1050"
    }
})