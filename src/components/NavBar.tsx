import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logoDark from "../assets/WhatToPlayTransparentDark.png";
import logoLight from "../assets/WhatToPlayTransparentLight.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	const { colorMode } = useColorMode();
	return (
		<HStack justifyContent={"space-between"} p={4}>
			<Image
				src={colorMode === "dark" ? logoDark : logoLight}
				boxSize="8em"
				alt="logo"
			/>
			<Search onSearch={onSearch}/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
