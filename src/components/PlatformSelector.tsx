import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import ButtonStyle from "../services/buttonStyle";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
	onPickPlatform: (platform: Platform) => void;
	pickedPlatformId?: number;
}

const PlatformSelector = ({
	onPickPlatform,
	pickedPlatformId,
}: PlatformSelectorProps) => {
	const { data, error } = usePlatform();
	const pickedPlatform = usePlatforms(pickedPlatformId)

	const buttonStyle = ButtonStyle();

	if (error) return null;
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}
				{...buttonStyle}
			>
				{pickedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						onClick={() => onPickPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
