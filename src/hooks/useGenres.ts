import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface GenresResponse {
    count: number;
    results: Genre[];
}   

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
		apiClient
			.get<GenresResponse>("/genres", { signal: controller.signal })
			.then((response) => {
                setGenres(response.data.results)
                setIsLoading(false);
            })
			.catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsLoading(false);
            });
            
        return () => {
            controller.abort();
        }
	}, []);

    return { genres, error, isLoading };
}

export default useGenres;