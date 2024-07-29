import { useEffect, useState } from "react";
import apiClient from "../assets/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
}

interface GameResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
        const controller = new AbortController();
		apiClient
			.get<GameResponse>("/games", { signal: controller.signal })
			.then((response) => setGames(response.data.results))
			.catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)});
            
        return () => {
            controller.abort();
        }
	}, []);

    return { games, error };
}

export default useGames