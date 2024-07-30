import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
    const [pickedGenre, setPickedGenre] = useState<Genre | null>(null);
    const [pickedPlatform, setPickedPlatform] = useState<Platform | null>(null);

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
				<GridItem area="aside" paddingX="16px">
					<GenreList pickedGenre={pickedGenre} onPickGenre={(genre) => setPickedGenre(genre)}/>
				</GridItem>
			</Show>
			<GridItem area="main">
                <PlatformSelector pickedPlatform={pickedPlatform} onPickPlatform={(platform) => setPickedPlatform(platform)}/>
				<GameGrid pickedPlatform={pickedPlatform} pickedGenre={pickedGenre}/>
			</GridItem>
		</Grid>
	);
}
export default App;
