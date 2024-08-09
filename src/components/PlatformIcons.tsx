import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "../entities/usePlatforms";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: BsNintendoSwitch,
  mac: FaApple,
  linux: FaLinux,
  ios: FaMobileAlt,
  web: FaGlobe,
  android: FaAndroid,
};

const PlatformIcons = ({ platforms }: Props) => {
  const displayPlatforms = platforms.slice(0, 4); // Display up to 4 icons
  const remainingCount = platforms.length - displayPlatforms.length;

  return (
    <HStack spacing={1} overflow="hidden">
      {displayPlatforms.map((platform) => (
        <Tooltip key={platform.id} label={platform.name}>
          <Icon
            as={iconMap[platform.slug]}
            color="gray.500"
            boxSize="1.25em"
          />
        </Tooltip>
      ))}
      {remainingCount > 0 && (
        <Tooltip label={`${remainingCount} more`}>
          <span style={{ color: "gray", fontSize: "0.8em" }}>+{remainingCount}</span>
        </Tooltip>
      )}
    </HStack>
  );
};

export default PlatformIcons;