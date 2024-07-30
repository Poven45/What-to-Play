import { Menu, MenuButton, Button, MenuList, MenuItem, useColorMode } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
    const { colorMode } = useColorMode();
    return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />} bg={colorMode === "dark" ? "gray.800" : "gray.300"}>
                Sort by: Relevance
			</MenuButton>
			<MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Rating</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Release date</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default SortSelector