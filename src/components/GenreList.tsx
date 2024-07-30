import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onPickGenre: (genre: Genre) => void;
    pickedGenre: Genre | null;
}

const GenreList = ({ pickedGenre, onPickGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
    if(error) return null;
    if(isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY={1}>
					<HStack>
						<Image
							boxSize={"40px"}
							borderRadius={10}
							src={getCroppedImageUrl(genre.image_background)} alt={"Genre Image of " + genre.name}
						/>
                        <Button fontWeight={genre.id === pickedGenre?.id ? "bold" : "normal"}  onClick={() => onPickGenre(genre)} fontSize="lg" variant={"link"}>{genre.name}</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
