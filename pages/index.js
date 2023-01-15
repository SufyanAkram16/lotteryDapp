import { Flex } from "@chakra-ui/react";
import createLotteryContract from "../utils/lotteryContract";
import Header from "../components/Header";
import PotCard from "../components/PotCard";
import PlayerCard from "../components/PlayerCard";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function Home() {
  const [web3, setWeb3] = useState();
  const [lotteryContract, setLotteryContract] = useState();
  const [address, setAddress] = useState("");
  const [lotteryPot, setLotteryPot] = useState()
  const [lotteryPlayers, setPlayers] = useState([])
  const [lastWinner, setLastWinner] = useState([])
  const [lotteryId, setLotteryId] = useState()
  const [etherscanUrl, setEtherscanUrl] = useState()

  useEffect(() => {
    updateLottery()
  }, [lotteryContract])
  

  //update Lottery

  const updateLottery = async () =>{
    if(lotteryContract){
      try {
        const pot = await lotteryContract.methods.getBalance().call()
        setLotteryPot(web3.utils.fromWei(pot, 'ether'))
        
        setPlayers(await lotteryContract.methods.getPlayers().call())

        setLotteryId(await lotteryContract.methods.getLotteryId().call())

        setLastWinner( await lotteryContract.methods.getWinners().call())
        console.log([... lastWinner], 'last winners')
        console.log([...lotteryPlayers], 'players')
      } catch (error) {
        console.log(error)
      }
    }
  }

  // Connect wallet
  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        //request wallet connection
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // create web3 instance
        const web3 = new Web3(window.ethereum);
        // set web3 instance in state
        setWeb3(web3);
        // get list of accounts
        const accounts = await web3.eth.getAccounts();
        // set Account 1 to state
        setAddress(accounts[0]);
        setLotteryContract(createLotteryContract(web3));

        windows.ethereum.on("accountsChanged", async () => {
          const accounts = await web3.eth.getAccounts();

          // set account 1 to state
          setAddress(accounts[0]);
        });
        updateLottery()
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install");
    }
  };

  //Enter Lottery

  const enterLottery = async () => {
    try {
      await lotteryContract.methods.enter().send({
        from: address,
        value: web3.utils.toWei("0.1", "ether"),
        gas: 3000000,
        gasPrice: null,
      });
      updateLottery()
    } catch (error) {
      console.log(error);
    }
  };

  //Pick Winner
  const pickWinner = async () => {
    try {

      let tx = await lotteryContract.methods.pickWinner().send({
        from:address,
        gas: 3000000,
        gasPrice: null,
      })
      console.log(tx)
      setEtherscanUrl('https://goerli.etherscan.io/tx/' + tx.transactionHash)
      updateLottery()
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        bg={"#1E2128"}
        h={"auto"}
      >
        <Header connectWallet={connectWallet} address={address} />
        <PotCard enterLottery={enterLottery} pickWinner={pickWinner} lotteryId={lotteryId} lotteryPot={lotteryPot} lastWinner={lastWinner}/>
        <PlayerCard lotteryPlayers={lotteryPlayers} />
      </Flex>
    </>
  );
}
