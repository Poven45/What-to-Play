import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: Props) => {
	const { colorMode } = useColorMode();

    const ref = useRef<HTMLInputElement>(null);

	return (
		<form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value)
            }
            }}>
		    <InputGroup>
		                <InputLeftElement children={<BsSearch />} />
		    	<Input ref={ref}
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
