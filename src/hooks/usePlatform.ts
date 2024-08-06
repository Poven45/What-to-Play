import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatform = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			apiClient
				.get<Response<Platform>>("/platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: { count: platforms.length, results: platforms },
	});
export default usePlatform;
