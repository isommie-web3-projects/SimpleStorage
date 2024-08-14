require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20", // Specify your Solidity version
  networks: {
    hardhat: {
      chainId: 1337 // Default Hardhat Network chain id
    },
    localhost: {
      url: "http://127.0.0.1:8545" // Default URL for local Ethereum node
    }
  }
};
