// require("@nomiclabs/hardhat-waffle")
// require("@nomiclabs/hardhat-etherscan")
// require("hardhat-deploy")
// require("solidity-coverage")
// require("hardhat-gas-reporter")
// require("hardhat-contract-sizer")
// require("dotenv").config()

// const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
// const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
// // const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
// const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//     defaultNetwork: "hardhat",
//     networks: {
//         hardhat: {
//             chainId: 31337,
//             blockConfirmations: 1,
//             forking: {
//                 url: MAINNET_RPC_URL,
//             },
//         },
//         localhost: {
//             chainId: 31337,
//             blockConfirmations: 1,
//         },
//         // goerli: {
//         //     chainId: 5,
//         //     blockConfirmations: 6,
//         //     url: GOERLI_RPC_URL,
//         //     accounts: [GOERLI_PRIVATE_KEY],
//         // },
//     },
//     solidity: {
//         compilers: [{ version: "0.8.9" }, { version: "0.6.6" }, { version: "0.4.19" }],
//     },
//     etherscan: {
//         apiKey: {
//             goerli: ETHERSCAN_API_KEY,
//         },
//     },
//     gasReporter: {
//         enabled: false,
//         currency: "USD",
//         outputFile: "gas-report.txt",
//         noColors: true,
//     },
//     namedAccounts: {
//         deployer: {
//             default: 0,
//             1: 0,
//         },
//     },
//     mocha: {
//         timeout: 300000, // 300 seconds max
//     },
// }

require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
// const KOVAN_RPC_URL =
//     process.env.KOVAN_RPC_URL || "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY || "0x11e----------------------------------------------e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""


module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
        localhost: {
            chainId: 31337,
        },
        // kovan: {
        //     url: KOVAN_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 42,
        //     blockConfirmations: 6,
        // },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.4.19",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}


