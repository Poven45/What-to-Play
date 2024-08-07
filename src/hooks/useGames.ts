import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatform";
import ms from "ms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGames = () =>{
	const gameQuery = useGameQueryStore(s => s.gameQuery);
	return useInfiniteQuery<Response<Game>, Error>({
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
		staleTime: ms("24h"),
	});
}
	

export default useGames;
