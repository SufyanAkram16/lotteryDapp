const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_Lottery_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\sufya\\OneDrive\\Documents\\key.env', 'utf-8'), "https://goerli.infura.io/v3/78133ed82f414d228dfdcf0aa36c5959")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.15"
    }
  }
};
