import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const pickedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setPickedGenreId = useGameQueryStore((s) => s.setGenreId);
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
								onClick={() => setPickedGenreId(genre.id)}
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
