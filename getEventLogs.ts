import {ethers} from 'ethers';

const start = async () => {
    const provider = new ethers.JsonRpcProvider('https://ethereum-goerli.publicnode.com')
    const startBlock = 10014287
    const endBlock = 10054287

    const contract = new ethers.Contract('address_of_contract', abi, provider)

    const logs = await getEventLogs(contract, startBlock, endBlock)

    console.log({logs})

    contract.on("SetSigner", (sender, signer, event) => {
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

start();