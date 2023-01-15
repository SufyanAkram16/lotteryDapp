import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import truncateEthAddress from "truncate-eth-address";

function UserCard({ address }) {
  return (
    <Flex
      mr={5}
      fontSize={"md"}
      fontWeight={"bold"}
      cursor={"pointer"}
      border={"1px solid "}
      color={'white'}
      borderColor={"#464c5a"}
      backgroundColor={"#3e4754"}
      borderRadius={"full"}
      p={"2.5"}
    >
      👋 Welcome,{' '}
      <Text as="span" color={'#F2505E'}>{truncateEthAddress(address)}</Text>
    </Flex>
  );
}

export default UserCard;
