import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	useColorMode,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onPickSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onPickSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
        { value: "name", label: "Name" },
        { value: "metacritic", label: "Popularity" },
		{ value: "-added", label: "Date added" },
		{ value: "-released", label: "Release date" },
		{ value: "rating", label: "Average rating" },
	];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

	const { colorMode } = useColorMode();
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}
				bg={colorMode === "dark" ? "gray.800" : "gray.300"}
			>
				Sort by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem onClick={() => onPickSortOrder(order.value)} key={order.value} value={order.value}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
