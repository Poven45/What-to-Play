import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../assets/WhatToPlayDark.svg";
import logoLight from "../assets/WhatToPlayLight.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const { colorMode } = useColorMode();
	const navigate = useNavigate();

	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		navigate("/What-to-Play/");
	};

	return (
		<HStack
			justifyContent="space-between"
			p={4}
			bg={colorMode === "dark" ? "gray.800" : "white"} // Add this line
			boxShadow="md" // Optional: adds a subtle shadow
		>
			<Image
				src={colorMode === "dark" ? logoDark : logoLight}
				onClick={handleLogoClick}
				boxSize={"8em"}
				alt="logo"
				cursor="pointer"
				_hover={{ opacity: 0.85 }}
				draggable="false"
				pointerEvents={"stroke"}
			/>
			<Search />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
