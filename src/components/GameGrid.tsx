import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameContainer from "./GameContainer";
import { GameQuery } from "../App";
import React from "react";
import ButtonStyle from "../services/buttonStyle";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) {
		return <Text>{error.message}</Text>;
	}

	const buttonStyle = ButtonStyle();

	return (
		<Box padding={5}>
			<SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={4}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameContainer key={skeleton}>
							<GameSkeleton />
						</GameContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameContainer key={game.id}>
								<GameCard game={game} />
							</GameContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{hasNextPage && (
				<Button
					onClick={() => fetchNextPage()}
					marginY={4}
					{...buttonStyle}
				>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;
