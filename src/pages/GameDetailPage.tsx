import { useParams } from "react-router-dom";
import useGame from "../entities/useGame";
import {
	Box,
	Heading,
	SimpleGrid,
	Spinner,
	useColorMode,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const { colorMode } = useColorMode();

	return (
		<SimpleGrid
			borderRadius={10}
			margin={5}
			columns={{ base: 1, md: 2 }}
			spacing={5}
		>
			<Box
				bg={colorMode === "dark" ? "gray.700" : "gray.100"}
				padding={5}
				borderRadius={10}
			>
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</Box>
			<Box
				bg={colorMode === "dark" ? "gray.700" : "gray.100"}
				padding={5}
				borderRadius={10}
			>
				<GameTrailer gameId={game.id} />
				<GameScreenshots gameId={game.id} />
			</Box>
		</SimpleGrid>
	);
};

export default GameDetailPage;
