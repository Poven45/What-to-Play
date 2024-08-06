import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatform";
import ButtonStyle from "../services/buttonStyle";

interface Props {
    onPickSortOrder: (sortOrder: string) => void;
    sortOrder: string;
    platforms: Platform | null;
}

const SortSelector = ({ onPickSortOrder, sortOrder, platforms }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "name", label: "Name" },
        { value: "metacritic", label: "Popularity" },
        { value: "-added", label: "Date added" },
        { value: "-released", label: "Release date" },
        { value: "rating", label: "Average rating" },
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    const buttonStyle = ButtonStyle();
    return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}
				{...buttonStyle}
			>
				Sort by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onPickSortOrder(order.value)}
						key={order.value}
						value={order.value}
						isDisabled={order.value === "rating" && !platforms}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;