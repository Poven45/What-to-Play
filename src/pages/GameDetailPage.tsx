import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../entities/useGame";
import { Box, Heading, Spinner, Text, useColorMode } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandText";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const { colorMode } = useColorMode();

	return (
		<Box
			borderRadius={10}
			padding={5}
			margin={5}
			bg={colorMode === "dark" ? "gray.700" : "gray.100"}
		>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
		</Box>
	);
};

export default GameDetailPage;
