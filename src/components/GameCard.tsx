import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, useColorMode } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { colorMode } = useColorMode();
	return (
		<Card bg={colorMode === "dark" ? "gray.800" : "gray.300"}>
			<Image src={getCroppedImageUrl(game.background_image)} alt={`game image of ${game.name}`} />
			<CardBody>
				<HStack justifyContent={"space-between"} mb={2}>
					<PlatformIcons
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading size="xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
