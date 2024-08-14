# SimpleStorage Project

## Overview

The SimpleStorage project is a basic Ethereum smart contract built using Solidity. It allows users to store and retrieve a single `uint256` value on the blockchain. This project uses the Hardhat framework for development, testing, and deployment.

## Project Structure

- **contracts/**: Contains the Solidity smart contracts.
  - `SimpleStorage.sol`: The main contract that allows storing and retrieving a value.
  
- **scripts/**: Contains scripts for deployment.
  - `deploy.js`: Script to deploy the `SimpleStorage` contract to the local network.
  
- **test/**: Contains the test files.
  - `simpleStorage-test.js`: Unit tests for the `SimpleStorage` contract using Hardhat and Chai.

## Prerequisites

- Node.js and npm installed.
- Hardhat framework set up in your project.

## Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/isommie-web3-projects/simplestorage.git
    cd simplestorage
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Compile the smart contract**:
    ```bash
    npx hardhat compile
    ```

## Deployment

### Deploy to Local Hardhat Network

1. **Start the Hardhat node**:
    ```bash
    npm run node
    ```

2. **Deploy the contract**:
    ```bash
    npm run deploy:local
    ```

After deployment, you should see the address of the deployed contract in the console output.

## Testing

You can run the tests to ensure the contract works as expected:

1. **Run the tests**:
    ```bash
    npm run test
    ```

2. **Run tests with gas report**:
    ```bash
    npm run test:gas
    ```

## Useful Commands

- **Compile the contract**: `npx hardhat compile`
- **Run tests**: `npm run test`
- **Deploy to local network**: `npm run deploy:local`
- **Start local Hardhat node**: `npm run node`
- **Get Hardhat help**: `npm run hardhat:help`

## License

This project is licensed under the MIT License.

---

### Author

**Edwin Anajemba**  
*Blockchain Engineer & Smart Contract Auditor*
