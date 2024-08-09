import { Game } from "../entities/useGame";
import {
	Card,
	CardBody,
	Heading,
	HStack,
	Image,
	Box,
	Text,
} from "@chakra-ui/react";
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
		<Link
			to={`/games/${game.slug}`}
			style={{ display: "block", height: "100%" }}
		>
			<Card
				{...buttonStyle}
				height="100%"
				display="flex"
				flexDirection="column"
			>
				<Image
					src={getCroppedImageUrl(game.background_image)}
					alt={`game image of ${game.name}`}
					objectFit="cover"
					height="200px"
				/>
				<CardBody
					flex="1"
					display="flex"
					flexDirection="column"
					padding={3}
				>
					<HStack justifyContent="space-between" mb={2} width="100%">
						<Box flex="1" maxWidth="80%">
							<PlatformIcons
								platforms={game.parent_platforms.map(
									(p) => p.platform
								)}
							/>
						</Box>
						<Box>
							<CriticScore score={game.metacritic} />
						</Box>
					</HStack>
					<Heading size="md" noOfLines={2} flex="1">
						{game.name}
					</Heading>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
