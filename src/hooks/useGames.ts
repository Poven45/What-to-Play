import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatform";

const apiClient = new APIClient<Game>("/games");

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
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					metacritic: "1, 100",
				},
			}),
	});

export default useGames;
