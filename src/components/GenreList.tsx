import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onPickGenre: (genre: Genre) => void;
	pickedGenreId?: number;
}

const GenreList = ({ pickedGenreId, onPickGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize={"2xl"} mb={3} mt={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={1}>
						<HStack>
							<Image
								boxSize={"40px"}
								borderRadius={10}
								objectFit={"cover"}
								src={getCroppedImageUrl(genre.image_background)}
								alt={"Genre Image of " + genre.name}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={
									genre.id === pickedGenreId
										? "bold"
										: "normal"
								}
								onClick={() => onPickGenre(genre)}
								fontSize="lg"
								variant={"link"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
