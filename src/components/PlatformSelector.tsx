import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
    onPickPlatform: (platform: Platform) => void;
    pickedPlatform: Platform | null;
}

const PlatformSelector = ({ onPickPlatform, pickedPlatform }: Props) => {
	const { data, error } = usePlatform();

    if (error) return null;
    return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
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
