import { useInfiniteQuery } from "@tanstack/react-query";
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
	useInfiniteQuery<Response<Game>, Error>({
		queryKey: ["games", gameQuery],
		initialPageParam: 1,
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					metacritic: "1, 100",
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});

export default useGames;
