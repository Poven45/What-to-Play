import {
	Input,
	InputGroup,
	InputLeftElement,
	useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const Search = () => {
	const { colorMode } = useColorMode();

	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore(s => s.setSearchText);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
					bg={colorMode === "dark" ? "gray.700" : "gray.100"}
				/>
			</InputGroup>
		</form>
	);
};

export default Search;
