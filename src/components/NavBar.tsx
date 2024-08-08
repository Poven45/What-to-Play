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
		if(window.location.pathname !== "/") navigate("/");
		window.location.reload();
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
				_hover={{ opacity: 0.85, transform: "scale(1.025)", transition: "all 0.2s ease-in-out"}}
				draggable="false"
				pointerEvents={"stroke"}
			/>
			<Search />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
