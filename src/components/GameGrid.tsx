import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
    pickedGenre: Genre | null;
	pickedPlatform: Platform | null;
}

const GameGrid = ({ pickedGenre, pickedPlatform }: Props) => {
	const { data, error, isLoading } = useGames(pickedGenre, pickedPlatform);
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
				{data.map((game) => (
					<GameContainer>
						<GameCard key={game.id} game={game} />
					</GameContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
