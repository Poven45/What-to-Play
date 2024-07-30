import { Grid, GridItem, HStack, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    const { colorMode } = useColorMode();

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
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX="16px" margin={1.5} bg={colorMode === "dark" ? "gray.700" : "gray.100"} borderRadius={10}>
					<GenreList pickedGenre={gameQuery.genre} onPickGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
				</GridItem>
			</Show>
			<GridItem area="main" margin={1.5} bg={colorMode === "dark" ? "gray.700" : "gray.100"} borderRadius={10}>
                <HStack spacing={4} margin={1.5} paddingLeft={3.5}>
                    <PlatformSelector pickedPlatform={gameQuery.platform} onPickPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}/>
                    <SortSelector />
                </HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}
export default App;
