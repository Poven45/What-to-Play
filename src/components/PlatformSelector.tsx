import { Button, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
    onPickPlatform: (platform: Platform) => void;
    pickedPlatform: Platform | null;
}

const PlatformSelector = ({ onPickPlatform, pickedPlatform }: Props) => {
	const { data, error } = usePlatform();
	const { colorMode } = useColorMode();

    if (error) return null;
    return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />} bg={colorMode === "dark" ? "gray.800" : "gray.300"}>
				{pickedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
                {data.map((platform) => (
                    <MenuItem onClick={() => onPickPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                ))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
