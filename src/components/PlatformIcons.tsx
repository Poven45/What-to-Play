import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[],
}

const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: FaMobileAlt ,
    web: FaGlobe,
    android: FaAndroid
}

const PlatformIcons = ({platforms}: Props) => {
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" boxSize={"1.25em"}/>
            ))}
        </HStack> 
    )
}

export default PlatformIcons;