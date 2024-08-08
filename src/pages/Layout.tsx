import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, GridItem } from "@chakra-ui/react";

const Layout = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// This effect runs only once when the component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(
				(prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
					currentScrollPos < 10
			);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible]);

	return (
		<>
			<GridItem
				area="nav"
				position="sticky"
				top="0"
				zIndex="1000"
				transition="top 0.3s"
				style={{ top: visible ? "0" : "-3.5em" }}
			>
				<NavBar />
			</GridItem>

			<Outlet />
		</>
	);
};

export default Layout;
