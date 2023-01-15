import {
  Box,
  Flex,
  Heading,
  Text,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PLayerRow from "./PLayerRow";

function PlayerCard({ lotteryPlayers }) {
  return (
    <Flex
      w={"80%"}
      maxW={"50%"}
      my={"50px"}
      alignItems={"center"}
      borderRadius={"2rem"}
      overflow={"hidden"}
      direction={"column"}
      backgroundColor={"#212530"}
      boxShadow={"10px 10px 5px 0px rgba(0, 0, 0, 0.75)"}
    >
      <Flex
        width={"100%"}
        color={"#f2505e"}
        h={"100px"}
        backgroundColor={"#383c47"}
        alignItems={"flex-end"}
        px={"40px"}
        py={"10px"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #31353e"}
      >
        <Heading size={"md"}> 💳 User Address</Heading>
        <Heading size={"md"}>💲 Amount</Heading>
      </Flex>

      <Flex
        w={"100%"}
        h={"100%"}
        direction={"column"}
        gap={"10px"}
        color={"white"}
        alignItems={"center"}
        p={10}
      >
        {lotteryPlayers.length ? (
          lotteryPlayers.map((player, index) => (
            <PLayerRow key={index} player={player} />
          ))
        ) : (
          <Heading fontWeight={"bold"} size={"md"} color={"#f2505e"}>
            No players yet
          </Heading>
        )}
      </Flex>
    </Flex>
  );
}

export default PlayerCard;
