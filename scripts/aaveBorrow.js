// const { getWeth } = require("../scripts/getWeth")

// async function main() {
//     await getWeth()
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error)
//         process.exit(1)
//     })

const { getWeth } = require("../scripts/getWeth")

async function main() {
    //the protocol treats everything like an ERC20 token
    await getWeth()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
