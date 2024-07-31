import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameContainer from "./GameContainer";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<SimpleGrid
			columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
			padding={5}
			spacing={4}
		>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameContainer key={skeleton}>
						<GameSkeleton />
					</GameContainer>
				))}
			{data.map((game) => (
				<GameContainer key={game.id}>
					<GameCard game={game} />
				</GameContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
