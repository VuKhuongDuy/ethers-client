const { ethers } = require("ethers");

const main = async () => {
  const provider = new ethers.JsonRpcProvider("https://polygon-amoy.drpc.org");

  const contractAddress = "0x0956cbAB41c5e00f5A34c351C1108Cbe33167799";
  const contractABI = [
      "event Transfer(address indexed from, address indexed to, uint256 value)"
  ];

  // Tạo đối tượng hợp đồng
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  ethers

  // Đăng ký bộ lắng nghe sự kiện Transfer
  contract.on("Transfer", (from, to, value, event) => {
      console.log(`Transfer event detected:`);
      console.log(`From: ${from}`);
      console.log(`To: ${to}`);
      console.log(`Value: ${value.toString()}`);
      console.log(`Event: ${event}`);
  });
}

main()