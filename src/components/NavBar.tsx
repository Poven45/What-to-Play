import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../assets/WhatToPlayTransparentDark.png";
import logoLight from "../assets/WhatToPlayTransparentLight.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
	const { colorMode } = useColorMode();
	return (
		<HStack justifyContent={"space-between"} p={4}>
			<Image
				src={colorMode === "dark" ? logoDark : logoLight}
				boxSize="8em"
				alt="logo"
			/>
			<h1>NavBar</h1>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
