import { useState } from "react";
import { Button, defineStyle, Text, useColorMode } from "@chakra-ui/react";

interface Props {
	children: string;
}

const ExpandText = ({ children }: Props) => {
	const { colorMode } = useColorMode();
	const myButtonStyleDark = defineStyle({
		bg: "#CAC070",
		color: "gray.800",
        transition: "all 0.2s ease-in-out",
		_hover: { bg: "#A79E51", color: "gray.800" },
	});

	const myButtonStyleLight = defineStyle({
		background: "#47759E",
		color: "gray.200",
		transition: "all 0.2s ease-in-out",
		_hover: { bg: "#375977", color: "gray.200" },
	});

	const [expanded, setExpanded] = useState(false);
	const limit = 369;

    if (!children) return null;

	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded ? children : children.substring(0, limit) + "... ";

	const espanolIndex = summary.indexOf("Español");
	const cutSummary =
		espanolIndex !== -1 ? summary.substring(0, espanolIndex) : summary;

	return (
		<Text>
			{cutSummary}
			<Button
				size="sm"
				fontWeight={"bold"}
				sx={
					colorMode === "dark"
						? myButtonStyleDark
						: myButtonStyleLight
				}
				onClick={() => setExpanded(!expanded)}
			>
				Show {expanded ? "Less" : "More"}
			</Button>
		</Text>
	);
};

export default ExpandText;
