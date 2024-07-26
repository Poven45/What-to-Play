import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/WhatToPlayTransparent.png'
import React from 'react'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='7em' alt="logo"/>
      <h1>NavBar</h1>
    </HStack>
  )
}

export default NavBar;