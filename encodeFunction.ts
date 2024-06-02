import {ethers} from 'ethers';
import launchpadAbi from './abis/launchpad.json'

let iface = new ethers.Interface(launchpadAbi);
const hex = iface.encodeFunctionData('transferOwnership', ["0x1234567890123456789012345678901234567890"]);

console.log({hex})