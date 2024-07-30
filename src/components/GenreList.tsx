import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data } = useGenres();
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
                        <Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
