import { useParams } from "react-router-dom";
import useGame from "../entities/useGame";
import {
	Box,
	Heading,
	SimpleGrid,
	Spinner,
	useColorMode,
	Flex,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import useTrailers from "../hooks/useTrailers";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	// Always call the useTrailers hook, even if game is not yet loaded
	// Use a default value of 0 for gameId, ensuring the hook is always called
	const { data: trailersData } = useTrailers(game?.id || 0);
	const { colorMode } = useColorMode();

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;


	const hasTrailer = trailersData?.results?.length > 0;

	return (
		<Box margin={5}>
			<SimpleGrid
				borderRadius={10}
				marginY={5}
				columns={{ base: 1, md: 1 }}
				spacing={5}
			>
				<Box
					bg={colorMode === "dark" ? "gray.700" : "gray.100"}
					padding={5}
					borderRadius={10}
				>
					<Flex direction={{ base: "column", lg: "row" }} gap={5}>
						<Box flex={hasTrailer ? "1" : "1 1 100%"}>
							<Heading>{game.name}</Heading>
							<ExpandableText>
								{game.description_raw}
							</ExpandableText>
							<GameAttributes game={game} />
						</Box>
						{/* Conditionally render the box containing the trailer */}
						{hasTrailer && (
							<Box
								width={{ base: "100%", lg: "50%" }}
								maxWidth="600px"
							>
								<GameTrailer gameId={game.id} />
							</Box>
						)}
					</Flex>
				</Box>
			</SimpleGrid>
			<GameScreenshots gameId={game.id} />
		</Box>
	);
};

export default GameDetailPage;
