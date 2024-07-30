import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
	const { colorMode } = useColorMode();
	return (
		<InputGroup>
            <InputLeftElement children={<BsSearch />} />
			<Input
				borderRadius={20}
				placeholder="Search games..."
				variant="filled"
				bg={colorMode === "dark" ? "gray.700" : "gray.100"}
			/>
		</InputGroup>
	);
};

export default Search;
