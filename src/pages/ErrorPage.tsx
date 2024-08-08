import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<NavBar />
			<Heading padding={5}>Error</Heading>
			<Text padding={5} >
				{isRouteErrorResponse(error)
					? "This page does not exist, click logo to go home"
					: "Something unexpected happened, click logo to go home"}
			</Text>
		</>
	);
};

export default ErrorPage;
