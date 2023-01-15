import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import truncateEthAddress from "truncate-eth-address";

function PLayerRow({player }) {
  return (
    <>
    <Flex w={'100%'} height={'0.5'} backgroundColor={'#1e222d'} borderTop={'1px solid #31353e'} alignItems={'center'} justifyContent={'space-between'} px={4} py={5}>
      <Text color={"white"} fontSize={'20px'} fontWeight={'bold'} lineHeight={1.2} letterSpacing={'0.5px'}>
          {truncateEthAddress(player)}
      </Text>
      <Text color={"gold"} fontSize={'20px'} fontWeight={'bold'} lineHeight={1.2} letterSpacing={'0.5px'}>
          +0.1 ETH
      </Text>
      </Flex>
    </>
  )
}

export default PLayerRow