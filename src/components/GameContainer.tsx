import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameContainer = ({children}: Props) => {
  return (
    <Box _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "all 0.15s ease-in-out" }} width="100%" borderRadius={10} overflow={"hidden"}>
        {children}
    </Box>
  )
}

export default GameContainer