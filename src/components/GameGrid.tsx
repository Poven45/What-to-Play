import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameContainer from "./GameContainer";

const GameGrid = () => {
	const { games, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
				padding={5}
				spacing={4}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameContainer>
							<GameSkeleton key={skeleton} />
						</GameContainer>
					))}
				{games.map((game) => (
					<GameContainer>
						<GameCard key={game.id} game={game} />
					</GameContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
