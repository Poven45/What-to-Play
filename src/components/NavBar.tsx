import { Button, HStack, Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../assets/WhatToPlayTransparentDark.png";
import logoLight from "../assets/WhatToPlayTransparentLight.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	const { colorMode } = useColorMode();
	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		window.location.reload();
	};
	return (
		<HStack 
			justifyContent="space-between" 
			p={4} 
			bg={colorMode === "dark" ? "gray.800" : "white"} // Add this line
			boxShadow="md" // Optional: adds a subtle shadow
		>
			<Button variant="link" onClick={handleLogoClick}>
				<Image
					src={colorMode === "dark" ? logoDark : logoLight}
					boxSize="8em"
					alt="logo"
				/>
			</Button>
			<Search onSearch={onSearch}/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;