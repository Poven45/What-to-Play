import {
	Box,
	Grid,
	GridItem,
	HStack,
	Show,
	useColorMode,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import useGameQueryStore from "../store";

const HomePage = () => {
	const { colorMode } = useColorMode();
	const { gameQuery } = useGameQueryStore();

	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<Show above="lg">
				<GridItem
					area="aside"
					paddingX="16px"
					margin={1.5}
					bg={colorMode === "dark" ? "gray.700" : "gray.100"}
					borderRadius={10}
				>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem
				area="main"
				margin={1.5}
				bg={colorMode === "dark" ? "gray.700" : "gray.100"}
				borderRadius={10}
			>
				<Box margin={1.5} paddingLeft={3.5}>
					<GameHeading />
					<HStack spacing={4} marginTop={4}>
						<PlatformSelector />
						<SortSelector platforms={gameQuery.platformId} />
					</HStack>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
