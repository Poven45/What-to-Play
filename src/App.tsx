import {
	Box,
	Grid,
	GridItem,
	HStack,
	Show,
	useColorMode,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState, useEffect } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	const { colorMode } = useColorMode();
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// This effect runs only once when the component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(
				(prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
					currentScrollPos < 10
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible]);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem
				area="nav"
				position="sticky"
				top="0"
				zIndex="1000"
				transition="top 0.3s"
				style={{ top: visible ? "0" : "-3.5em" }}
			>
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem
					area="aside"
					paddingX="16px"
					margin={1.5}
					bg={colorMode === "dark" ? "gray.700" : "gray.100"}
					borderRadius={10}
				>
					<GenreList
						pickedGenreId={gameQuery.genreId}
						onPickGenre={(genre) =>
							setGameQuery({ ...gameQuery, genreId: genre.id })
						}
					/>
				</GridItem>
			</Show>
			<GridItem
				area="main"
				margin={1.5}
				bg={colorMode === "dark" ? "gray.700" : "gray.100"}
				borderRadius={10}
			>
				<Box margin={1.5} paddingLeft={3.5}>
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={4} marginTop={4}>
						<PlatformSelector
							pickedPlatformId={gameQuery.platformId}
							onPickPlatform={(platform) =>
								setGameQuery({
									...gameQuery,
									platformId: platform.id,
								})
							}
						/>
						<SortSelector
							platforms={gameQuery.platformId}
							sortOrder={gameQuery.sortOrder}
							onPickSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
