import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
	count: number;
    next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		// YES I KNOW YOU CAN SEE THIS ITS FINE LOL
		key: "1d03e2d1bfb94fa08c9ff379e52b1050",
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<Response<T>>(this.endpoint, config)
			.then((res) => res.data);
	}
}

export default APIClient;