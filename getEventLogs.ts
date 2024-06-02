import {ethers} from 'ethers';
import launchpadAbi from './abis/launchpad.json'

const start = async () => {
    const provider = new ethers.JsonRpcProvider('https://evm-rpc-arctic-1.sei-apis.com')
    const startBlock = 23872857
    const endBlock = 23872869

    const contract = new ethers.Contract('0xff6bb6fb618052996376f4037daf04738a1ffe63', launchpadAbi, provider)

    const logs = await getEventLogs(contract, startBlock, endBlock)

    console.log({logs})

    contract.on("MintNft", (sender, signer, event) => {
        console.log(sender, signer)
        console.log({event})
        // do whatever you want here
        // I'm pretty sure this returns a promise, so don't forget to resolve it
    })
}

const getEventLogs = async (contract: any, fromBlock: number, toBlock: number) => {
    const filter = contract.filters.SetSigner();

    const logs = await contract.queryFilter(filter, fromBlock, toBlock)

    return logs
}

// const encodeMsg = () => {
//     const object = {
//         "start_sale": {
//             "cw721_address": "sei1l8tjmjagrrjtrzncewtvscs39dezdcg2cuvemen3wgunlfpr45qqpaawl9",
//             "sale_type": "Fixed",
//             "min_bid_increment_percent": 10000,
//             "duration_type": "Fixed",
//             "initial_price": "100",
//             "royalty": {
//                 "address": "sei1932egdcxujcgg6r7fgpef4xj9c6glm8tyz8tpd",
//                 "rate": 5000
//             },
//             "denom": {
//                 "native": "usei"
//             }
//         }
//     }
//     const encoder = new TextEncoder();
//     const binaryData = encoder.encode(JSON.stringify(object));
//     const base64Data = btoa(String.fromCharCode(...binaryData));
//     return base64Data
// }

// encodeMsg();