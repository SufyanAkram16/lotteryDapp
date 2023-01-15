import React from "react";
import { Flex, Heading, Button, Box, Text } from "@chakra-ui/react";
import truncateEthAddress from "truncate-eth-address";

function PotCard({ enterLottery, pickWinner, lotteryId, lotteryPot,lastWinner }) {
  return (
    <Box
      bg={"#242833"}
      w={"50%"}
      borderRadius={"2rem"}
      boxShadow={"10px 10px 5px 0px rgba(0, 0, 0, 0.75);"}
    >
      <Flex direction={"column"} mt={6} alignItems={"center"}>
        <Flex direction={'row'}><Heading as={"span"} size={"lg"} mb={4} color={"white"}>
          Lottery{ ' '}
        </Heading>
        <Heading as={'span'} color={'#F45358'}>{lotteryId? (' # '+ lotteryId) : '1'}</Heading>
        </Flex>
        
        <Text fontWeight={"bold"} mt={2} fontSize={"2xl"} color={"white"}>
          Pot 🍯:  <Text as={"span"} color={"gold"}>{lotteryPot} ETH</Text>
        </Text>
        <Text fontWeight={"bold"} mt={5} fontSize={"2xl"} color={"white"}>
          🏆Last Winners🏆
        </Text>
        {!lastWinner.length ? (<Text fontWeight={"bold"} fontSize={"1.5rem"} color={"#F45358"}>
          No winner yet
        </Text>): (lastWinner.length >0 && (
          <Text fontWeight={"bold"} fontSize={"1.5rem"} color={"#F45358"}>
          {truncateEthAddress(lastWinner[lastWinner.length-1])}
        </Text>
                ))}
        
        <Button
          bg={"#1e2128"}
          color={"#f45358"}
          w={"50%"}
          borderRadius={"1.5rem"}
          placeSelf={"center"}
          border={"1px solid #f45358"}
          px={"15px"}
          py={"32px"}
          mt={"20px"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          onClick={enterLottery}
        >
          Enter
        </Button>
        <Button
          bg={"#1e2128"}
          color={"#f45358"}
          w={"50%"}
          borderRadius={"1.5rem"}
          border={"1px solid #f45358"}
          px={"15px"}
          py={"32px"}
          my={"20px"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          onClick={pickWinner}
        >
          Pick Winner!
        </Button>
      </Flex>
    </Box>
  );
}

export default PotCard;
