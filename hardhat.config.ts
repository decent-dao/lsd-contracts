import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "@typechain/hardhat";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      mainnet: `privatekey://${process.env.MAINNET_DEPLOYER_PRIVATE_KEY}`,
      ropsten: `privatekey://${process.env.ROPSTEN_DEPLOYER_PRIVATE_KEY}`,
      rinkeby: `privatekey://${process.env.RINKEBY_DEPLOYER_PRIVATE_KEY}`,
      goerli: `privatekey://${process.env.GOERLI_DEPLOYER_PRIVATE_KEY}`,
      kovan: `privatekey://${process.env.KOVAN_DEPLOYER_PRIVATE_KEY}`,
      skale: `privatekey://${process.env.SKALE_DEPLOYER_PRIVATE_KEY}`,
      optimism: `privatekey://${process.env.OPTIMISM_DEPLOYER_PRIVATE_KEY}`,
      polygon: `privatekey://${process.env.POLYGON_DEPLOYER_PRIVATE_KEY}`,
    },
  },
  networks: {
    mainnet: {
      chainId: 1,
      url: process.env.MAINNET_PROVIDER,
      accounts: [process.env.MAINNET_DEPLOYER_PRIVATE_KEY || ""],
    },
    ropsten: {
      chainId: 3,
      url: process.env.ROPSTEN_PROVIDER,
      accounts: [process.env.ROPSTEN_DEPLOYER_PRIVATE_KEY || ""],
    },
    rinkeby: {
      chainId: 4,
      url: process.env.RINKEBY_PROVIDER,
      accounts: [process.env.RINKEBY_DEPLOYER_PRIVATE_KEY || ""],
    },
    goerli: {
      chainId: 5,
      url: process.env.GOERLI_PROVIDER,
      accounts: [process.env.GOERLI_DEPLOYER_PRIVATE_KEY || ""],
    },
    kovan: {
      chainId: 42,
      url: process.env.KOVAN_PROVIDER,
      accounts: [process.env.KOVAN_DEPLOYER_PRIVATE_KEY || ""],
    },
    skale: {
      chainId: 0x40b9020d,
      url: process.env.SKALE_PROVIDER,
      accounts: [process.env.SKALE_DEPLOYER_PRIVATE_KEY || ""],
    },
    optimism: {
      chainId: 10,
      url: process.env.OPTIMISM_PROVIDER,
      accounts: [process.env.OPTIMISM_DEPLOYER_PRIVATE_KEY || ""],
    },
    polygon: {
      chainId: 137,
      url: process.env.POLYGON_PROVIDER,
      accounts: [process.env.POLYGON_DEPLOYER_PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  paths: {
    deploy: "deploy/core",
  },
};

export default config;
