import React from 'react'
import { Button } from '@chakra-ui/react'

function WalletConnectBtn({connectWallet}) {
  return (
    <Button
          mr={5}
          fontSize={"md"}
          fontWeight={"bold"}
          color={'white'}
          cursor={"pointer"}
          border={"1px solid "}
          borderColor={"#464c5a"}
          backgroundColor={"#3e4754"}
          borderRadius={"full"}
          p={"2.5"}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
  )
}

export default WalletConnectBtn