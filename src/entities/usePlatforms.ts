import usePlatform from "../hooks/usePlatform";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = (id?: number) => {
	const { data: platforms } = usePlatform();
	return platforms?.results.find((p) => p.id === id);
};

export default usePlatforms;
