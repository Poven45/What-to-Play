import { Game } from "../entities/useGame";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import ButtonStyle from "../services/buttonStyle";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const buttonStyle = ButtonStyle();
	return (
		<Link to={`/games/${game.slug}`}>
			<Card {...buttonStyle}>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					alt={`game image of ${game.name}`}
				/>
				<CardBody>
					<HStack justifyContent={"space-between"} mb={2}>
						<PlatformIcons
							platforms={game.parent_platforms.map(
								(p) => p.platform
							)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading size="xl">{game.name}</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
