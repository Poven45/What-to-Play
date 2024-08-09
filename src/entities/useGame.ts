import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/usePlatforms";
import { Genre } from "./useGenre";
import { Publisher } from "./usePublisher";

export interface Game {
	id: number;
	name: string;
	slug: string;
	genres: Genre[];
	publishers: Publisher[];
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const apiClient = new APIClient<Game>(`/games`);

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
