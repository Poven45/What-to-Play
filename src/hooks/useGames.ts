import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { Response } from "../services/api-client";

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
	metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
	useQuery<Response<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient
				.get<Response<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
						metacritic: "1, 100",
					},
				})
				.then(res => res.data),
	});

export default useGames;
