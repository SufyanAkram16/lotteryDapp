import React from "react";
import {
  Flex,
  Heading,
  Button,
  Spacer,

} from "@chakra-ui/react";
import WalletConnectBtn from "./WalletConnectBtn";
import UserCard from "./UserCard";

function Header({address,connectWallet}) {
  return (
      <Flex
        w={"100%"}
        backgroundColor={"#383C47"}
        p={2.5}
        borderBottom={"1px solid white"}
        mb={10}
      >
        <Heading
          ml={6}
          mt={1}
          fontSize={"xx-large"}
          fontWeight={"bold"}
          cursor={"pointer"}
          color={"#F2505E"}
        >
          Lottery DAPP 💰
        </Heading>
        <Spacer />
        {!address ? (
          <WalletConnectBtn connectWallet={connectWallet}/>
        ): (<UserCard address={address}/> )}
        
        
      </Flex>

      
  );
}

export default Header;
