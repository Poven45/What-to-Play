import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);

	const platform = usePlatforms(gameQuery.platformId);

	const heading = `${platform?.name || ""} ${
		genre?.name || ""
	} Games`;

	return (
		<Heading as="h1" marginTop={3}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
