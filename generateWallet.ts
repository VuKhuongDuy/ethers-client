import {ethers} from 'ethers';

const generateWallet = async () => {
  const provider = new ethers.JsonRpcProvider('https://binance.llamarpc.com')
  const mnemonic = await ethers.Wallet.createRandom(provider);

  console.log(mnemonic)
}

generateWallet()