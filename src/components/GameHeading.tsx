import { Heading } from "@chakra-ui/react";
import useGenre from "../entities/useGenre";
import usePlatforms from "../entities/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const genre = useGenre(genreId);

	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const platform = usePlatforms(platformId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<Heading as="h1" marginTop={3}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
