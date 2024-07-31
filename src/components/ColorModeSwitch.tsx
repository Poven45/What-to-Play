import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<SunIcon />
			<Switch 
				colorScheme="purple"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<MoonIcon />
		</HStack>
	);
};

export default ColorModeSwitch;