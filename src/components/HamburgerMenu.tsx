// components/HamburgerMenu.jsx
import React from "react";
import {
	IconButton,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	useColorMode,
	Flex,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import GenreList from "./GenreList";

const HamburgerMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode } = useColorMode();

	return (
		<>
			<Flex align="center">
				<IconButton
					icon={<HamburgerIcon />}
					onClick={onOpen}
					aria-label="Open menu"
					display={{ base: "block", lg: "none" }}
					mr={2}
				/>
				<Text
					display={{ base: "block", lg: "none" }}
					fontSize="lg"
					fontWeight="bold"
				>
					Genre Filter
				</Text>
			</Flex>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody
						bg={colorMode === "dark" ? "gray.700" : "gray.100"}
					>
						<GenreList onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default HamburgerMenu;
