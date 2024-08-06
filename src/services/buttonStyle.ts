import { useColorMode } from "@chakra-ui/react";

const ButtonStyle = () => {
    const { colorMode } = useColorMode();
    const bg = colorMode === "dark" ? "gray.800" : "gray.300";
    return { bg };
};

export default ButtonStyle;