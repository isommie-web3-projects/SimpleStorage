// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const storage = await SimpleStorage.deploy();
    // console.log(storage)
  
    console.log("SimpleStorage deployed to:", await storage.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  