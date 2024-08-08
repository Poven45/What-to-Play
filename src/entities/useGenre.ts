import useGenres from "../hooks/useGenres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenre = (id?: number) => {
	const { data: genres } = useGenres();
	return genres?.results.find((g) => g.id === id);
};

export default useGenre;
