import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import ButtonStyle from "../services/buttonStyle";

interface PlatformSelectorProps {
    onPickPlatform: (platform: Platform) => void;
    pickedPlatform: Platform | null;
}

const PlatformSelector = ({ onPickPlatform, pickedPlatform }: PlatformSelectorProps) => {
    const { data, error } = usePlatform();
    const buttonStyle = ButtonStyle();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown /> } {...buttonStyle} >
                {pickedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem onClick={() => onPickPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;