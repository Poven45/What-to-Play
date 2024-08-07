import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import ButtonStyle from "../services/buttonStyle";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatform();
	const pickedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
	const setPickedPlatformId = useGameQueryStore(s => s.setPlatformId);
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
						onClick={() => setPickedPlatformId(platform.id)}
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
